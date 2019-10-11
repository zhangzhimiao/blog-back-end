import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PersonCareService } from './person-care.service';

@Controller(`entity/person-care`)
export class PersonCareController {
  constructor(private personCareService: PersonCareService) {}

  @Post('care')
  addCare(
    @Body('careId') careId: string,
    @Body('beCaredId') beCaredId: string,
  ) {
    return this.personCareService.addCare(careId, beCaredId);
  }

  @Delete('cancel-care')
  cancelCare(
    @Body('careId') careId: string,
    @Body('beCaredId') beCaredId: string,
  ) {
    return this.personCareService.cancelCare(careId, beCaredId);
  }

  @Get('care-info/:careId/:beCaredId')
  getAtricleCollection(
    @Param('careId') careId: string,
    @Param('beCaredId') beCaredId: string,
  ) {
    return this.personCareService.getCareInfo(careId, beCaredId);
  }

  @Get('cares/:careId')
  getCares(@Param('careId') careId: string) {
    return this.personCareService.getCares(careId);
  }
}
