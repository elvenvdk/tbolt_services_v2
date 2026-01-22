import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityConfig {
  // Input validation patterns
  static readonly SAFE_STRING_PATTERN = /^[a-zA-Z0-9\s\-_.@]+$/;
  static readonly SAFE_ID_PATTERN = /^[a-zA-Z0-9\-_]+$/;
  static readonly SAFE_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Content Security Policy
  static readonly CSP_DIRECTIVES = {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "wss:", "https:"],
    fontSrc: ["'self'"],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"],
  };

  // Rate limiting configuration
  static readonly RATE_LIMIT = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP',
  };

  // File upload restrictions
  static readonly FILE_UPLOAD = {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedMimeTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/pdf',
      'text/plain',
    ],
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.txt'],
  };

  // Sanitization helpers
  static sanitizeInput(input: string): string {
    if (!input) return '';
    return input
      .replace(/[<>\"'&]/g, '')
      .replace(/[\r\n\t]/g, '')
      .trim()
      .substring(0, 1000);
  }

  static sanitizeLogMessage(message: string): string {
    if (!message) return '';
    return message
      .replace(/[\r\n\t]/g, ' ')
      .replace(/[<>\"'&]/g, '')
      .substring(0, 500);
  }

  static validateId(id: string): boolean {
    return this.SAFE_ID_PATTERN.test(id);
  }

  static validateEmail(email: string): boolean {
    return this.SAFE_EMAIL_PATTERN.test(email);
  }

  static isAllowedFileType(filename: string, mimeType: string): boolean {
    const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
    return (
      this.FILE_UPLOAD.allowedExtensions.includes(ext) &&
      this.FILE_UPLOAD.allowedMimeTypes.includes(mimeType)
    );
  }
}