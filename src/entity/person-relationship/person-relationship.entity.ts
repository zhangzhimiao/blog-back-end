import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Person } from "../person/person.entity";

@Entity()
export class PersonRelationship{
    @PrimaryGeneratedColumn()
    id:string;

    @OneToOne(type=> Person)
    @JoinColumn()
    follower:Person;

    @OneToOne(type=> Person)
    @JoinColumn()
    follewed:Person;

}