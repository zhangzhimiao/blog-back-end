import { Controller } from "@nestjs/common";
import { ArticleService } from "./article.service";

@Controller(`entity/article`)
export class ArticleController{
    constructor(private articleService:ArticleService){}
}