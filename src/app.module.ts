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
import { AdminEntity } from './api/admin/admin.entity';

import { AdminModule } from './api/admin/admin.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   autoLoadEntities: true    
    // }),
    TypeOrmModule.forRoot(),
    AdminModule,
    // TypeOrmModule.forRoot({
    // "type": "postgres",
    // "host": "localhost",
    // "port": 5432,
    // "username": "postgres",
    // "password": "skfflwl1!",
    // "database": "postgres",
    // "synchronize": true,
    // "logging": false,
    // "entities": [
    //     "dist/**/**/**.entity{.ts,.js}"
    // ]}),
    // TypeOrmModule.forFeature([AdminEntity]),
  ],
  controllers: [
    // AdminController,
    // UserController,
    // TransactionController,
    // StatisticsController,
    // AuthController,
  ],
  providers: [
    // AdminService,
    // UserService,
    // TransactionService,
    // StatisticsService,
    // AuthService,
  ]
})
export class AppModule {}