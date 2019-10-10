import {
  Entity,
  PrimaryGeneratedColumn,
  Column as Col,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Person } from '../person/person.entity';
import { Label } from '../label/label.entity';
import { Column } from '../column/column.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Person, person => person.articles, { nullable: false })
  person: Person;

  @Col()
  content: string;

  @Col()
  publishTime: number;

  @Col()
  isPublic: number;

  @Col()
  title: string;

  @OneToMany(type => Label, label => label.article)
  labels: Label[];
}
