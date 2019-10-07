import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ArticleColumn } from "./article-column.entity";
import { Repository } from "typeorm";

@Injectable()
export class ArticleColumnService{
    constructor(@InjectRepository(ArticleColumn) private readonly articleColumnRepository:Repository<ArticleColumn>){}
}