import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Column } from './column.entity';
import { BackData } from 'src/types/response';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(Column)
    private readonly typeRepository: Repository<Column>,
  ) {}

  async getColumn(columnId: string): Promise<BackData> {
    return this.typeRepository
      .findOne(columnId)
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

  async getColumns(): Promise<BackData> {
    return this.typeRepository
      .find()
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

  async getColumnsById(ids: string[]): Promise<BackData> {
    return this.typeRepository
      .findByIds(ids)
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
}
