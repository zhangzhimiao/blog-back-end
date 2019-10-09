import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ArticleLikeService } from './article-like.service';

@Controller(`entity/article-like`)
export class ArticleLikeController {
  constructor(private articleLikeService: ArticleLikeService) {}

  @Post('like')
  collect(@Body('data') data: { personId: string; articleId: string }) {
    return this.articleLikeService.addLike(data);
  }

  @Get('like-info/:personId/:articleId')
  getAtricleCollection(
    @Param('personId') personId: string,
    @Param('articleId') articleId: string,
  ) {
    return this.articleLikeService.getLikeAtricle(personId, articleId);
  }

  @Get('likes/:personId')
  getAllCollection(@Param('personId') personId: string) {
    return this.articleLikeService.getAllLikeArticles(personId);
  }

  @Delete('cancle-like')
  cancleCollect(@Body('data') data: { personId: string; articleId: string }) {
    return this.articleLikeService.cancleLike(data.personId, data.articleId);
  }
}
