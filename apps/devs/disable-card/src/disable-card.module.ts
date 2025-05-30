import { Logger, Module } from '@nestjs/common';
import { DisableCardController } from './disable-card.controller';
import { DisableCardService } from './disable-card.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'libs/common/sentry/all-exceptions.filter';
import { SentryService } from 'libs/common/sentry/sentry.service';
import { AtStrategy } from '@app/common';
import { PrismaModuleDevs } from '@app/database/devs/prisma.devs.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}),
    PrismaModuleDevs,
    ConfigModule.forRoot({
      envFilePath: ['.env', 'apps/devs/disable-card/.env'],
    }),
  ],
  controllers: [DisableCardController],
  providers: [
    DisableCardService,
    Logger,
    AtStrategy,
    SentryService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class DisableCardModule {}
