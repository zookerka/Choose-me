import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientChats } from 'prisma.db/generated/clientChats';

@Injectable()
export class PrismaServiceChats
  extends PrismaClientChats
  implements OnModuleInit
{
  static PrismaClientValidationError: any;
  async onModuleInit() {
    await this.$connect();
  }
}
