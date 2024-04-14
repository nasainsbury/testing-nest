import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/drizzle/drizzle.module';
import * as schema from 'src/drizzle/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';

@Injectable()
export class NotesService {
  constructor(
    @Inject(PG_CONNECTION) readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async getAll() {
    const notes = await this.db.select().from(schema.notes);
    return notes;
  }
  async get(id: string) {
    const note = await this.db
      .select()
      .from(schema.notes)
      .where(eq(schema.notes.id, id));

    return note;
  }
}
