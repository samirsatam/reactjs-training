export default interface Category {
  readonly id: string;
  categoryName: string;
  categoryType: CategoryType;
}

export enum CategoryType {
  INCOME = 'income',
  EXPENSE = 'expense'
}
