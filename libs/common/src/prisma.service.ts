import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientUsers } from 'prisma.db/generated/clientUsers';
import { PrismaClient as PrismaClientChats } from 'prisma.db/generated/clientChats';
import { PrismaClient as PrismaClientDevs } from 'prisma.db/generated/clientDevs';

@Injectable()
export class PrismaServiceUsers
  extends PrismaClientUsers
  implements OnModuleInit
{
  async onModuleInit() {
    await this.$connect();
  }
}

@Injectable()
export class PrismaServiceChats
  extends PrismaClientChats
  implements OnModuleInit
{
  async onModuleInit() {
    await this.$connect();
  }
}

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
