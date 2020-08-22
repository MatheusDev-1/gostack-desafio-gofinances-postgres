import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance({}): Promise<Balance> {
    // TODO
  }

  public async create({}): Promise<Transaction> {}
}

export default TransactionsRepository;
