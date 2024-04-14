import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create.dto';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('/')
  search() {
    return this.notesService.getAll();
  }

  @Get('/:id')
  get(@Param('id') id: string) {
    return this.notesService.get(id);
  }

  @Post('/')
  async create(@Body() body: CreateNoteDto) {
    await void this.notesService.create(body);
    return {};
  }
}
