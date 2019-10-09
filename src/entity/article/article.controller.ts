import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller(`entity/article`)
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post('publish')
  publish(@Body('data')
  data: {
    personId: string;
    content: string;
    isPublic: string;
    title: string;
    columnIds: string[];
    label: string[];
  }) {
    return this.articleService.publish(data);
  }

  @Get('detail/:id')
  getArticleDetail(@Param('id') id: string) {
    return this.articleService.getArticleDetail(id);
  }
}
