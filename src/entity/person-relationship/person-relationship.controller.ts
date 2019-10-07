import { Controller } from "@nestjs/common";
import { PersonRelationshipService } from "./person-relationship.service";

@Controller(`entity/person-relationship`)
export class PersonRelationshipController{
    constructor(private personRelationshipService:PersonRelationshipService){}
}