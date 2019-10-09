import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository, getManager, getConnection } from 'typeorm';
import { BackData } from 'src/types/response';
import { Label } from '../label/label.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async publish(article: Article, labels: Label[]): Promise<BackData> {
    getConnection().manager.save(article);
    getConnection().manager.save(labels);

    return Promise.resolve()
      .then(() => ({ code: 0, data: {} }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'publish error',
        },
      }));
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
