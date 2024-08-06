import { Global, Module } from '@nestjs/common';
import { PrismaServiceChats } from './prisma.chats.service';

@Global()
@Module({
  providers: [PrismaServiceChats],
  exports: [PrismaServiceChats],
})
export class PrismaModuleChats {}
