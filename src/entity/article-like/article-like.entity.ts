import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Article } from "../article/article.entity";
import { Person } from "../person/person.entity";

@Entity()
export class ArticleLike{
    @PrimaryGeneratedColumn()
    id:string;

    @OneToOne(type=> Article)
    @JoinColumn()
    article:Article;

    @OneToOne(type=> Person)
    @JoinColumn()
    person:Person;

}