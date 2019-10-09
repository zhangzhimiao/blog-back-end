import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ArticleCollection } from './article-collection.entity';
import { Repository } from 'typeorm';
import { Article } from '../article/article.entity';
import { Person } from '../person/person.entity';
import { BackData } from 'src/types/response';

@Injectable()
export class ArticleCollectionService {
  constructor(
    @InjectRepository(ArticleCollection)
    private readonly articleCollectionRepository: Repository<ArticleCollection>,
  ) {}

  async addCollection(articleCollection: ArticleCollection): Promise<BackData> {
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
}
