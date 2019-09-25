import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HumanModule } from './entity/human/human.module';

@Module({
  imports: [TypeOrmModule.forRoot(), HumanModule],
})
export class AppModule {}
