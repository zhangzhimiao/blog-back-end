import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ArticleColumnService } from './article-column.service';

@Controller(`entity/article-column`)
export class ArticleColumnController {
  constructor(private articleLikeService: ArticleColumnService) {}

  @Post('add-article-column')
  collect(@Body('data') data: { articleId: string; columnIds: string[] }) {
    return this.articleLikeService.addArticleColumn(data);
  }

  @Get('article/:articleId')
  getAtricleCollection(@Param('articleId') articleId: string) {
    return this.articleLikeService.getAtricleColumns(articleId);
  }

  @Delete('delete')
  deleteColumn(@Body('data') data: { articleId: string }) {
    return this.articleLikeService.deleteColumn(data.articleId);
  }
}
