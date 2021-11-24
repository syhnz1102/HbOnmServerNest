import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './api/auth/auth.controller';
import { AdminController } from './api/admin/admin.controller';
import { TransactionController } from './api/transaction/transaction.controller';
import { UserController } from './api/user/user.controller';
import { StatisticsController } from './api/statistics/statistics.controller';

import { AuthService } from './api/auth/auth.service';
import { AdminService } from './api/admin/admin.service';
import { TransactionService } from './api/transaction/transaction.service';
import { UserService } from './api/user/user.service';
import { StatisticsService } from './api/statistics/statistics.service';
import { AdminRepository } from './api/admin/admin.repository';
import { Test01Controller } from './test01/test01.controller';
import { Test01Service } from './test01/test01.service';
import { Test01Module } from './test01/test01.module';
import { Test01Module } from './test01/test01.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // TypeOrmModule.forRoot({
    //   "type": "postgres",
    //   "host": "localhost",
    //   "port": 5432,
    //   "username": "postgres",
    //   "password": "skfflwl1!",
    //   "database": "postgres",
    //   "extra": {
    //     "ssl": {
    //         "rejectUnauthorized": false
    //     }
    // },
    //   "entities": [],
    // })
    TypeOrmModule.forFeature([AdminRepository]),
    Test01Module
  ],
  controllers: [
    AdminController,
    UserController,
    TransactionController,
    StatisticsController,
    AuthController,
    Test01Controller
  ],
  providers: [
    AdminService,
    UserService,
    TransactionService,
    StatisticsService,
    AuthService,
    Test01Service
  ]
})
export class AppModule {}