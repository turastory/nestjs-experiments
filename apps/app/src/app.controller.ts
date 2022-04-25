import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/refresh')
  refreshHistory() {
    return this.appService.requestRefreshHistory('refresh', '3');
  }
}
