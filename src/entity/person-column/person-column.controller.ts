import { Controller } from '@nestjs/common';
import { PersonColumnService } from './person-column.service';

@Controller(`entity/person-column`)
export class PersonColumnController {
  constructor(private personColumnService: PersonColumnService) {}
}
