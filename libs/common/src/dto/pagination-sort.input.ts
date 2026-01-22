// -----------------------------------------------
// common/dto/pagination-sort.input.ts
// -----------------------------------------------
import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber, IsEnum, Min, Max, IsMongoId } from 'class-validator';

@InputType()
export class PaginationInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'cursor must be a string' })
  cursor?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'limit must be a number' })
  @Min(1, { message: 'limit must be at least 1' })
  @Max(100, { message: 'limit must not exceed 100' })
  limit?: number; // default in resolver (e.g., 25)
}

@InputType()
export class SortInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'field must be a string' })
  field?: string; // e.g., "startDate", "name"

  @Field({ nullable: true })
  @IsOptional()
  @IsEnum(['asc', 'desc'], { message: 'direction must be either "asc" or "desc"' })
  direction?: 'asc' | 'desc';
}