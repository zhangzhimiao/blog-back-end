import { Controller, Body, Post, Get, Param, Query } from '@nestjs/common';
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

  @Get(`articles`)
  getArticles(@Query('ids') ids: string[]) {
    return this.articleService.getArticles(ids);
  }

  @Get(`:personId/articles`)
  getPersonArticles(@Param('personId') personId: string) {
    return this.articleService.getPersonArticles(personId);
  }

  @Get('all')
  getAllArticles() {
    return this.articleService.getAllArticles();
  }

  @Post('update')
  update(@Body('data')
  data: {
    articleId: string;
    personId: string;
    content: string;
    isPublic: string;
    title: string;
    columnIds: string[];
    labels: string[];
  }) {
    return this.articleService.update(data);
  }
}
