export default interface Category {
  readonly id: string;
  categoryName: string;
  categoryType: CategoryType | any;
}

export enum CategoryType {
  INCOME = 'income',
  EXPENSE = 'expense'
}
