import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Article } from "../article/article.entity";
import { Column } from "../column/column.entity";

@Entity()
export class ArticleColumn{
    @PrimaryGeneratedColumn()
    id:string;

    @OneToOne(type=> Article)
    @JoinColumn()
    article:Article;

    @OneToOne(type=> Column)
    @JoinColumn()
    column:Column;

}