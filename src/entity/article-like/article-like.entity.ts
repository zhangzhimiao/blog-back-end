import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArticleLike {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  articleId: string;

  @Column()
  personId: string;
}
