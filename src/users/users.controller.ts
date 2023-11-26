import { HttpExceptionFilter } from './../common/filter/http-exception/http-exception.filter';
import { PhotosService } from './../photos/photos.service';
import {
  ForbiddenException,
  Header,
  HttpCode,
  Inject,
  ParseArrayPipe,
  Post,
  Query,
  Redirect,
  UseFilters,
} from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Param, ValidationPipe, Get, Body } from '@nestjs/common';
import { query } from 'express';
import {
  ApiController,
  GetAllMethod,
  GetOneMethod,
  ID,
} from 'src/common/decorator';
import { ListUsersParams, GetOneUserDto, CreateUserDto } from './dto';
import { UsersService } from './users.service';
import { queryDto } from './dto/demo-query.dto';

@ApiController('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('exception')
  // @UseFilters(new HttpExceptionFilter())
  async getMessage() {
    throw new ForbiddenException();
  }

  @Get('ab*cd')
  async getUser() {
    return 'minh';
  }

  @Get('id/:id')
  async getOne(@Param() p) {
    return p.id;
  }

  @Get('id/get')
  async getTwo(@Param() p) {
    return 'minh';
  }

  @Post('up')
  async create(@Body() data) {
    return data;
  }

  @Post('createUser')
  createUser(
    @Body('items', new ParseArrayPipe({ items: CreateUserDto, separator: ',' }))
    CreateUserDtos: CreateUserDto[],
    // @Body('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    // ids: Number[],
  ) {
    return `this action add new users`;
  }

  @HttpCode(400)
  @Get('demo')
  demoHttpCode(@Query() query: queryDto) {
    // return query.id;
    console.log(query.id === 123);
    console.log(query.completed === true);
  }

  @Get('getAllUsers')
  @Header('something', 'none')
  @Redirect('http://nestjs.com', 301)
  getAllUsers() {
    return 'minhtuan';
  }

  @GetAllMethod()
  async findAll(
    @Query(new ValidationPipe({ transform: true }))
    listUsersParams: ListUsersParams,
  ) {
    return this.usersService.findAll(listUsersParams);
  }

  @GetOneMethod(':id')
  async findOne(@Param() getOneUserDto: GetOneUserDto, @ID() id: number) {
    return this.usersService.findOne(id);
  }
}
