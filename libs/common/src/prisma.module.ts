import { Global, Module } from '@nestjs/common';
import {
  PrismaServiceUsers,
  PrismaServiceChats,
  PrismaServiceDevs,
} from './prisma.service';

@Global()
@Module({
  providers: [PrismaServiceUsers, PrismaServiceChats, PrismaServiceDevs],
  exports: [PrismaServiceUsers, PrismaServiceChats, PrismaServiceDevs],
})
export class PrismaModule {}
