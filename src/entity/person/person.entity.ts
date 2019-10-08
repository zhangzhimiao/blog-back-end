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
  isAdmin: number;

  @Column()
  isEnabled: number;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  job: string;

  @Column({ nullable: true })
  part: string;

  @Column({ nullable: true })
  industry: string;
}
