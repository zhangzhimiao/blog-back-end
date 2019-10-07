import { Controller } from "@nestjs/common";
import { TypeService } from "./type.service";

@Controller()
export class TypeController{
    constructor(private typeService:TypeService){}
}