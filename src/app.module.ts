import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './entity/person/person.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonModule],
})
export class AppModule {}
