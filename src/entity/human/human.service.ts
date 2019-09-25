import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Human } from './human.entity';

@Injectable()
export class HumanService {
  constructor(
    @InjectRepository(Human)
    private readonly humanRepository: Repository<Human>,
  ) {}

  async findAll(): Promise<Human[]> {
    return await this.humanRepository.find();
  }
}
