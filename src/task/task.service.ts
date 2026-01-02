/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private tasks = [
      {
        id: 1,
        title: 'Lern NestJS',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'Build API',
        isCompleted: true,
      },
    ];
    
  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  create(dto: CreateTaskDto) {

    const { title } = dto;


    const newTask = {
        id: this.tasks.length + 1,
        title: title,
        isCompleted: false,
      }
    
    this.tasks.push(newTask)
    return this.tasks;
  }
}
