import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { WorkerService } from './worker.service';

@Controller()
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @MessagePattern('refresh')
  async getHello(userId: string): Promise<number> {
    return await this.workerService.refresh(userId);
  }
}
