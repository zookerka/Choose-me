import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientUsers } from 'prisma.db/generated/clientUsers';

@Injectable()
export class PrismaServiceUsers
  extends PrismaClientUsers
  implements OnModuleInit
{
  static PrismaClientValidationError: any;
  async onModuleInit() {
    await this.$connect();
  }
}
