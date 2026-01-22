import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

const connectionUri = 'Budgets';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri =
          config.get<string>('BUDGETS_MONGO_URI') ||
          config.get<string>('MONGO_URI'); // optional fallback

        if (!uri) {
          throw new Error(
            'Missing Mongo connection string: expected BUDGETS_MONGO_URI (or MONGO_URI) for Budgets service.'
          );
        }

        return { uri };
      },
    }),
  ],
})
export class BudgetsDatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}