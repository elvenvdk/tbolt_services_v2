// -----------------------------------------------
// common/dto/range.input.ts
// -----------------------------------------------
import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class NumberRangeInput {
  @Field(() => Float, { nullable: true }) min?: number;
  @Field(() => Float, { nullable: true }) max?: number;
}

@InputType()
export class DateRangeInput {
  @Field({ nullable: true }) from?: Date;
  @Field({ nullable: true }) to?: Date;
}