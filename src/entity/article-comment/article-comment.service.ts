import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleComment } from './article-comment.entity';
import { Repository, getConnection } from 'typeorm';
import { BackData } from 'src/types/response';

@Injectable()
export class ArticleCommentService {
  constructor(
    @InjectRepository(ArticleComment)
    private readonly articleCommentRepository: Repository<ArticleComment>,
  ) {}

  async addComment(
    articleId: string,
    personId: string,
    content: string,
    parentCommentId: string,
    personName: string,
  ): Promise<BackData> {
    const articleComment = new ArticleComment();
    articleComment.articleId = parseInt(articleId, 10);
    articleComment.personId = parseInt(personId, 10);
    articleComment.content = content;
    articleComment.personName = personName;
    if (parentCommentId) {
      articleComment.parentCommentId = parseInt(parentCommentId, 10);
    }
    articleComment.commentTime = new Date().getTime() / 1000;

    return this.articleCommentRepository
      .save(articleComment)
      .then(d => ({
        code: 0,
        data: {
          ...d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'add columns failed',
        },
      }));
  }

  async getArticleComments(articleId): Promise<BackData> {
    return this.articleCommentRepository
      .createQueryBuilder('articleComment')
      .orderBy('articleComment.commentTime', 'DESC')
      .where(`articleId=${articleId}`)
      .getMany()
      .then(d => ({
        code: 0,
        data: {
          ...d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'add columns failed',
        },
      }));
  }

  async deleteComment(commentId: string) {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(ArticleComment)
      .where('id = :commentId', {
        commentId,
      })
      .execute()
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'cancle collect error',
        },
      }));
  }
}
