import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ArticleCollection } from './article-collection.entity';
import { Repository, getManager, getConnection } from 'typeorm';
import { BackData } from 'src/types/response';

@Injectable()
export class ArticleCollectionService {
  constructor(
    @InjectRepository(ArticleCollection)
    private readonly articleCollectionRepository: Repository<ArticleCollection>,
  ) {}

  async addCollection(data: {
    personId: string;
    articleId: string;
  }): Promise<BackData> {
    const date = new Date().getTime() / 1000;
    const articleCollection = new ArticleCollection();
    articleCollection.collectTime = date;
    articleCollection.articleId = data.articleId;
    articleCollection.personId = data.personId;
    return this.articleCollectionRepository
      .save(articleCollection)
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'collection error',
        },
      }));
  }

  async getAtricleCollection(personId: string, articleId: string) {
    return await getManager()
      .createQueryBuilder(ArticleCollection, 'articleCollection')
      .where(
        'articleCollection.personId = :personId and articleCollection.articleId = :articleId',
        {
          personId,
          articleId,
        },
      )
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
          message: 'get collect error',
        },
      }));
  }

  async getAllCollection(personId: string) {
    return await getManager()
      .createQueryBuilder(ArticleCollection, 'articleCollection')
      .where('articleCollection.personId = :personId', {
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
          message: 'get collections error',
        },
      }));
  }

  async cancleCollect(personId: string, articleId: string) {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(ArticleCollection)
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
          message: 'cancle collect error',
        },
      }));
  }
}
