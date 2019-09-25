import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Human {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sex: string;
}
