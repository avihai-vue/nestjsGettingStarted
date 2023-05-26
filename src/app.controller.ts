import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('toDoList')
export class AppController {
  constructor(private readonly appService1: AppService) {}
  @Get('tasks1')
  getHello1(): string {
    return this.appService1.getHello('task1');
  }

  @Get('tasks2')
  getHello2(): {name: string} {
    return { name: this.appService1.getHello('taska2')};
  }

  @Get()
  getHelloDefault(): string {
    return this.appService1.getHello('Default');
  }
}
