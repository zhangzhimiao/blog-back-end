import { Controller, Post, Body } from '@nestjs/common';
import { ArticleCollectionService } from './article-collection.service';

@Controller(`entity/article-collection`)
export class ArticleCollectionController {
  constructor(private articleCollectionService: ArticleCollectionService) {}

  @Post('collect')
  collect(@Body('data') data: { personId: string; articleId: string }) {
    return this.articleCollectionService.addCollection(data);
  }
}
