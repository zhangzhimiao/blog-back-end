import { Controller } from '@nestjs/common';
import { ArticleCommentService } from './article-comment.service';

@Controller(`entity/article-comment`)
export class ArticleCommentController {
  constructor(private articleCommentService: ArticleCommentService) {}
}
