import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ArticleLike } from './article-like.entity';
import { Repository, getManager, getConnection } from 'typeorm';
import { BackData } from 'src/types/response';

@Injectable()
export class ArticleLikeService {
  constructor(
    @InjectRepository(ArticleLike)
    private readonly articleLikeRepository: Repository<ArticleLike>,
  ) {}

  async addLike(data: {
    personId: string;
    articleId: string;
  }): Promise<BackData> {
    const articleLike = new ArticleLike();
    articleLike.articleId = parseInt(data.articleId, 10);
    articleLike.personId = parseInt(data.personId, 10);
    return this.articleLikeRepository
      .save(articleLike)
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'like error',
        },
      }));
  }

  async getLikeAtricle(personId: string, articleId: string) {
    return await getManager()
      .createQueryBuilder(ArticleLike, 'articleLike')
      .where('personId = :personId and articleId = :articleId', {
        personId,
        articleId,
      })
      .getOne()
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'get like info error',
        },
      }));
  }

  async getAllLikeArticles(personId: string) {
    return await getManager()
      .createQueryBuilder(ArticleLike, 'articleLike')
      .where('articleLike.personId = :personId', {
        personId,
      })
      .getMany()
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'get all like error',
        },
      }));
  }

  async cancleLike(personId: string, articleId: string) {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(ArticleLike)
      .where('personId = :personId and articleId = :articleId', {
        personId,
        articleId,
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
          message: 'cancle like error',
        },
      }));
  }
}
