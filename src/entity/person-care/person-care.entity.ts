import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PersonCare {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carePersonId: string;

  @Column()
  beCarePersonId: string;
}
