import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ArticleCollection } from "./article-collection.entity";
import { Repository } from "typeorm";

@Injectable()
export class ArticleCollectionService{
    constructor(@InjectRepository(ArticleCollection) private readonly articleCollectionRepository:Repository<ArticleCollection>){}
}