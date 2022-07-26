import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { throws } from 'assert';
import { stringify } from 'querystring';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/models/user.model';
@Injectable()
export class UserServive {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  getUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }
  createUser(data) {
    const newUser = new this.userModel({
      id: data.id,
      firstName: data.name,
    });
    newUser.save();
    return newUser;
  }
  async signin(body) {
    console.log(body);
    const fname = await this.userModel.findOne({
      where: {
        firstName: body.username,
        lastName: body.password,
      },
    });

    if (fname && fname.firstName && fname.lastName != null) {
      return {
        message: 'amjilttai nevterlee',
        fname,
      };
    } else
      return {
        status: 400,
        message: 'Hereglegch nbhgui',
      };
  }
}
