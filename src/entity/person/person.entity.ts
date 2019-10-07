import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  sex:string;

  @Column()
  
  birthday:string;

  @Column()
  job:string;

  @Column()
  part:string;

  @Column()
  industry:string;
}
