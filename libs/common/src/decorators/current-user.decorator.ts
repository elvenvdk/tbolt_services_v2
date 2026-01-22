import { AuthUser } from '@app/auth-types/user';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const getCurrentUserByContext = (context: ExecutionContext): AuthUser => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }

  // For GraphQL context, check multiple sources
  const gqlContext = context.getArgs()[2];

  // First check if user was set by JWT guard
  if (gqlContext?.req?.user) {
    return gqlContext.req.user;
  }

  // Then check headers from gateway
  const userHeader = gqlContext?.req?.headers?.user;
  if (userHeader) {
    try {
      return JSON.parse(userHeader);
    } catch (error) {
      console.error('Failed to parse user header:', error);
    }
  }

  // Return null if no user found
  return null;
};


export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return getCurrentUserByContext(context);
  },
);
