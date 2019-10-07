import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonColumn } from "./person-column.entity";
import { PersonColumnService } from "./person-column.service";
import { PersonTypeController } from "./person-column.controller";

@Module({
    imports:[TypeOrmModule.forFeature([PersonColumn])],
    providers:[PersonColumnService],
    controllers:[PersonTypeController]
})
export class PersonRelationshipModule{}