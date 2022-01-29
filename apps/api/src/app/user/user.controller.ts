import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { userEntity } from '../../Entities';
import { AuthGuard, authRequest } from '../auth';
import { userDto } from './user.DTO';
import { UserService } from './user.service';
import { userMinDto } from './userMin.DTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //gets own user data
  @UseGuards(AuthGuard)
  @Get()
  getMyData(@Req() req: authRequest) {
    return this.userService.getMyData(req.user.sub);
  }

  //gets all username
  @UseGuards(AuthGuard)
  @Get('/all')
  getAll() {
    return this.userService.getAll();
  }

  //Create user
  @UseGuards(AuthGuard)
  @Put()
  create(
    @Req() req: authRequest,
    @Body() body: userMinDto
  ): Promise<userEntity> {
    //const body: userMin = { id: 0, username: '', email: '', authId: '' };
    return this.userService.create(req.user.sub, body);
  }

  //Delete user
  @UseGuards(AuthGuard)
  @Delete()
  delete(@Req() req: authRequest) {
    return this.userService.delete(req.user.sub);
  }

  //Modify user
  @UseGuards(AuthGuard)
  @Patch()
  modify(@Req() req: authRequest, @Body() body: userDto) {
    return this.userService.modify(req.user.sub, body);
  }

  // //Add role to user
  // @Post()
  // addRole() {
  //   return this.userService.addRole();
  // }

  // //Remove role to user
  // @Post()
  // removeRole() {
  //   return this.userService.removeRole();
  // }
}
