// libs/common/src/config/config.module.ts
import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      // Make .env discovery robust regardless of CWD
      envFilePath: [
        '.env',
        '../.env',
        '../../.env',
        '../../../.env',
      ],
      validationSchema: Joi.object({
        AUTH_MONGO_URI: Joi.string().optional(),
        JOBS_MONGO_URI: Joi.string().optional(),
        TEAMS_MONGO_URI: Joi.string().optional(),
        TASKS_MONGO_URI: Joi.string().optional(),
        CONTACTS_MONGO_URI: Joi.string().optional(), // ✅ fix
        ORG_MONGO_URI: Joi.string().optional(),
        DRAWINGS_MONGO_URI: Joi.string().optional(),
        FILES_MONGO_URI: Joi.string().optional(),
        RFIS_MONGO_URI: Joi.string().optional(),
        SUBMITTALS_MONGO_URI: Joi.string().optional(),
        CHANGEORDERS_MONGO_URI: Joi.string().optional(),
        // If you have more services, add *_MONGO_URI entries here
        JWT_SECRET: Joi.string().optional(),
        JWT_EXPIRATION: Joi.string().optional(),
      }),
      // allow unknown so other env vars don’t blow up
      ignoreEnvVars: false,
      expandVariables: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule { }