import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientUsers } from 'prisma.db/generated/clientUsers';
import { PrismaClient as PrismaClientChats } from 'prisma.db/generated/clientChats';
import { PrismaClient as PrismaClientDevs } from 'prisma.db/generated/clientDevs';
import { PrismaClient as PrismaClientCatalog } from 'prisma.db/generated/clientCatalog';

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

@Injectable()
export class PrismaServiceCatalog
  extends PrismaClientCatalog
  implements OnModuleInit
{
  static PrismaClientValidationError: any;
  async onModuleInit() {
    await this.$connect();
  }
}
