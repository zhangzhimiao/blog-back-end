import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleColumn } from "./article-column.entity";
import { ArticleColumnService } from "./article-column.service";
import { ArticleColumnController } from "./article-column-controller";

@Module({
    imports:[TypeOrmModule.forFeature([ArticleColumn])],
    providers:[ArticleColumnService],
    controllers:[ArticleColumnController]
})
export class ArticleLabelModule{}