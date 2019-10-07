import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonColumn } from "./person-column.entity";
import { Repository } from "typeorm";
import { Person } from "../person/person.entity";
import { Column } from "../column/column.entity";

@Injectable()
export class PersonColumnService{
    constructor(@InjectRepository(PersonColumn) private readonly personRelationshipRepository:Repository<PersonColumn>){
    }

    async addRelationship(follower:Person,type:Column){
        const relationship = new PersonColumn();
        relationship.follower = follower;
        relationship.type = type;
        await  this.personRelationshipRepository.save(relationship)
    }
}