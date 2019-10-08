import { Controller, Get, Post, Body, Header } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

@Controller(`entity/person`)
export class PersonController {
  constructor(private personService: PersonService) {}

  @Post(`register`)
  registe(@Body('data') data: { name: string; password: string }) {
    const person = new Person();
    person.name = data.name;
    person.password = data.password;
    return this.personService.register(person);
  }

  @Post(`login`)
  login(@Body('data') data: { name: string; password: string }) {
    const person = new Person();
    person.name = data.name;
    person.password = data.password;
    return this.personService.login(person);
  }
}
