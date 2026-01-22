import { Module, Global, OnModuleInit } from '@nestjs/common';
import { registerTaskEnums } from './enums/task.enums';

@Global()
@Module({})
export class CommonGraphqlModule implements OnModuleInit {
  onModuleInit() {
    // Register all shared enums here exactly once
    registerTaskEnums();
  }
}