import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArticleLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  articleId: string;

  @Column()
  personId: string;
}
