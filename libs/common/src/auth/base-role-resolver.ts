import { Injectable } from '@nestjs/common';
import { AuthUser } from '@app/auth-types';
import { RoleDataFilterService } from './role-data-filter.service';

// Import UserRole from the correct path
export enum UserRole {
  SITE_ADMIN = 'SITE_ADMIN',
  CREW_LEAD = 'CREW_LEAD',
  TRADESMAN = 'TRADESMAN',
  OBSERVER = 'OBSERVER'
}

@Injectable()
export abstract class BaseRoleResolver {
  constructor(protected readonly roleDataFilter: RoleDataFilterService) { }

  /**
   * Get role-based MongoDB filter for queries
   */
  protected getRoleFilter(user: AuthUser, resourceType: 'user' | 'team' | 'project' | 'task' | 'timesheet' = 'project') {
    return this.roleDataFilter.getDataFilter(user, resourceType);
  }

  /**
   * Check if user can access specific resource
   */
  protected canAccessResource(user: AuthUser, resourceOwnerId: string, resourceTeamId?: string): boolean {
    return this.roleDataFilter.canAccessResource(user, resourceOwnerId, resourceTeamId);
  }

  /**
   * Check if user can perform write operations
   */
  protected canWrite(user: AuthUser): boolean {
    return this.roleDataFilter.canWrite(user);
  }

  /**
   * Check if user can manage other users
   */
  protected canManageUsers(user: AuthUser): boolean {
    return this.roleDataFilter.canManageUsers(user);
  }

  /**
   * Check if user can manage teams
   */
  protected canManageTeams(user: AuthUser): boolean {
    return this.roleDataFilter.canManageTeams(user);
  }

  /**
   * Filter sensitive data based on user role
   */
  protected filterSensitiveData<T extends Record<string, any>>(user: AuthUser, data: T): Partial<T> {
    if (user.role === UserRole.OBSERVER) {
      // Remove sensitive fields for observers
      const { password, salary, hourlyRate, ...filtered } = data;
      return filtered as Partial<T>;
    }
    return data;
  }

  /**
   * Validate write operation permissions
   */
  protected validateWritePermission(user: AuthUser, operation: string): void {
    if (!this.canWrite(user)) {
      throw new Error(`Access denied: ${user.role} role cannot perform ${operation} operations`);
    }
  }

  /**
   * Validate resource access permissions
   */
  protected validateResourceAccess(user: AuthUser, resourceOwnerId: string, resourceTeamId?: string): void {
    if (!this.canAccessResource(user, resourceOwnerId, resourceTeamId)) {
      throw new Error(`Access denied: Cannot access this resource`);
    }
  }
}