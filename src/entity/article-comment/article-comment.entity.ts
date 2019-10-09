import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArticleComment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  articleId: string;

  @Column()
  personId: string;

  @Column()
  content: string;

  @Column()
  commentTime: number;

  @Column({ nullable: true })
  parentCommentId: string;
}
