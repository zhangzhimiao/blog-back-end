import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { Article } from "../article/article.entity";
import { Person } from "../person/person.entity";

@Entity()
export class ArticleCollection{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    collectTime:number

    @OneToOne(type=> Article)
    @JoinColumn()
    article:Article;

    @OneToOne(type=> Person)
    @JoinColumn()
    person:Person;

}