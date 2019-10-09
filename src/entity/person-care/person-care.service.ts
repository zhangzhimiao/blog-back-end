import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PersonCare } from './person-care.entity';
import { Repository, getConnection } from 'typeorm';
import { BackData } from 'src/types/response';

@Injectable()
export class PersonCareService {
  constructor(
    @InjectRepository(PersonCare)
    private readonly articleLikeRepository: Repository<PersonCare>,
  ) {}

  async addCare(person1Id: string, person2Id: string): Promise<BackData> {
    const personCare = new PersonCare();
    personCare.carePersonId = person1Id;
    personCare.beCarePersonId = person2Id;
    return await this.articleLikeRepository
      .save(personCare)
      .then(d => ({ code: 0, data: d }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'add care error',
        },
      }));
  }

  async cancelCare(person1Id: string, person2Id: string) {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(PersonCare)
      .where('carePersonId = :person1Id and beCarePersonId = :person2Id', {
        person1Id,
        person2Id,
      })
      .execute()
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'cancle like error',
        },
      }));
  }
}
