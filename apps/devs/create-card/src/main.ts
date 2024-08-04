import { NestFactory, Reflector } from '@nestjs/core';
import { DevsNewCardModule } from './create-card.module';
import { ValidationPipe } from '@nestjs/common';
import { AtGuard } from '@app/common';
import { AllExceptionsFilter } from 'libs/common/sentry/all-exceptions.filter';
import { SentryService } from 'libs/common/sentry/sentry.service';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(DevsNewCardModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const sentryService = app.get(SentryService);
  const reflector = new Reflector();

  dotenv.config();

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AtGuard(reflector));
  app.useGlobalFilters(new AllExceptionsFilter(sentryService));

  await app.listen(port);
}
bootstrap();
