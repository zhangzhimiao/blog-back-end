import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArticleCollection {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  collectTime: number;

  @Column()
  articleId: string;

  @Column()
  personId: string;
}
