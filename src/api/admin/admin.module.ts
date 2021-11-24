import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminRepository } from './admin.repository';
import { AdminEntity } from './admin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ AdminRepository ]),
  ],
  controllers: [ AdminController ],
  providers: [ AdminService ],
  exports: [ AdminService ]
})
export class AdminModule {}