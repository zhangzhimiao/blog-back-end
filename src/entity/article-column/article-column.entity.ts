import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArticleColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  articleId: string;

  @Column()
  columnId: string;
}
