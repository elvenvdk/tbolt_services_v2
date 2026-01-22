import { Injectable, Logger } from '@nestjs/common';

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export interface LogEntry {
  level: LogLevel;
  service: string;
  method?: string;
  message: string;
  data?: Record<string, any>;
  error?: Error;
  timestamp: Date;
}

@Injectable()
export class AppLogger {
  private readonly logger = new Logger(AppLogger.name);

  debug(service: string, message: string, data?: Record<string, any>, method?: string): void {
    this.logMessage(LogLevel.DEBUG, service, message, data, method);
  }

  log(service: string, message: string, data?: Record<string, any>, method?: string): void {
    this.logMessage(LogLevel.INFO, service, message, data, method);
  }

  warn(service: string, message: string, data?: Record<string, any>, method?: string): void {
    this.logMessage(LogLevel.WARN, service, message, data, method);
  }

  error(service: string, message: string, error?: Error | string, data?: Record<string, any>, method?: string): void {
    const errorMessage = error instanceof Error ? error.message : error;
    const errorStack = error instanceof Error ? error.stack : undefined;

    const logData = {
      ...data,
      error: errorMessage,
      ...(errorStack && { stack: errorStack })
    };

    this.logMessage(LogLevel.ERROR, service, message, logData, method);
  }

  private logMessage(
    level: LogLevel,
    service: string,
    message: string,
    data?: Record<string, any>,
    method?: string
  ): void {
    const methodContext = method ? ` [${method}]` : '';
    const fullMessage = `[${service}]${methodContext} ${message}`;

    const logData = data ? JSON.stringify(data) : '';

    switch (level) {
      case LogLevel.DEBUG:
        this.logger.debug(fullMessage, logData);
        break;
      case LogLevel.INFO:
        this.logger.log(fullMessage, logData);
        break;
      case LogLevel.WARN:
        this.logger.warn(fullMessage, logData);
        break;
      case LogLevel.ERROR:
        this.logger.error(fullMessage, logData);
        break;
    }
  }

  /**
   * Logs operation performance metrics
   */
  logPerformance(
    service: string,
    operation: string,
    durationMs: number,
    success: boolean,
    data?: Record<string, any>
  ): void {
    const message = `${operation} completed in ${durationMs}ms (${success ? 'success' : 'failed'})`;
    const level = success ? LogLevel.INFO : LogLevel.WARN;

    this.logMessage(level, service, message, { ...data, durationMs }, 'performance');
  }

  /**
   * Logs data aggregation operations with metrics
   */
  logDataAggregation(
    service: string,
    operation: string,
    recordsProcessed: number,
    recordsSuccessful: number,
    durationMs: number,
    data?: Record<string, any>
  ): void {
    const successRate = recordsProcessed > 0
      ? ((recordsSuccessful / recordsProcessed) * 100).toFixed(1)
      : 'N/A';

    const message = `${operation}: ${recordsSuccessful}/${recordsProcessed} records processed (${successRate}%) in ${durationMs}ms`;
    const logData = {
      ...data,
      recordsProcessed,
      recordsSuccessful,
      durationMs,
      successRate
    };

    this.logMessage(LogLevel.INFO, service, message, logData, 'aggregation');
  }

  /**
   * Logs AI service operations
   */
  logAIOperation(
    service: string,
    model: string,
    operation: string,
    inputTokens: number,
    outputTokens: number,
    durationMs: number,
    success: boolean,
    data?: Record<string, any>
  ): void {
    const totalTokens = inputTokens + outputTokens;
    const message = `AI Operation: ${operation} using ${model} (${totalTokens} tokens) in ${durationMs}ms`;
    const logData = {
      ...data,
      model,
      inputTokens,
      outputTokens,
      totalTokens,
      durationMs,
      success
    };

    const level = success ? LogLevel.INFO : LogLevel.WARN;
    this.logMessage(level, service, message, logData, 'ai');
  }

  /**
   * Logs financial calculation operations
   */
  logFinancialCalculation(
    service: string,
    operation: string,
    inputs: Record<string, number>,
    outputs: Record<string, number>,
    data?: Record<string, any>
  ): void {
    const message = `Financial Calculation: ${operation}`;
    const logData = {
      ...data,
      inputs,
      outputs
    };

    this.logMessage(LogLevel.INFO, service, message, logData, 'financial');
  }

  /**
   * Logs document processing operations
   */
  logDocumentProcessing(
    service: string,
    documentType: string,
    filename: string,
    fileSizeBytes: number,
    processingTimeMs: number,
    success: boolean,
    extractedSize?: number,
    data?: Record<string, any>
  ): void {
    const message = `Document Processing: ${documentType} - ${filename} (${fileSizeBytes} bytes) processed in ${processingTimeMs}ms`;
    const logData = {
      ...data,
      documentType,
      filename,
      fileSizeBytes,
      processingTimeMs,
      extractedSize,
      success
    };

    const level = success ? LogLevel.INFO : LogLevel.WARN;
    this.logMessage(level, service, message, logData, 'document');
  }
}