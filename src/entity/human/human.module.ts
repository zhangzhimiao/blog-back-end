import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Human } from './human.entity';
import { HumanService } from './human.service';
import { HumanController } from './human.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Human])],
  providers: [HumanService],
  controllers: [HumanController],
})
export class HumanModule {}
