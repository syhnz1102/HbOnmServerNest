import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly Service: AdminService) {}

  @Get('/adminList')
  getAdminList() {
    return this.Service.getAdminList();
  }

  @Get('/adminInfo')
  getAdminInfo(): string {
    return this.Service.getAdminInfo();
  }

  @Get('/adminRegister')
  adminRegister(): string {
    return this.Service.adminRegister();
  }

  @Get('/adminUpdate')
  adminUpdate(): string {
    return this.Service.adminUpdate();
  }

  @Get('/adminDelete')
  adminDelete(): string {
    return this.Service.adminDelete();
  }
}