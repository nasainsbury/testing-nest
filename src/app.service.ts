import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): { status: 'OK' } {
    return { status: 'OK' };
  }
}
