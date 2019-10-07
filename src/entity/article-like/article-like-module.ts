import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleLike } from "./article-like.entity";
import { ArticleLikeService } from "./article-like.service";
import { ArticleLikeController } from "./article-like-controller";

@Module({
    imports:[TypeOrmModule.forFeature([ArticleLike])],
    providers:[ArticleLikeService],
    controllers:[ArticleLikeController]
})
export class ArticleLikeModule{}