import { Controller } from "@nestjs/common";
import { ColumnService } from "./column.service";

@Controller(`entity/type`)
export class ColumnController{
    constructor(private typeService:ColumnService){}
}