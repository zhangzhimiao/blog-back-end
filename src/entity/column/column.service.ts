import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Column } from "./column.entity";

@Injectable()
export class ColumnService{
    constructor(@InjectRepository(Column) private readonly typeRepository:Repository<Column>){}
}