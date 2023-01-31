import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(baseUrl: string) {
    return{
      status: 'Server Running',
      docs: baseUrl + '/api',
    }
  }
 
}
