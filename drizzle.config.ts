import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
  schema: './src/drizzle/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'user',
    password: 'password',
    database: 'app',
  },
} satisfies Config;
