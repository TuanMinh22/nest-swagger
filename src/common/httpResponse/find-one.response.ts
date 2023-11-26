/* eslint-disable prettier/prettier */

import { HttpStatus } from '@nestjs/common';

export class FindOneResponse<T = any> {
  constructor(
    public result: T,
    public message: string = 'khôi phục thành công',
    public status: number = HttpStatus.OK,
  ) {}
}
