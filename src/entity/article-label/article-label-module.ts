import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleLabel } from "./article-label.entity";
import { ArticleLabelService } from "./article-label.service";
import { ArticleLabelController } from "./article-label-controller";

@Module({
    imports:[TypeOrmModule.forFeature([ArticleLabel])],
    providers:[ArticleLabelService],
    controllers:[ArticleLabelController]
})
export class ArticleLabelModule{}