// audit-logger.service.ts
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuditLogger {
  private readonly logger = new Logger(AuditLogger.name);

  logDataAccess(userId: string, action: string, resourceId: string, details?: any): void {
    this.logger.log(
      `AUDIT: User ${userId} performed ${action} on resource ${resourceId}`,
      JSON.stringify(details)
    );
  }
}