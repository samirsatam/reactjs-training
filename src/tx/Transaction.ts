import Category from '../categories/Category';

export default interface Transaction  {
  readonly id: string;
  payeeId: string;
  personId: string;
  categoryId: string;
  category: Category;
  accountId: string;
  txType: TxTypes;
  txDate: string | Date;
  version: number;
  cleared: boolean;
  amount: number;
}

export enum TxTypes {
  DEBIT = 'Debit',
  CREDIT = 'Credit',
  WITHDRAWAL = 'Withdrawal',
  DEPOSIT = 'Deposit'
}