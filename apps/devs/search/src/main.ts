import { NestFactory, Reflector } from '@nestjs/core';
import { DevsSearchModule } from './search.module';
import { ValidationPipe } from '@nestjs/common';
import { AtGuard } from '@app/common';
import { AllExceptionsFilter } from 'libs/common/sentry/all-exceptions.filter';
import { SentryService } from 'libs/common/sentry/sentry.service';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(DevsSearchModule);
  dotenv.config();

  app.useGlobalPipes(new ValidationPipe());
  const reflector = new Reflector();
  app.useGlobalGuards(new AtGuard(reflector));

  const sentryService = app.get(SentryService);
  app.useGlobalFilters(new AllExceptionsFilter(sentryService));
  await app.listen(3002);
}
bootstrap();
