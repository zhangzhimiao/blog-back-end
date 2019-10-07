import { Controller } from "@nestjs/common";
import { PersonColumnService } from "./person-column.service";

@Controller(`entity/person-relationship`)
export class PersonTypeController{
    constructor(private personTypeService:PersonColumnService){}
}