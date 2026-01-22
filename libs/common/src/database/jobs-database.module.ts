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
        const uri = config.get<string>('JOBS_MONGO_URI');

        if (!uri) {
          throw new Error(
            'Missing Mongo connection string: expected JOBS_MONGO_URI for Jobs service.'
          );
        }

        return { uri };
      },
    }),
  ],
})
export class JobsDatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}