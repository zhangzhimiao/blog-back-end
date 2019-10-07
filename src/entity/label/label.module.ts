import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LabelService } from "./label.service";
import { LabelController } from "./label.controller";
import { Label } from "./label.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Label])],
    providers:[LabelService],
    controllers:[LabelController]
})
export class LabelModule{}