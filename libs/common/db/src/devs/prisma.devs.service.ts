import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientDevs } from 'prisma.db/generated/clientDevs';

@Injectable()
export class PrismaServiceDevs
  extends PrismaClientDevs
  implements OnModuleInit
{
  static PrismaClientValidationError: any;
  async onModuleInit() {
    await this.$connect();
  }
}
