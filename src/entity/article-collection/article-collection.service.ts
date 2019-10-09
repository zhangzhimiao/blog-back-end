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

  async addCollection(data: {
    personId: string;
    articleId: string;
  }): Promise<BackData> {
    const person = new Person();
    person.id = parseInt(data.personId, 10);
    const article = new Article();
    article.id = data.articleId;
    const date = new Date().getTime() / 1000;
    const articleCollection = new ArticleCollection();
    articleCollection.collectTime = date;
    articleCollection.article = article;
    articleCollection.person = person;
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
