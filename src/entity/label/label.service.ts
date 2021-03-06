import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Label } from './label.entity';
import { Repository, getConnection } from 'typeorm';

@Injectable()
export class LabelService {
  constructor(
    @InjectRepository(Label)
    private readonly labelRepository: Repository<Label>,
  ) {}

  async getLabelsByArticleId(articleId: string) {
    return this.labelRepository
      .createQueryBuilder()
      .where(`articleId = :articleId`, {
        articleId,
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
          message: 'get article labes error',
        },
      }));
  }

  async deleteLabesByArticleId(articleId: string) {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Label)
      .where('articleId = :articleId', {
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
          message: 'delete article labes error',
        },
      }));
  }
}
