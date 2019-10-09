import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PersonCareService } from './person-care.service';

@Controller(`entity/person-care`)
export class PersonCareController {
  constructor(private articleLikeService: PersonCareService) {}

  @Post('care')
  addCare(@Body('data') data: { person1Id: string; person2Id: string }) {
    return this.articleLikeService.addCare(data.person1Id, data.person2Id);
  }

  @Delete('cancel-care')
  cancelCare(@Body('data') data: { person1Id: string; person2Id: string }) {
    return this.articleLikeService.cancelCare(data.person1Id, data.person2Id);
  }
}
