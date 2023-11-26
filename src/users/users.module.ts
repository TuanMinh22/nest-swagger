/* eslint-disable prettier/prettier */
import { Module, Global } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User, Following, Notification } from 'src/database/database.entities';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PhotosService } from 'src/photos/photos.service';

@Global()
@Module({
  providers: [
    UsersService,
    // {
    //   provide: 'PHOTO_SERVICE',
    //   useClass: PhotosService,
    // },
  ],
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User, Following, Notification])],
  exports: [SequelizeModule, UsersService],
})
export class UsersModule {}
