import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PersonCare {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carePersonId: number;

  @Column()
  beCarePersonId: number;
}
