import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ op: 'sum' })
  async accumulate(data: number[]): Promise<number> {
    return data.reduce((a, b) => a + b);
  }

  @EventPattern('user_signed')
  async handleUserSigned(userId: string) {
    console.log(`user signed with id: ${userId}`);
  }
}
