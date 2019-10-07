import { Controller } from "@nestjs/common";
import { TypeService } from "./type.service";

@Controller(`entity/type`)
export class TypeController{
    constructor(private typeService:TypeService){}
}