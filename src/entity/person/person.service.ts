import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { Person } from './person.entity';
import { BackData } from 'src/types/response';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async register(person: Person): Promise<BackData> {
    return await this.personRepository
      .save(person)
      .then(d => ({ code: 0, data: d }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'register error',
        },
      }));
  }

  async login(person: Person): Promise<BackData> {
    return await getManager()
      .createQueryBuilder(Person, 'person')
      .where('person.name = :name and person.password = :password', {
        name: person.name,
        password: person.password,
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
          message: 'login error',
        },
      }));
  }
}
