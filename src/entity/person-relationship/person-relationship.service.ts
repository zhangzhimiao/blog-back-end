import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonRelationship } from "./person-relationship.entity";
import { Repository } from "typeorm";
import { Person } from "../person/person.entity";

@Injectable()
export class PersonRelationshipService{
    constructor(@InjectRepository(PersonRelationship) private readonly personRelationshipRepository:Repository<PersonRelationship>){
    }

    async addRelationship(follower:Person,followed:Person){
        const relationship = new PersonRelationship();
        relationship.follower = follower;
        relationship.follewed = followed;
        await  this.personRelationshipRepository.save(relationship)
    }
}