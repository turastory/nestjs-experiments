import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sum')
  sendMessage() {
    return this.appService.sendMessage({ op: 'sum' }, [1, 2, 3]);
  }

  @Get('/user')
  sendEvent() {
    return this.appService.sendEvent('user_signed', '1');
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
