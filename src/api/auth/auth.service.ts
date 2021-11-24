import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
 login(): string {
    return 'auth';
  }
  logout(): string {
    return 'auth';
  }
}
