import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(type => Person)
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
