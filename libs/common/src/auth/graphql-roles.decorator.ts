import { UseGuards, applyDecorators } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { UserRole } from './role-data-filter.service';

/**
 * GraphQL decorator that combines authentication and role-based authorization
 * Usage: @RequireRoles(UserRole.SITE_ADMIN, UserRole.CREW_LEAD)
 */
export function RequireRoles(...roles: UserRole[]) {
  return applyDecorators(
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(...roles)
  );
}

/**
 * GraphQL decorator for admin-only access
 */
export function AdminOnly() {
  return RequireRoles(UserRole.SITE_ADMIN);
}

/**
 * GraphQL decorator for management access (SITE_ADMIN and CREW_LEAD)
 */
export function ManagementOnly() {
  return RequireRoles(UserRole.SITE_ADMIN, UserRole.CREW_LEAD);
}

/**
 * GraphQL decorator for authenticated users (all roles)
 */
export function AuthenticatedOnly() {
  return UseGuards(JwtAuthGuard);
}