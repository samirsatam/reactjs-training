import Address from '../common/Address';

export default interface Payee {
  readonly id: string;
  payeeName: string;
  address: Address;
  categoryId: string;
  image?: string | null;
  motto?: string | null;
  version: number;
  active: boolean;
}