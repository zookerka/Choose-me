import { Global, Module } from '@nestjs/common';
import { PrismaServiceUsers } from './prisma.users.service';

@Global()
@Module({
  providers: [PrismaServiceUsers],
  exports: [PrismaServiceUsers],
})
export class PrismaModuleUsers {}
