import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ArticleCollectionService } from './article-collection.service';

@Controller(`entity/article-collection`)
export class ArticleCollectionController {
  constructor(private articleCollectionService: ArticleCollectionService) {}

  @Post('collect')
  collect(@Body('data') data: { personId: string; articleId: string }) {
    return this.articleCollectionService.addCollection(data);
  }

  @Get('collection/:personId/:articleId')
  getAtricleCollection(
    @Param('personId') personId: string,
    @Param('articleId') articleId: string,
  ) {
    return this.articleCollectionService.getAtricleCollection(
      personId,
      articleId,
    );
  }

  @Get('collections/:personId')
  getAllCollection(@Param('personId') personId: string) {
    return this.articleCollectionService.getAllCollection(personId);
  }

  @Delete('cancle-collect')
  cancleCollect(@Body('data') data: { personId: string; articleId: string }) {
    return this.articleCollectionService.cancleCollect(
      data.personId,
      data.articleId,
    );
  }
}
