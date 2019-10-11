import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArticleComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  articleId: number;

  @Column()
  personId: number;

  @Column()
  personName: string;

  @Column()
  content: string;

  @Column()
  commentTime: number;

  @Column({ nullable: true })
  parentCommentId: number;
}
