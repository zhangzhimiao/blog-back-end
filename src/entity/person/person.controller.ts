import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller(`entity/person`)
export class PersonController {
  constructor(private personService: PersonService) {}
  @Get('index')
  getHuman() {
    return this.personService.findAll();
  }
  @Get(`*`)
  getHumans() {
    return this.personService.findAll();
  }
}
