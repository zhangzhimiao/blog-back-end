import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository, getManager, getConnection } from 'typeorm';
import { BackData } from 'src/types/response';
import { Label } from '../label/label.entity';
import { service } from 'src/api/service';
import { Column } from '../column/column.entity';
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
    columnId: string;
    label: string[];
  }): Promise<BackData> {
    return service.getPerson(data.personId).then(personData => {
      return service.getColumn(data.columnId).then(columnData => {
        const column = new Column();
        column.id = columnData.data.data.id;
        column.name = columnData.data.data.name;
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
        article.columns = [column];
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
          .then(([d1, d2]) => ({ code: 0, data: { d2 } }))
          .catch(e => ({
            code: 1,
            data: {
              message: 'publish error',
            },
          }));
      });
    });
  }

  async getArticleDetail(id: string) {
    return await getManager()
      .createQueryBuilder(Article, 'article')
      .where('article.id = :id', {
        id,
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
          message: 'login error',
        },
      }));
  }
}
