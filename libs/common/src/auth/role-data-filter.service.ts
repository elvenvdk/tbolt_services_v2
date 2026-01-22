import { Injectable } from '@nestjs/common';
import { AuthUser } from '@app/auth-types';

// Define UserRole enum locally to avoid import issues
export enum UserRole {
  SITE_ADMIN = 'SITE_ADMIN',
  CREW_LEAD = 'CREW_LEAD',
  TRADESMAN = 'TRADESMAN',
  OBSERVER = 'OBSERVER'
}

@Injectable()
export class RoleDataFilterService {
  /**
   * Get MongoDB filter based on user role for data access boundaries
   */
  getDataFilter(user: AuthUser, resourceType: 'user' | 'team' | 'project' | 'task' | 'timesheet' = 'project') {
    switch (user.role) {
      case UserRole.SITE_ADMIN:
        // SITE_ADMIN can access all organization data
        return { organization: user.orgId };

      case UserRole.CREW_LEAD:
        // CREW_LEAD can access their assigned teams' data
        if (resourceType === 'user') {
          return {
            organization: user.orgId,
            $or: [
              { teamIds: { $in: user.teamIds || [] } },
              { _id: user._id } // Include their own data
            ]
          };
        }
        return {
          organization: user.orgId,
          teamId: { $in: user.teamIds || [] }
        };

      case UserRole.TRADESMAN:
        // TRADESMAN can only access their personal data
        if (resourceType === 'user') {
          return { _id: user._id };
        }
        return {
          organization: user.orgId,
          userId: user._id
        };

      case UserRole.OBSERVER:
        // OBSERVER has read-only access to organization data (filtered in resolvers)
        return { organization: user.orgId };

      default:
        // Deny access by default
        return { _id: null };
    }
  }

  /**
   * Check if user can access specific resource
   */
  canAccessResource(user: AuthUser, resourceOwnerId: string, resourceTeamId?: string): boolean {
    switch (user.role) {
      case UserRole.SITE_ADMIN:
        return true;

      case UserRole.CREW_LEAD:
        // Can access if resource belongs to their teams or is their own
        return resourceOwnerId === user._id ||
          !!(resourceTeamId && user.teamIds?.includes(resourceTeamId));

      case UserRole.TRADESMAN:
        // Can only access their own resources
        return resourceOwnerId === user._id;

      case UserRole.OBSERVER:
        // Read-only access (write operations should be blocked at resolver level)
        return true;

      default:
        return false;
    }
  }

  /**
   * Check if user can perform write operations
   */
  canWrite(user: AuthUser): boolean {
    return user.role !== UserRole.OBSERVER;
  }

  /**
   * Check if user can manage other users
   */
  canManageUsers(user: AuthUser): boolean {
    return user.role === UserRole.SITE_ADMIN;
  }

  /**
   * Check if user can manage teams
   */
  canManageTeams(user: AuthUser): boolean {
    return [UserRole.SITE_ADMIN, UserRole.CREW_LEAD].includes(user.role as UserRole);
  }
}