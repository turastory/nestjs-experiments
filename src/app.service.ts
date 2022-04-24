import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, PatternMetadata } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('TEST_SERVICE') private readonly client: ClientProxy) {}

  sendMessage(pattern: PatternMetadata, data: number[]): Observable<number> {
    return this.client.send(pattern, data);
  }

  sendEvent(pattern: PatternMetadata, data: string) {
    this.client.emit(pattern, data);
  }
}
