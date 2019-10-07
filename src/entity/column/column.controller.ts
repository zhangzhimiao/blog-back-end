import { Controller } from "@nestjs/common";
import { ColumnService } from "./column.service";

@Controller(`entity/column`)
export class ColumnController{
    constructor(private columnService:ColumnService){}
}