import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArticleCollection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  collectTime: number;

  @Column()
  articleId: string;

  @Column()
  personId: string;
}
