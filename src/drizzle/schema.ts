import {
  text,
  pgSchema,
  integer,
  uuid,
  AnyPgColumn,
} from 'drizzle-orm/pg-core';

export const schema = pgSchema('app');

export const notes = schema.table('notes', {
  id: uuid('id').primaryKey(),
  title: text('title'),
  description: text('title'),
  author: uuid('author').references((): AnyPgColumn => user.id),
});

export const user = schema.table('users', {
  id: uuid('id').primaryKey(),
  firstName: text('first_name'),
  surname: text('surname'),
  age: integer('age'),
});
