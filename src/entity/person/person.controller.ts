import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller(`entity/person`)
export class PersonController {
  constructor(private personService: PersonService) {}

  @Post(`detail`)
  getPerson(@Body('data') data: { personId: string }) {
    return this.personService.getPerson(data.personId);
  }

  @Post(`register`)
  registe(@Body('data') data: { name: string; password: string }) {
    return this.personService.register(data);
  }

  @Post(`login`)
  login(@Body('data') data: { name: string; password: string }) {
    return this.personService.login(data);
  }

  @Get('columns/:id')
  columns(@Param('id') id: string) {
    return this.personService.getColumns(id);
  }

  @Post('add-column')
  addColumns(@Body('data') data: { columnIds: string[]; personId: string }) {
    return this.personService.addColumns(data.columnIds, data.personId);
  }
}
