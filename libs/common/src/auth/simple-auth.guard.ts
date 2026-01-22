import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class SimpleAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    let request: any;

    // Handle GraphQL context
    if (context.getType<any>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      const ctx = gqlContext.getContext();
      request = ctx.req || ctx.request;
    } else {
      // Handle HTTP context
      request = context.switchToHttp().getRequest();
    }

    // Check for user in headers (passed from gateway)
    const userHeader = request?.headers?.user;
    if (userHeader) {
      try {
        const user = JSON.parse(userHeader);
        request.user = user;
        return true;
      } catch (error) {
        console.error('Failed to parse user header:', error);
      }
    }

    // Check for authentication token
    const token = request?.headers?.authentication;
    if (token) {
      // For development, create a mock user
      request.user = {
        _id: 'user-123',
        email: 'ilana@example.com',
        role: 'SITE_ADMIN',
        organization: 'default-org',
        orgId: 'default-org',
        organizationOwner: true
      };
      return true;
    }

    return false;
  }
}