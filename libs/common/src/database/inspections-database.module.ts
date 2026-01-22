import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('INSPECTIONS_MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class InspectionsDatabaseModule {
  static forFeature = MongooseModule.forFeature;
}