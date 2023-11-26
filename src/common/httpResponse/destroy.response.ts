/* eslint-disable prettier/prettier */
import { HttpStatus } from '@nestjs/common';

export class DestroyResponse {
  constructor(
    public message: string = 'Đã xóa thành công',
    public status: number = HttpStatus.OK,
  ) {}
}
