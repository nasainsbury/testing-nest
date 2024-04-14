import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db, connection } from './db';

(async () => {
  await migrate(db, { migrationsFolder: './drizzle' });

  await connection.end();
})();
