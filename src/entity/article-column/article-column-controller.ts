import { Controller } from "@nestjs/common";
import { ArticleColumnService } from "./article-column.service";

@Controller(`entity/article-controller`)
export class ArticleColumnController{
    constructor(private articleColumnService: ArticleColumnService){}
}