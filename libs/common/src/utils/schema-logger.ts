import { Injectable, OnModuleInit } from '@nestjs/common';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { printSchema } from 'graphql';

@Injectable()
export class SchemaLogger implements OnModuleInit {
  constructor(private readonly gqlSchemaHost: GraphQLSchemaHost) { }

  onModuleInit() {
    const schema = this.gqlSchemaHost.schema;
    console.log('================ GraphQL SDL ================');
    console.log(printSchema(schema));
    console.log('=============================================');
  }
}