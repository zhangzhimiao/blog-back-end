import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './entity/person/person.module';
import { Middleware } from './middleware/middleware.service';
import { ArticleModule } from './entity/article/article.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonModule, ArticleModule],
  providers: [Middleware],
})
export class AppModule {}
