import { Module } from '@nestjs/common';

import { NotesController } from './notes.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { NotesService } from './notes.service';

@Module({
  imports: [DrizzleModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
