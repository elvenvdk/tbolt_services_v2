# Role-Based Authentication & Authorization

This module provides comprehensive role-based access control (RBAC) for the Thunderbolt construction management platform.

## User Roles

- **SITE_ADMIN**: Full system access (General Foremen, Superintendents, Project Managers)
- **CREW_LEAD**: Team management and coordination (Trade Foremen, Lead Hands)
- **TRADESMAN**: Personal data and assigned tasks (Journeymen, Skilled Workers)
- **OBSERVER**: View-only access (Inspectors, Clients, Read-only users)

## Components

### Guards
- `JwtAuthGuard`: Validates JWT tokens and extracts user information
- `RolesGuard`: Enforces role-based access control

### Decorators
- `@Roles(UserRole.ADMIN, UserRole.CREW_LEAD)`: Specify required roles
- `@RequireRoles()`: GraphQL decorator combining auth + roles
- `@AdminOnly()`: SITE_ADMIN only access
- `@ManagementOnly()`: SITE_ADMIN and CREW_LEAD access
- `@AuthenticatedOnly()`: Any authenticated user

### Services
- `RoleDataFilterService`: Handles data access boundaries and filtering

### Middleware
- `RoleValidationMiddleware`: Validates role structure in requests

## Usage Examples

### GraphQL Resolvers

```typescript
@Resolver()
export class UserResolver {
  constructor(private readonly roleDataFilter: RoleDataFilterService) {}

  // Admin-only access
  @Query()
  @AdminOnly()
  async getAllUsers(@CurrentUser() user: AuthUser) {
    // Only SITE_ADMIN can access
  }

  // Management access
  @Query()
  @ManagementOnly()
  async getTeamReports(@CurrentUser() user: AuthUser) {
    const filter = this.roleDataFilter.getDataFilter(user, 'team');
    // Apply filter to query
  }

  // Specific roles
  @Mutation()
  @RequireRoles(UserRole.SITE_ADMIN, UserRole.CREW_LEAD)
  async createProject(@CurrentUser() user: AuthUser) {
    // Only admins and crew leads can create projects
  }
}
```

### Data Filtering

```typescript
// Get role-based MongoDB filter
const filter = this.roleDataFilter.getDataFilter(user, 'timesheet');

// Check resource access
const canAccess = this.roleDataFilter.canAccessResource(
  user, 
  resourceOwnerId, 
  resourceTeamId
);

// Check write permissions
const canWrite = this.roleDataFilter.canWrite(user);
```

## Data Access Boundaries

### SITE_ADMIN
- Access: All organization data
- Filter: `{ organization: user.orgId }`

### CREW_LEAD
- Access: Their assigned teams' data + personal data
- Filter: `{ organization: user.orgId, teamId: { $in: user.teamIds } }`

### TRADESMAN
- Access: Personal data only
- Filter: `{ organization: user.orgId, userId: user._id }`

### OBSERVER
- Access: Read-only organization data
- Filter: `{ organization: user.orgId }` (write operations blocked)

## JWT Token Payload

```typescript
interface ITokenPayload {
  userId: string;
  role: UserRole;
  teamIds?: string[];
  orgId: string;
}
```

## Migration from Legacy System

The system maintains backward compatibility with the legacy `roles` field while introducing the new `role` field. Existing code can gradually migrate to use the new role-based system.

## Security Considerations

1. **Token Validation**: All requests validate JWT tokens and extract role information
2. **Data Isolation**: Role-based filters ensure users only access appropriate data
3. **Write Protection**: OBSERVER role cannot perform write operations
4. **Resource Boundaries**: CREW_LEAD and TRADESMAN have strict data boundaries
5. **Team Isolation**: CREW_LEAD can only access their assigned teams

## Testing

Use the provided role-based test scenarios to validate:
- Data access boundaries
- Role-specific functionality
- Security isolation
- GraphQL query filtering