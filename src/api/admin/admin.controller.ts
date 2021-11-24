import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './admin.dto';

@Controller()
export class AdminController {
  constructor(private readonly Service: AdminService) {}

  @Get('/adminList')
  getAdminList(AdminDto : AdminDto) {
    return this.Service.getAdminList(AdminDto);
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