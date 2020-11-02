import * as dotenv from 'dotenv';

dotenv.config();

export default {
  ENVIRONMENT: process.env.ENVIRONMENT ?? 'local',
  APP_PORT: Number(process.env.APP_PORT) ?? 10010,
  APP_HOST: process.env.APP_HOST ?? '0.0.0.0',
  DB_NAME: process.env.DB_NAME ?? 'notes',
  DB_USERNAME: process.env.DB_USERNAME ?? 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD ?? 'root',
  DB_HOST: process.env.DB_HOST ?? '0.0.0.0',
  DB_PORT: 5432,
};
