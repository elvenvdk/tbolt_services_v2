import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

// Define UserRole enum locally to avoid import issues
enum UserRole {
  SITE_ADMIN = 'SITE_ADMIN',
  CREW_LEAD = 'CREW_LEAD',
  TRADESMAN = 'TRADESMAN',
  OBSERVER = 'OBSERVER'
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const user = this.getUser(context);
    if (!user || !user.role) {
      return false;
    }

    return requiredRoles.includes(user.role);
  }

  private getUser(context: ExecutionContext) {
    if (context.getType() === 'http') {
      return context.switchToHttp().getRequest().user;
    }
    // GraphQL context
    const user = context.getArgs()[2]?.req?.user;
    if (user) {
      return typeof user === 'string' ? JSON.parse(user) : user;
    }
    return context.getArgs()[2]?.req?.headers?.user ? 
      JSON.parse(context.getArgs()[2].req.headers.user) : null;
  }
}