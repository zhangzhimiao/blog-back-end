import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ArticleColumn } from './article-column.entity';
import { Repository, getManager, getConnection } from 'typeorm';
import { BackData } from 'src/types/response';

@Injectable()
export class ArticleColumnService {
  constructor(
    @InjectRepository(ArticleColumn)
    private readonly articleLikeRepository: Repository<ArticleColumn>,
  ) {}

  async addArticleColumn(data: {
    articleId: string;
    columnIds: string[];
  }): Promise<BackData> {
    console.log(data.articleId, data.columnIds);
    const result = data.columnIds.map(d => {
      const articleColumn = new ArticleColumn();
      articleColumn.articleId = parseInt(data.articleId, 10);
      articleColumn.columnId = parseInt(d, 10);
      return articleColumn;
    });
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(ArticleColumn)
      .values(result)
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
          message: 'like error',
        },
      }));
  }

  async getAtricleColumns(articleId: string) {
    return await getManager()
      .createQueryBuilder(ArticleColumn, 'articleColumn')
      .where('articleId = :articleId', {
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
          message: 'get all article column error',
        },
      }));
  }

  async deleteColumn(articleId: string) {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(ArticleColumn)
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
          message: 'delete column error',
        },
      }));
  }
}
