import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ArticleLike } from "./article-like.entity";
import { Repository } from "typeorm";

@Injectable()
export class ArticleLikeService{
    constructor(@InjectRepository(ArticleLike) private readonly articleLikeRepository:Repository<ArticleLike>){}
}