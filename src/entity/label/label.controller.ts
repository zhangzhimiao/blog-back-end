import { Controller } from "@nestjs/common";
import { LabelService } from "./label.service";


@Controller(`entity/label`)
export class LabelController{
    constructor(private labelService:LabelService){}
}