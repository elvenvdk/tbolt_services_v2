// example: libs/common/src/database/tasks-database.module.ts
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

const connectionUri = 'Tasks';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri =
          config.get<string>('TASKS_MONGO_URI')

        if (!uri) {
          throw new Error(
            'Missing Mongo connection string: expected TASKS_MONGO_URI (or MONGO_URI) for Tasks service.'
          );
        }
        return { uri };
      },
    }),
  ],
})
export class TasksDatabaseModule {
  constructor(cs: ConfigService) {
    console.log('TASKS DB MODULE TASKS MONGO URI: ', cs.get('TASKS_MONGO_URI'))
  }
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}