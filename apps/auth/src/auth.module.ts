import { Logger, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AtStrategy, RtStrategy } from '@app/common';
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
      envFilePath: ['.env', 'apps/auth/.env'],
    }),
  ],
  controllers: [AuthController],
  providers: [
    SentryService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AuthService,
    AtStrategy,
    RtStrategy,
    Logger,
  ],
})
export class AuthModule {}
