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
        const uri = config.get<string>('ORG_MONGO_URI');

        if (!uri) {
          throw new Error(
            'Missing Mongo connection string: expected ORG_MONGO_URI for Organization service.'
          );
        }

        return { uri };
      },
    }),
  ],
})
export class OrganizationDatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}