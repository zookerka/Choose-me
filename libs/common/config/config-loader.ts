export const configLoader = () => ({
  port: parseInt(process.env.DB_PORT, 10) || 6543,
  directPort: parseInt(process.env.DB_DIRECT_PORT, 10) || 5432,
  environment: process.env.NODE_ENV || 'development',
  rtSecret: process.env.RT_SECRET,
  atSecret: process.env.AT_SECRET,
  sentry: {
    dsn: process.env.SENTRY_DSN,
    enabled: process.env.SENTRY_ENABLED === 'true',
  },
  db: {
    users: {
      pass: process.env.USERS_DB_PASS,
      url: process.env.USERS_DB_URL,
      directUrl: process.env.USERS_DIRECT_URL,
    },
    chats: {
      pass: process.env.CHATS_DB_PASS,
      url: process.env.CHATS_DB_URL,
      directUrl: process.env.CHATS_DIRECT_URL,
    },
    devs: {
      pass: process.env.DEVS_DB_PASS,
      url: process.env.DEVS_DB_URL,
      directUrl: process.env.DEVS_DIRECT_URL,
    },
  },
});
