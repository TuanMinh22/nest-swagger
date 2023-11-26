/* eslint-disable prettier/prettier */
import { HttpStatus } from '@nestjs/common';

export class FindAllResult<T = any> {
  constructor(
    public result: T[],
    public count: number,
    public message: string = 'khôi phục thành công',
    public status: number = HttpStatus.OK,
  ) {}
}

export class FindOneResult<T = any> {
  constructor(
    public result: T,
    public message: string = 'khôi phục thành công',
    public status: number = HttpStatus.OK,
  ) {}
}

export class DestroyResult {
  constructor(
    public message: string = 'Đã xóa thành công',
    public status: number = HttpStatus.OK,
  ) {}
}

export class CreateResult {
  constructor(
    public message: string = 'Thành công trong việc tạo ra',
    public status: number = HttpStatus.CREATED,
  ) {}
}
