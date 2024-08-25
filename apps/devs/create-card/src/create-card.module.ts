import { Logger, Module } from '@nestjs/common';
import { DevsNewCardController } from './create-card.controller';
import { DevsNewCardService } from './create-card.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'libs/common/sentry/all-exceptions.filter';
import { SentryService } from 'libs/common/sentry/sentry.service';
import { AtStrategy } from '@app/common';
import { PrismaModuleUsers } from '@app/database/users/prisma.users.module';
import { PrismaModuleDevs } from '@app/database/devs/prisma.devs.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}),
    PrismaModuleDevs,
    PrismaModuleUsers,
    ConfigModule.forRoot({
      envFilePath: ['.env, apps/devs/create-card/.env'],
    }),
  ],
  controllers: [DevsNewCardController],
  providers: [
    DevsNewCardService,
    Logger,
    AtStrategy,
    SentryService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class DevsNewCardModule {}
