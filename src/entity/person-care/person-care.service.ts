import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PersonCare } from './person-care.entity';
import { Repository, getConnection, getManager } from 'typeorm';
import { BackData } from 'src/types/response';

@Injectable()
export class PersonCareService {
  constructor(
    @InjectRepository(PersonCare)
    private readonly articleLikeRepository: Repository<PersonCare>,
  ) {}

  async addCare(careId: string, beCaredId: string): Promise<BackData> {
    const personCare = new PersonCare();
    personCare.carePersonId = parseInt(careId, 10);
    personCare.beCarePersonId = parseInt(beCaredId, 10);
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

  async cancelCare(careId: string, beCaredId: string) {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(PersonCare)
      .where('carePersonId = :careId and beCarePersonId = :beCaredId', {
        careId,
        beCaredId,
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

  async getCareInfo(careId: string, beCaredId: string) {
    return await getManager()
      .createQueryBuilder(PersonCare, 'personCare')
      .where('carePersonId = :careId and beCarePersonId = :beCaredId', {
        careId,
        beCaredId,
      })
      .getOne()
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'get like info error',
        },
      }));
  }

  async getCares(careId: string) {
    return await getManager()
      .createQueryBuilder(PersonCare, 'personCare')
      .where('carePersonId = :careId', {
        careId,
      })
      .getMany()
      .then(d => ({
        code: 0,
        data: {
          d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'get like info error',
        },
      }));
  }
}
