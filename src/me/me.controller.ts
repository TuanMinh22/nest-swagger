import { ListUsersParams } from './../users/dto/list-users-params';
import { UsersService } from './../users/users.service';
/* eslint-disable prettier/prettier */
import {
  Get,
  Post,
  Body,
  Param,
  Put,
  UseGuards,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { FollowUserParams, GetFollowingsQuery, UpdateProfileDto } from './dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ApiController, User } from 'src/common/decorator';
import { MeService } from './me.service';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiController('me')
export class MeController {
  constructor(
    private readonly meService: MeService,
    private usersService: UsersService,
  ) {}

  @Get('user')
  async getUser(
    @Query(new ValidationPipe({ transform: true }))
    listUsersParams: ListUsersParams,
  ) {
    return this.usersService.findAll(listUsersParams);
  }

  @Get('profile')
  async getProfile(@User() user) {
    return user;
  }

  @Put('profile')
  async updateProfile(
    @User() user,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.meService.updateProfile(user, updateProfileDto);
  }

  @Get('users/followers')
  async getFollowers(@User() user, @Query() query: GetFollowingsQuery) {
    return this.meService.getMyFollowers(user, query);
  }

  @Get('users/followings')
  async getFollowings(@User() user, @Query() query: GetFollowingsQuery) {
    return this.meService.getMyFollowings(user, query);
  }

  @Post('users/:userId/follow')
  async follow(@User() user, @Param() params: FollowUserParams) {
    await this.meService.follow(user, +params.userId);
    return {
      message: 'hoặc theo dõi thành công',
    };
  }

  @Post('users/:userId/unfollow')
  async unfollow(@User() user, @Param() params: FollowUserParams) {
    await this.meService.unfollow(user, +params.userId);
    return {
      message: 'hoặc hủy theo dõi thành công',
    };
  }

  @Post('articles/:articleId/like')
  async likeArticle() {}

  @Post('articles/:articleId/bookmark')
  async bookmarkArticle() {}

  @Get('articles/bookmarks')
  async getMyBookmarkedArticles() {}

  @Get('articles/favorites')
  async getMyFavoriteArticles() {}

  @Get('articles/favorites')
  async getMyPublishedArticles() {}
}
