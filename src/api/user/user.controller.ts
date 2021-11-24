import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly Service: UserService) {}

  @Get('/userAccessList')
  getUserAccessList(): string {
    return this.Service.getUserAccessList();
  }
}