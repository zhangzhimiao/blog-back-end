import { Controller, Get, Param, Delete, Body } from '@nestjs/common';
import { LabelService } from './label.service';

@Controller(`entity/label`)
export class LabelController {
  constructor(private labelService: LabelService) {}

  @Get(`labels/:articleId`)
  getLabelsByArticleId(@Param('articleId') articleId: string) {
    return this.labelService.getLabelsByArticleId(articleId);
  }

  @Delete('delete')
  deleteLabesByArticleId(@Body('articleId') articleId: string) {
    return this.labelService.deleteLabesByArticleId(articleId);
  }
}
