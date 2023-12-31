import { UsersService } from 'src/users/users.service';
/* eslint-disable prettier/prettier */
import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Home')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private usersService: UsersService,
  ) {}

  @Redirect('/api')
  @Get()
  redirectToSwagger() {}
}
