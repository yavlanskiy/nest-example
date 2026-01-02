/* eslint-disable prettier/prettier */
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }
  
  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    const task = this.taskService.findById(Number(id));

    if (!task) {
      throw new NotFoundException('Task not found!!!')
    }

    return task;
  }
}
