import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonCare } from './person-care.entity';
import { PersonCareService } from './person-care.service';
import { PersonCareController } from './person-care.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PersonCare])],
  providers: [PersonCareService],
  controllers: [PersonCareController],
})
export class PersonCareModule {}
