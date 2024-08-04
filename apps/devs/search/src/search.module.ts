import { Logger, Module } from '@nestjs/common';
import { DevsSearchController } from './search.controller';
import { DevsSearchService } from './search.service';
import { AllExceptionsFilter } from 'libs/common/sentry/all-exceptions.filter';
import { APP_FILTER } from '@nestjs/core';
import { SentryService } from 'libs/common/sentry/sentry.service';
import { PrismaModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
// import { configOptions } from 'libs/common/global-config/config-options';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot()],
  controllers: [DevsSearchController],
  providers: [
    DevsSearchService,
    Logger,
    SentryService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class DevsSearchModule {}
