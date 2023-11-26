/* eslint-disable prettier/prettier */

import { HttpStatus } from '@nestjs/common';

export class CreateResponse<T = any> {
  constructor(
    public result: T,
    public message: string = 'Thành công trong việc tạo ra',
    public status: number = HttpStatus.CREATED,
  ) {}
}
