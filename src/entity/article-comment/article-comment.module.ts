import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleComment } from './article-comment.entity';
import { ArticleCommentService } from './article-comment.service';
import { ArticleCommentController } from './article-comment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleComment])],
  providers: [ArticleCommentService],
  controllers: [ArticleCommentController],
})
export class ArticleCommentModule {}
