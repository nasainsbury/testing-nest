import { Controller, Get, Param } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('/')
  async getNotes() {
    return await this.notesService.getAll();
  }

  @Get('/:id')
  getNote(@Param('id') id: string) {
    return this.getNote(id);
  }
}
