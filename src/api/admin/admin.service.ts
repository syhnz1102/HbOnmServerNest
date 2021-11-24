import { Injectable } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
// import db from '../../';

@Injectable()
export class AdminService {
  constructor(private readonly repository: AdminRepository) {}

  async getAdminList() {
    return await this.repository.find();
    // const selectQuery = `
    //     SELECT  user_id, user_name, TO_CHAR(create_date, 'YYYY-MM-DD HH24:MI:SS') AS create_date, TO_CHAR(update_date, 'YYYY-MM-DD HH24:MI:SS') AS update_date, note
    //     FROM    platform.tbl_user_info
    //   `;
    // return await db.query(selectQuery);
  }
  getAdminInfo(): string {
    return 'adminList';
  }
  adminRegister(): string {
    return 'adminList';
  }
  adminUpdate(): string {
    return 'adminList';
  }
  adminDelete(): string {
    return 'adminList';
  }
}
