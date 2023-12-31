import { PhotosService } from './../photos/photos.service';
/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateResponse, FindAllResponse } from 'src/common/httpResponse';
import { Role } from 'src/roles/entities';
import { User } from './entities/user.entity';
import { ListUsersParams, UpdateUserDto, CreateUserDto } from './dto';

@Injectable({ scope: Scope.TRANSIENT })
// @Injectable({scope: Scope.REQUEST})
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {
    console.log('user service inject');
  }

  // @Inject('PHOTO_SERVICE')
  // private readonly photosService: PhotosService;

  async findAll(listUsersParams: ListUsersParams) {
    const { offset, size, paginate, ...whereOptions } = listUsersParams;
    const paginationOptions = { offset, limit: size };
    const options = { where: {} };

    if (whereOptions.email)
      options.where = { ...options.where, email: whereOptions.email };

    for (const field of ['firstName', 'lastName'])
      if (whereOptions[field])
        options.where = {
          ...options.where,
          [field]: { [Op.like]: `%${whereOptions[field]}%` },
        };

    for (const field of ['isEmailVerified', 'isPhoneNumberVerified'])
      if (whereOptions[field])
        options.where = {
          ...options.where,
          [field]: whereOptions[field] === 'true',
        };

    if (paginate) {
      const result = await this.userRepository.findAndCountAll({
        ...paginationOptions,
        ...options,
        attributes: { exclude: ['avatarId', 'password'] },
        include: ['avatar'],
      });
      return new PaginateResponse(result.rows, result.count);
    }

    const result = await this.userRepository.findAll(options);
    return new FindAllResponse(result);
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.userRepository.findOne<User>({
      where: { email },
      attributes: {
        exclude: ['avatarId'],
      },
      include: 'avatar',
    });
    if (!result) throw new NotFoundException();
    return result.get();
  }

  async findOne(id: number) {
    const result = await this.userRepository.findByPk(id, {
      attributes: { exclude: ['avatarId', 'password', 'roleId'] },
      include: [
        {
          model: Role,
          attributes: ['id', 'title', 'label', 'allowAny'],
          include: ['permissions'],
        },
        'avatar',
      ],
    });
    if (!result) throw new NotFoundException();
    return result;
  }

  async update(user: User, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(updateUserDto, {
      where: { id: user.id },
    });
  }
}
