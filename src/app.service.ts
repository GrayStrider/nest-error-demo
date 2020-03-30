import { Injectable, UseFilters } from '@nestjs/common';
import { CatchAllFilter } from './../src/common/filters/catch-all.filter'

@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('hello world')
    return 'Hello World!';
  }
}
