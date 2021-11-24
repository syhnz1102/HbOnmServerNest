import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
  getTransactionList(): string {
    return 'Transactions List!';
  }
  getTransactionErrorList(): string {
    return 'Transactions List!';
  }
  getRoomId(): string {
    return 'Transactions List!';
  }
}
