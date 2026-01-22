import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

export const COUNTER_CONN = 'Counter';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri =
          config.get<string>('COUNTER_MONGO_URI')
        if (!uri) {
          throw new Error(
            'Missing Mongo connection string: expected COUNTER_MONGO_URI (or MONGO_URI) for Budgets service.'
          );
        }
        return { uri };
      },
    }),
  ],
})
export class CounterDatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}