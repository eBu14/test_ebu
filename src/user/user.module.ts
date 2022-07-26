import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppModule } from 'src/app.module';
import { User } from './models/user.model';
import { UserController } from './user.controller';
import { UserServive } from './user.service';
@Global()
@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserServive],
  controllers: [UserController],
})
export class UserModule {}
