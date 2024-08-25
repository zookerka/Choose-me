import { Logger, Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { AtStrategy } from '@app/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModuleUsers } from '@app/database/users/prisma.users.module';
import { SentryService } from 'libs/common/sentry/sentry.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'libs/common/sentry/all-exceptions.filter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.register({}),
    PrismaModuleUsers,
    ConfigModule.forRoot({
      envFilePath: ['.env', 'apps/chats/rooms/.env'],
    }),
  ],
  controllers: [RoomsController],
  providers: [
    SentryService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    RoomsService,
    AtStrategy,
    Logger,
  ],
})
export class RoomsModule {}
