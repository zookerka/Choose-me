import { Logger, Module } from '@nestjs/common';
import { FillProfileController } from './fill-profile.controller';
import { FillProfileService } from './fill-profile.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from 'libs/common/sentry/all-exceptions.filter';
import { SentryService } from 'libs/common/sentry/sentry.service';
import { AtStrategy, PrismaModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        }),
      }),
    }),
    JwtModule.register({}),
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', 'apps/fill-profile/.env'],
    }),
  ],
  controllers: [FillProfileController],
  providers: [
    FillProfileService,
    Logger,
    AtStrategy,
    SentryService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
  ],
})
export class FillProfileModule {}
