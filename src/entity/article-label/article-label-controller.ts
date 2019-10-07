import { Controller } from "@nestjs/common";
import { ArticleLabelService } from "./article-label.service";

@Controller(`entity/article-label`)
export class ArticleLabelController{
    constructor(private articleLabelService: ArticleLabelService){}
}