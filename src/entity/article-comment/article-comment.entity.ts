import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Article } from '../article/article.entity';
import { Person } from '../person/person.entity';

@Entity()
export class ArticleComment {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(type => Article)
  @JoinColumn()
  article: Article;

  @OneToOne(type => Person)
  @JoinColumn()
  person: Person;

  @Column()
  content: string;

  @Column()
  commentTime: number;

  @OneToOne(type => ArticleComment, { nullable: true })
  @JoinColumn()
  parentCommetn: ArticleComment;
}
