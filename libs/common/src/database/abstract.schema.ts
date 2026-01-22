import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
@ObjectType({ isAbstract: true })
// @Directive('@key(fields: "_id")')
export class AbstractDocument {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  @Field(() => String)
  _id: Types.ObjectId;
}
