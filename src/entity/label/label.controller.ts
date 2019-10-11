import { Controller, Get, Param } from '@nestjs/common';
import { LabelService } from './label.service';

@Controller(`entity/label`)
export class LabelController {
  constructor(private labelService: LabelService) {}

  @Get(`labels/:articleId`)
  getLabelsByArticleId(@Param('articleId') articleId: string) {
    return this.labelService.getLabelsByArticleId(articleId);
  }
}
