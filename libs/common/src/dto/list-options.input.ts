import { Field, InputType, Int } from "@nestjs/graphql";
import { IsOptional, IsInt, IsString, IsEnum, Min, Max, MaxLength } from 'class-validator';

@InputType()
export class ListOptions {
  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @IsOptional()
  @IsInt({ message: 'page must be an integer' })
  @Min(1, { message: 'page must be at least 1' })
  page?: number = 1;

  @Field(() => Int, { nullable: true, defaultValue: 25 })
  @IsOptional()
  @IsInt({ message: 'limit must be an integer' })
  @Min(1, { message: 'limit must be at least 1' })
  @Max(100, { message: 'limit must not exceed 100' })
  limit?: number = 25;

  @Field({ nullable: true, defaultValue: 'createdAt' })
  @IsOptional()
  @IsString({ message: 'sortBy must be a string' })
  @MaxLength(50, { message: 'sortBy must not exceed 50 characters' })
  sortBy?: string = 'createdAt';

  @Field({ nullable: true, defaultValue: 'desc' })
  @IsOptional()
  @IsEnum(['asc', 'desc'], { message: 'sortOrder must be either "asc" or "desc"' })
  sortOrder?: 'asc' | 'desc' = 'desc';
}