import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Article } from '../article/article.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  isAdmin: number;

  @Column()
  isEnabled: number;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  job: string;

  @Column({ nullable: true })
  part: string;

  @Column({ nullable: true })
  industry: string;

  @OneToMany(type => Article, article => article.person)
  articles: Article[];
}
