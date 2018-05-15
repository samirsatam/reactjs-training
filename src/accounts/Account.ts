export default interface Account {
  readonly id: string;
  personId: string;
  startingBalance: number;
  accountType: string;
}