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
        const uri =
          config.get<string>('AIA_MONGO_URI') ||
          config.get<string>('MONGO_URI'); // optional fallback

        if (!uri) {
          throw new Error(
            'Missing Mongo connection string: expected AIA_MONGO_URI (or MONGO_URI) for AIA service.'
          );
        }

        return { uri };
      },
    }),
  ],
})
export class AIADatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}