import { Controller, Get, Post, Body, Header } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

@Controller(`entity/person`)
export class PersonController {
  constructor(private personService: PersonService) {}
  @Get('index')
  getHuman() {
    return this.personService.findAll();
  }

  @Post(`register`)
  registe(@Body('Person') person) {
    console.log(person);
    return '123';
    // return this.personService.findAll();
  }
}
