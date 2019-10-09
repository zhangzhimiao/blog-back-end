import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { service } from 'src/api/service';
import { Person } from '../person/person.entity';
import { ArticleCollection } from '../article-collection/article-collection.entity';

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
  }) {
    service.getPerson(data.personId).then(d => {
      const date = new Date().getTime() / 1000;
      const article = new Article();
      article.content = data.content;
      article.title = data.title;
      article.isPublic = parseInt(data.isPublic, 10);
      article.publishTime = date;
      const person = new Person();
      person.id = d.data.data.id;
      person.name = d.data.data.name;
      person.password = d.data.data.password;
      article.person = person;
      const articleCollection = new ArticleCollection();
      articleCollection.article = article;
      articleCollection.person = person;
      articleCollection.collectTime = date;
      return this.articleService.publish(article, person, articleCollection);
    });
  }

  @Get('detail/:id')
  getArticleDetail(@Param('id') id: string) {
    return this.articleService.getArticleDetail(id);
  }
}
