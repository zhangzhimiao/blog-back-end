import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => Person, person => person.articles)
  person: Person;

  @Column()
  content: string;

  @Column()
  publishTime: number;

  @Column()
  isPublic: number;

  @Column()
  title: string;
}
