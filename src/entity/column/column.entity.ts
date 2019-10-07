import { Entity, PrimaryGeneratedColumn, Column  as Col} from "typeorm";

@Entity()
export class Column{
    @PrimaryGeneratedColumn()
    id:string;

    @Col()
    name:string;
}