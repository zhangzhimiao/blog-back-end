import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Article } from "../article/article.entity";
import { Label } from "../label/label.entity";

@Entity()
export class ArticleLabel{
    @PrimaryGeneratedColumn()
    id:string;

    @OneToOne(type=> Article)
    @JoinColumn()
    article:Article;

    @OneToOne(type=> Label)
    @JoinColumn()
    label:Label;

}