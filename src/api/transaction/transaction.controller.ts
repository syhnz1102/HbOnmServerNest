import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller()
export class TransactionController {
  constructor(private readonly Service: TransactionService) {}

  @Get('/usageTransaction')
  getTransactionList(): string {
    return this.Service.getTransactionList();
  }

  @Get('/errorTransaction')
  getTransactionErrorList(): string {
    return this.Service.getTransactionErrorList();
  }

  @Get('/roomidTransaction')
  getRoomId(): string {
    return this.Service.getRoomId();
  }
}