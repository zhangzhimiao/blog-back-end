import { Controller } from "@nestjs/common";
import { ArticleCollectionService } from "./article-collection.service";

@Controller(`entity/article-collection`)
export class ArticleCollectionController{
    constructor(private articleCollectionService: ArticleCollectionService){}
}