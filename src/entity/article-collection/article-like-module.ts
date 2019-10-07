import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleCollection } from "./article-collection.entity";
import { ArticleCollectionService } from "./article-collection.service";
import { ArticleCollectionController } from "./article-collection-controller";

@Module({
    imports:[TypeOrmModule.forFeature([ArticleCollection])],
    providers:[ArticleCollectionService],
    controllers:[ArticleCollectionController]
})
export class ArticleLikeModule{}