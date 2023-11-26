/* eslint-disable prettier/prettier */

import { HttpStatus } from '@nestjs/common';

export class UpdateResponse<T = any> {
  constructor(
    // public result: T,
    public message: string = 'Cập nhật thành công',
    public status: number = HttpStatus.CREATED,
  ) {}
}
