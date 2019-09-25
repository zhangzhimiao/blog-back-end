import { Controller, Get } from '@nestjs/common';
import { HumanService } from './human.service';

@Controller(`entity/human`)
export class HumanController {
  constructor(private humanService: HumanService) {}
  @Get('index')
  getHuman() {
    console.log('a');
    return this.humanService.findAll();
  }
  @Get(`*`)
  getHumans() {
    console.log('a');
    return this.humanService.findAll();
  }
}
