import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly Service: AuthService) {}

  @Get('/login')
  login(): string {
    return this.Service.login();
  }

  @Get('/logout')
  logout(): string {
    return this.Service.logout();
  }
}