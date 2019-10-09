import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { service } from 'src/api/service';
import { Person } from '../person/person.entity';
import { ArticleCollection } from '../article-collection/article-collection.entity';
import { Label } from '../label/label.entity';
import { Column } from '../column/column.entity';

@Controller(`entity/article`)
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post('publish')
  publish(@Body('data')
  data: {
    personId: string;
    content: string;
    isPublic: string;
    title: string;
    columnId: string;
    label: string[];
  }) {
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

        return this.articleService.publish(article, labels);
      });
    });
  }

  @Get('detail/:id')
  getArticleDetail(@Param('id') id: string) {
    return this.articleService.getArticleDetail(id);
  }

  @Post('collect')
  collect(@Body('data') data: { personId: string; articleId: string }) {
    const date = new Date().getTime() / 1000;
    const articleCollection = new ArticleCollection();
    articleCollection.collectTime = date;
  }
}
