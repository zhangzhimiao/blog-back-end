import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
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

  @Post('manage-column')
  manageColumns(@Body('data') data: { columnIds: string[]; personId: string }) {
    console.log(data.columnIds, data.personId);
    return this.personService.manageColumns(data.columnIds, data.personId);
  }

  @Get('persons')
  getPersonsByIds(@Query('ids') ids: string[]) {
    return this.personService.getPersonsByIds(ids);
  }
}
