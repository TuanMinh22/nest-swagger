/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class queryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  completed: boolean;
}
