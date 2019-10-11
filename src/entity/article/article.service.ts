import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository, getManager, getConnection } from 'typeorm';
import { BackData } from 'src/types/response';
import { Label } from '../label/label.entity';
import { service } from 'src/api/service';
import { Person } from '../person/person.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async publish(data: {
    personId: string;
    content: string;
    isPublic: string;
    title: string;
    columnIds: string[];
    label: string[];
  }): Promise<BackData> {
    return service.getPerson(data.personId).then(personData => {
      const date = new Date().getTime() / 1000;
      const article = new Article();
      article.content = data.content;
      article.title = data.title;
      article.isPublic = parseInt(data.isPublic, 10);
      article.publishTime = date;
      const person = new Person();
      person.id = personData.data.data.id;
      person.name = personData.data.data.name;
      person.password = personData.data.data.password;
      article.person = person;
      const labels = data.label.map(name => {
        const label = new Label();
        label.article = article;
        label.name = name;
        return label;
      });
      return Promise.all([
        getConnection().manager.save(article),
        getConnection().manager.save(labels),
      ])
        .then(([d1, d2]) => {
          return service
            .addArticleColumn(d1.id.toString(), data.columnIds)
            .then(() => {
              return { code: 0, data: { d1 } };
            });
        })
        .catch(e => ({
          code: 1,
          data: {
            message: 'publish error',
          },
        }));
    });
  }

  async getArticleDetail(id: string): Promise<BackData> {
    return await this.articleRepository
      .findOne(id, { relations: ['person'] })
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'find article error',
        },
      }));
  }

  async getArticles(ids: string[]): Promise<BackData> {
    return await this.articleRepository
      .findByIds(ids, {
        relations: ['person'],
      })
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'find articles error',
        },
      }));
  }

  async getAllArticles(): Promise<BackData> {
    return await this.articleRepository
      .find({ relations: ['person'], where: 'isPublic = 0 ' })
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'find articles error',
        },
      }));
  }

  async getPersonArticles(personId: string): Promise<BackData> {
    return await this.articleRepository
      .createQueryBuilder('article')
      .where('personId=:personId', { personId })
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
          message: 'find articles error',
        },
      }));
  }

  async update(data: {
    articleId: string;
    personId: string;
    content: string;
    isPublic: string;
    title: string;
    columnIds: string[];
    labels: string[];
  }): Promise<BackData> {
    const article = new Article();
    article.content = data.content;
    article.id = parseInt(data.articleId, 10);
    article.title = data.title;
    const person = new Person();
    article.publishTime = new Date().getTime() / 1000;
    person.id = parseInt(data.personId, 10);
    const labels = data.labels.map(name => {
      const label = new Label();
      label.article = article;
      label.name = name;
      return label;
    });
    article.person = person;
    article.isPublic = parseInt(data.isPublic, 10);
    return service.deleteLabelsByArticleId(data.articleId).then(da => {
      return Promise.all([
        this.articleRepository.save(article),
        getConnection().manager.save(labels),
      ])
        .then(([d]) => {
          return service.deleteColumnsByArticleId(data.articleId).then(d1 => {
            return service
              .addArticleColumn(data.articleId, data.columnIds)
              .then(d2 => ({ code: 0, data: { d } }));
          });
        })
        .catch(e => ({
          code: 1,
          data: {
            message: 'publish error',
          },
        }));
    });
  }
}
