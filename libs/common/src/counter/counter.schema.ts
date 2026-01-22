import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Counter {
  @Prop({ required: true, unique: true }) key: string; // e.g. "ORD:orgId:2025"
  @Prop({ required: true, default: 0 }) seq: number;
}
export type CounterDocument = Counter & Document;
export const CounterSchema = SchemaFactory.createForClass(Counter);