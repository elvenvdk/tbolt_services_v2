/**
 * EXAMPLE: How to use role-based authentication and authorization
 * 
 * This file demonstrates the usage patterns for the role-based access control system.
 * Copy these patterns to your actual resolvers and services.
 */

import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import type { AuthUser } from '@app/auth-types';
import { CurrentUser } from '../decorators/current-user.decorator';
import {
  RequireRoles,
  AdminOnly,
  ManagementOnly,
  AuthenticatedOnly
} from './graphql-roles.decorator';

// Define UserRole enum locally to support role-based access control
export enum UserRole {
  SITE_ADMIN = 'SITE_ADMIN',
  CREW_LEAD = 'CREW_LEAD',
  TRADESMAN = 'TRADESMAN',
  OBSERVER = 'OBSERVER'
}
import { RoleDataFilterService } from './role-data-filter.service';

// Example resolver showing different role-based access patterns
@Resolver()
export class ExampleRoleBasedResolver {
  constructor(private readonly roleDataFilter: RoleDataFilterService) { }

  // 1. Admin-only access
  @Query()
  @AdminOnly()
  async getAllUsers(@CurrentUser() user: AuthUser) {
    // Only SITE_ADMIN can access this
    return { message: 'Admin-only data' };
  }

  // 2. Management access (SITE_ADMIN and CREW_LEAD)
  @Query()
  @ManagementOnly()
  async getTeamReports(@CurrentUser() user: AuthUser) {
    // SITE_ADMIN sees all teams, CREW_LEAD sees only their teams
    const filter = this.roleDataFilter.getDataFilter(user, 'team');
    return { filter, message: 'Management data' };
  }

  // 3. Specific roles only
  @Query()
  @RequireRoles(UserRole.SITE_ADMIN, UserRole.CREW_LEAD, UserRole.TRADESMAN)
  async getTimesheets(@CurrentUser() user: AuthUser) {
    // All roles except OBSERVER can access timesheets
    const filter = this.roleDataFilter.getDataFilter(user, 'timesheet');
    return { filter, message: 'Timesheet data filtered by role' };
  }

  // 4. Any authenticated user
  @Query()
  @AuthenticatedOnly()
  async getProfile(@CurrentUser() user: AuthUser) {
    // All authenticated users can access their profile
    return { userId: user._id, role: user.role };
  }

  // 5. Write operations with role validation
  @Mutation()
  @RequireRoles(UserRole.SITE_ADMIN, UserRole.CREW_LEAD, UserRole.TRADESMAN)
  async createTimesheet(
    @Args('data') data: any,
    @CurrentUser() user: AuthUser
  ) {
    // Check if user can write
    if (!this.roleDataFilter.canWrite(user)) {
      throw new Error('Read-only access');
    }

    // Apply role-based data filtering
    const filter = this.roleDataFilter.getDataFilter(user, 'timesheet');
    return { message: 'Timesheet created with role-based access' };
  }

  // 6. Resource-specific access check
  @Mutation()
  @AuthenticatedOnly()
  async updateTask(
    @Args('taskId') taskId: string,
    @Args('data') data: any,
    @CurrentUser() user: AuthUser
  ) {
    // Check if user can access this specific resource
    const task = { userId: 'some-user-id', teamId: 'some-team-id' }; // Mock task

    if (!this.roleDataFilter.canAccessResource(user, task.userId, task.teamId)) {
      throw new Error('Access denied to this resource');
    }

    return { message: 'Task updated' };
  }
}

/**
 * USAGE PATTERNS:
 * 
 * 1. Use @AdminOnly() for SITE_ADMIN only features
 * 2. Use @ManagementOnly() for SITE_ADMIN and CREW_LEAD features  
 * 3. Use @RequireRoles(UserRole.X, UserRole.Y) for specific role combinations
 * 4. Use @AuthenticatedOnly() for any authenticated user
 * 5. Always use @CurrentUser() to get the authenticated user with role info
 * 6. Use RoleDataFilterService.getDataFilter() for MongoDB queries
 * 7. Use RoleDataFilterService.canAccessResource() for resource-specific checks
 * 8. Use RoleDataFilterService.canWrite() to check write permissions
 */