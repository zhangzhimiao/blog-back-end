import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Label } from "./label.entity";
import { Repository } from "typeorm";


@Injectable()
export class LabelService{
    constructor(@InjectRepository(Label)private readonly labelRepository:Repository<Label>){}
}