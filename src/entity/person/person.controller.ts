import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller(`entity/human`)
export class PersonController {
  constructor(private personService: PersonService) {}
  @Get('index')
  getHuman() {
    console.log('a');
    return this.personService.findAll();
  }
  @Get(`*`)
  getHumans() {
    console.log('a');
    return this.personService.findAll();
  }
}
