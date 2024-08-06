import { Global, Module } from '@nestjs/common';
import { PrismaServiceDevs } from './prisma.devs.service';

@Global()
@Module({
  providers: [PrismaServiceDevs],
  exports: [PrismaServiceDevs],
})
export class PrismaModuleDevs {}
