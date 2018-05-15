import Address from "../common/Address";

export default interface Person {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string | Date;
  readonly id: string;
  version: number;
  address: Address;
}

