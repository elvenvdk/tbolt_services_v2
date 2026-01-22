import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Counter } from './counter.schema';

@Injectable()
export class CounterRepository {
  private readonly logger = new Logger(CounterRepository.name);
  constructor(@InjectModel(Counter.name) private readonly model: Model<Counter>) { }

  findOneAndUpdate(filter: any, update: any, opts: any) {
    return this.model.findOneAndUpdate(filter, update, opts);
  }
}