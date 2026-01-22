import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// Define UserRole enum locally to avoid import issues
enum UserRole {
  SITE_ADMIN = 'SITE_ADMIN',
  CREW_LEAD = 'CREW_LEAD',
  TRADESMAN = 'TRADESMAN',
  OBSERVER = 'OBSERVER'
}

export interface AuthenticatedRequest extends Request {
  user?: {
    _id: string;
    email: string;
    orgId: string;
    role: UserRole;
    teamIds?: string[];
  };
}

@Injectable()
export class RoleValidationMiddleware implements NestMiddleware {
  use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user && req.user.role) {
      // Validate role enum
      if (!Object.values(UserRole).includes(req.user.role)) {
        throw new UnauthorizedException('Invalid user role');
      }

      // Validate teamIds for CREW_LEAD
      if (req.user.role === UserRole.CREW_LEAD && !req.user.teamIds) {
        req.user.teamIds = [];
      }
    }
    
    next();
  }
}