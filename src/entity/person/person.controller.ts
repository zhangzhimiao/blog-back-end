import { Controller, Get, Post, Body, Header } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

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
}
