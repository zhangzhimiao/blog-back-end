import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './entity/person/person.module';
import { Middleware } from './middleware/middleware.service';
import { ArticleModule } from './entity/article/article.module';
import { ColumnModule } from './entity/column/column.module';
import { ArticleCollectionModule } from './entity/article-collection/article-collection-module';
import { ArticleCommentModule } from './entity/article-comment/article-comment.module';
import { ArticleLikeModule } from './entity/article-like/article-like-module';
import { LabelModule } from './entity/label/label.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PersonModule,
    ArticleModule,
    ColumnModule,
    ArticleCollectionModule,
    ArticleCommentModule,
    ArticleLikeModule,
    LabelModule,
  ],
  providers: [Middleware],
})
export class AppModule {}
