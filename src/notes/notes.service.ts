import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/drizzle/drizzle.module';
import * as schema from 'src/drizzle/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { CreateNoteDto } from './dto/create.dto';

@Injectable()
export class NotesService {
  constructor(
    @Inject(PG_CONNECTION) readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async getAll() {
    const notes = await this.db.query.notes.findMany();
    return notes;
  }
  async get(id: string) {
    const note = await this.db.query.notes.findFirst({
      where: eq(schema.notes.id, id),
    });

    return note ?? {};
  }
  async create(data: CreateNoteDto) {
    const note = await this.db
      .insert(schema.notes)
      .values({ ...data, author: 'c90031b0-dbb4-46b1-af7e-9767e065834f' });

    // note.
    return note;
  }
}
