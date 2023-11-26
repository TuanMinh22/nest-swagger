/* eslint-disable prettier/prettier */
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import {
  Article,
  User,
  Following,
  Bookmark,
  Photo,
  Category,
  ArticleCategory,
  Comment,
  Favorite,
  Role,
  Permission,
  PermissionRole,
  Notification,
} from './database.entities';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect:
          (process.env.DATEBASE_DIALECTT as SequelizeOptions['dialect']) ||
          'mysql',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
      });
      sequelize.addModels([
        Article,
        User,
        Following,
        Bookmark,
        Favorite,
        Photo,
        Category,
        Comment,
        ArticleCategory,
        Role,
        Permission,
        PermissionRole,
        Notification,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
