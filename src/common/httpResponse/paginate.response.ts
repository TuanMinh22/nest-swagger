/* eslint-disable prettier/prettier */
import { HttpStatus } from '@nestjs/common';

export class PaginateResponse<T = any> {
  constructor(
    public result: T[],
    public count: number,
    public message: string = 'khôi phục thành công',
    public status: number = HttpStatus.OK,
  ) {}
}
