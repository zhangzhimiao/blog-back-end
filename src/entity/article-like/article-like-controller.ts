import { Controller } from "@nestjs/common";
import { ArticleLikeService } from "./article-like.service";

@Controller(`entity/article-like`)
export class ArticleLikeController{
    constructor(private articleLikeService: ArticleLikeService){}
}