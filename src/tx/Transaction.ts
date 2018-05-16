import Category from '../categories/Category';
import Payee from '../payees/Payee';

export default interface Transaction  {
  readonly id: string;
  payeeId: string;
  personId: string;
  categoryId: string;
  category: Category;
  accountId: string;
  txType: TxTypes | string;
  txDate: string | Date;
  version: number;
  cleared: boolean;
  amount: number;
  payee: Payee;
}

export enum TxTypes {
  DEBIT = 'Debit',
  CREDIT = 'Credit',
  WITHDRAWAL = 'Withdrawal',
  DEPOSIT = 'Deposit'
}
