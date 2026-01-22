import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        // Prefer service-specific URI; optionally fall back to a global MONGO_URI if you use one
        const uri =
          config.get<string>('AUTH_MONGO_URI') ||
          config.get<string>('MONGO_URI');

        if (!uri) {
          throw new Error(
            'Missing Mongo connection string: expected AUTH_MONGO_URI (or MONGO_URI) for Auth service.'
          );
        }

        return { uri };
      },
    }),
  ],
})
export class AuthDatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}