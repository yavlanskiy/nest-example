/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString({message: 'Title must be a string suka'})
  title: string;
}
