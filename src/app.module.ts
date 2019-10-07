import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './entity/person/person.module';
import { Middleware } from './middleware/middleware.service';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonModule],
  providers: [Middleware],
})
export class AppModule {}
