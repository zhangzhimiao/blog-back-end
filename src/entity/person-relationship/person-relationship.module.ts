import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonRelationship } from "./person-relationship.entity";
import { PersonRelationshipService } from "./person-relationship.service";
import { PersonRelationshipController } from "./person-relationship.controller";

@Module({
    imports:[TypeOrmModule.forFeature([PersonRelationship])],
    providers:[PersonRelationshipService],
    controllers:[PersonRelationshipController]
})
export class PersonRelationshipModule{}