export interface User {
  id: number;
  modifiedBy: null;
  createBy: string;
  deleteBy: null;
  modifiedDate: null;
  createDate: string;
  deleteAt: null;
  status: boolean;
  email: string;
  password: string;
  phone: string;
  fullName: string;
  dateOfBirth: string;
  image: null;
  gender: string;
  address: string;
  verified: boolean;
  identityCard: string;
  identityCardDateProvide: string;
  identityCardAddressProvide: string;
}

export type UserContract = {
  id: number;
  email: string;
  password: string;
  phone: string;
  fullName: string;
  dateOfBirth: string;
  status: boolean;
  identityCard: string;
  identityCardDateProvide: string;
  identityCardAddressProvide: string;
  image: string;
  gender: string;
  address: string;
  role: string;
  enabled: boolean;
};
