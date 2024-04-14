import { sql } from 'drizzle-orm';
import {
  text,
  pgSchema,
  integer,
  uuid,
  AnyPgColumn,
  timestamp,
} from 'drizzle-orm/pg-core';

export const schema = pgSchema('app');

export const notes = schema.table('notes', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title'),
  description: text('description'),
  author: uuid('author').references((): AnyPgColumn => user.id),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const user = schema.table('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  firstName: text('first_name'),
  surname: text('surname'),
  age: integer('age'),
});
