import { Controller, Get, Post, Body } from '@nestjs/common';
import { formatNamedParameters } from 'sequelize/types/utils';
import { User } from './models/user.model';
import { UserServive } from './user.service';


@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserServive) {}
  users: any[] = [];
  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }
  @Post('/create')
  CreateUser(@Body() body) {
    this.userService.createUser(body);
    return { message: 'sainuuu', body };
  }
  @Post('/signin')
  signIn(@Body() body) {
    return this.userService.signin(body);
  }
}
