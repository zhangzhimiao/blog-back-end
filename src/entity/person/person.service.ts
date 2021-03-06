import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getRepository, getConnection } from 'typeorm';
import { Person } from './person.entity';
import { BackData } from 'src/types/response';
import { Column } from '../column/column.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async register(data: { name: string; password: string }): Promise<BackData> {
    const person = new Person();
    person.name = data.name;
    person.password = data.password;
    person.isAdmin = 1;
    person.isEnabled = 0;
    return await this.personRepository
      .save(person)
      .then(d => ({ code: 0, data: { ...d } }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'register error',
        },
      }));
  }

  async login(data: { name: string; password: string }): Promise<BackData> {
    const person = new Person();
    person.name = data.name;
    person.password = data.password;
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
          ...d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'login error',
        },
      }));
  }

  async getPerson(personId: string): Promise<BackData> {
    return getRepository(Person)
      .findOne(personId)
      .then(d => ({
        code: 0,
        data: {
          ...d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: "can't find this user",
        },
      }));
  }

  async getColumns(id: string): Promise<BackData> {
    return getRepository(Person)
      .find({ relations: ['columns'], where: { id } })
      .then(d => ({
        code: 0,
        data: {
          ...d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: "can't find columns",
        },
      }));
  }

  async manageColumns(
    columnIds: string[],
    personId: string,
  ): Promise<BackData> {
    const result = columnIds.map(d => {
      const column = new Column();
      column.id = parseInt(d, 10);
      return column;
    });
    const person = new Person();
    person.id = parseInt(personId, 10);
    person.columns = result;
    return getConnection()
      .manager.save(person)
      .then(d => ({
        code: 0,
        data: {
          ...d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'add columns failed',
        },
      }));
  }

  async getPersonsByIds(ids: string[]) {
    const persons = ids.map(d => {
      const person = new Person();
      person.id = parseInt(d, 10);
      return person;
    });
    return this.personRepository
      .find({ select: ['id', 'name'], where: persons })
      .then(d => ({
        code: 0,
        data: {
          ...d,
        },
      }))
      .catch(e => ({
        code: 1,
        data: {
          message: 'find persons failed',
        },
      }));
  }
}
