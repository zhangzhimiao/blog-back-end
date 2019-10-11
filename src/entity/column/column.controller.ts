import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ColumnService } from './column.service';

@Controller(`entity/column`)
export class ColumnController {
  constructor(private columnService: ColumnService) {}

  @Post(`detail`)
  getPerson(@Body('data') data: { columnId: string }) {
    return this.columnService.getColumn(data.columnId);
  }
  @Get('all')
  getAllColumns() {
    return this.columnService.getColumns();
  }

  @Get('columns')
  getColumnsById(@Query('ids') ids: string[]) {
    return this.columnService.getColumnsById(ids);
  }
}
