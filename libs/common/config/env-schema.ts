import * as Joi from 'joi';

export const envSchema = Joi.object({
  DB_PORT: Joi.number().default(6543),
  DB_DIRECT_PORT: Joi.number().default(5432),
  NODE_ENV: Joi.string().default('development'),
  RT_SECRET: Joi.string().required(),
  AT_SECRET: Joi.string().required(),
  SENTRY_DSN: Joi.string().required(),
  SENTRY_ENABLED: Joi.boolean().default(true),
  USERS_DB_PASS: Joi.string().required(),
  USERS_DB_URL: Joi.string().required(),
  USERS_DIRECT_URL: Joi.string().required(),
  CHATS_DB_PASS: Joi.string().required(),
  CHATS_DB_URL: Joi.string().required(),
  CHATS_DIRECT_URL: Joi.string().required(),
  DEVS_DB_PASS: Joi.string().required(),
  DEVS_DB_URL: Joi.string().required(),
  DEVS_DIRECT_URL: Joi.string().required(),
});
