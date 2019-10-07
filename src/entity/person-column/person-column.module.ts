import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonColumn } from './person-column.entity';
import { PersonColumnService } from './person-column.service';
import { PersonColumnController } from './person-column.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PersonColumn])],
  providers: [PersonColumnService],
  controllers: [PersonColumnController],
})
export class PersonRelationshipModule {}
