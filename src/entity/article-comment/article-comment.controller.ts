import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ArticleCommentService } from './article-comment.service';

@Controller(`entity/article-comment`)
export class ArticleCommentController {
  constructor(private articleCommentService: ArticleCommentService) {}

  @Post('comment')
  addComment(
    @Body('articleId') articleId: string,
    @Body('personId') personId: string,
    @Body('content') content: string,
    @Body('parentCommentId') parentCommentId: string,
    @Body('personName') personName: string,
  ) {
    return this.articleCommentService.addComment(
      articleId,
      personId,
      content,
      parentCommentId,
      personName,
    );
  }
  @Get('comments/:articleId')
  getArticleComments(@Param('articleId') articleId: string) {
    return this.articleCommentService.getArticleComments(articleId);
  }

  @Delete('delete')
  deleteComment(@Body('commentId') commentId: string) {
    return this.articleCommentService.deleteComment(commentId);
  }
}
