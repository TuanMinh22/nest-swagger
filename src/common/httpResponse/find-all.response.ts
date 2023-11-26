/* eslint-disable prettier/prettier */
import { HttpStatus } from '@nestjs/common';

export class FindAllResponse<T = any> {
  constructor(
    public result: T[],
    public message: string = 'khôi phục thành công',
    public status: number = HttpStatus.OK,
  ) {}
}
