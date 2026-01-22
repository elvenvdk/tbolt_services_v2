import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Counter, CounterSchema } from './counter.schema';
import { CounterRepository } from './counter.repository';
import { CounterService } from './counter.service';

@Module({
  imports: [
    // IMPORTANT: default connection (no connectionName here)
    MongooseModule.forFeature([{ name: Counter.name, schema: CounterSchema }]),
  ],
  providers: [CounterRepository, CounterService],
  exports: [CounterRepository, CounterService], // export both repo and service
})
export class CounterModule { }