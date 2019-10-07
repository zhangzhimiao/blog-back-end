import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Person } from "../person/person.entity";
import { Column } from "../column/column.entity";

@Entity()
export class PersonColumn{
    @PrimaryGeneratedColumn()
    id:string;

    @OneToOne(type=> Person)
    @JoinColumn()
    follower:Person;

    @OneToOne(type=> Column)
    @JoinColumn()
    type:Column;

}