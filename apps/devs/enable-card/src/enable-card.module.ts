import { Logger, Module } from '@nestjs/common';
import { EnableCardController } from './enable-card.controller';
import { EnableCardService } from './enable-card.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'libs/common/sentry/all-exceptions.filter';
import { SentryService } from 'libs/common/sentry/sentry.service';
import { configOptions } from 'libs/common/global-config/config-options';
import { AtStrategy, PrismaModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}),
    PrismaModule,
    ConfigModule.forRoot(configOptions),
  ],
  controllers: [EnableCardController],
  providers: [
    EnableCardService,
    Logger,
    AtStrategy,
    SentryService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class EnableCardModule {}
