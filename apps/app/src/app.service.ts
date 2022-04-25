import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, PatternMetadata } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('TEST_SERVICE') private readonly client: ClientProxy) {}

  requestRefreshHistory(
    pattern: PatternMetadata,
    userId: string,
  ): Observable<number> {
    return this.client.send(pattern, userId);
  }
}
