import {
  Entity,
  Column as Col,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Article } from '../article/article.entity';
import { Column } from '../column/column.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Col()
  name: string;

  @Col()
  password: string;

  @Col()
  isAdmin: number;

  @Col()
  isEnabled: number;

  @Col({ nullable: true })
  sex: string;

  @Col({ nullable: true })
  birthday: string;

  @Col({ nullable: true })
  job: string;

  @Col({ nullable: true })
  part: string;

  @Col({ nullable: true })
  industry: string;

  @OneToMany(type => Article, article => article.person)
  articles: Article[];

  @ManyToMany(type => Column)
  @JoinTable()
  columns: Column[];

  @ManyToMany(type => Person)
  @JoinTable()
  persons: Person[];
}
