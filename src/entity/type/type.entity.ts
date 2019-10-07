import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Type{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name:string;
}