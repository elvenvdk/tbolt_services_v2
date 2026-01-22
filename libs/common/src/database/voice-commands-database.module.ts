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
        const uri = config.get<string>('VOICE_COMMANDS_MONGO_URI');

        if (!uri) {
          throw new Error(
            'Missing Mongo connection string: expected VOICE_COMMANDS_MONGO_URI for Voice Commands service.'
          );
        }

        return { uri };
      },
    }),
  ],
})
export class VoiceCommandsDatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
