import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ArticleLabel } from "./article-label.entity";
import { Repository } from "typeorm";

@Injectable()
export class ArticleLabelService{
    constructor(@InjectRepository(ArticleLabel) private readonly articleLabelRepository:Repository<ArticleLabel>){}
}