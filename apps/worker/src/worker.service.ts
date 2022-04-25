import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerService {
  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async refresh(userId: string): Promise<number> {
    // Do some work here
    this.delay(1000);
    return Math.random() * 100;
  }
}
