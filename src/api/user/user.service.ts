import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserAccessList(): string {
    return 'User List!';
  }
}
