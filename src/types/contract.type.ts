import { User } from 'firebase/auth';
import { Apartment } from './appointment.type';
import { UserContract } from './user.types';

export type Contract = {
  id: number;
  apartmentName: string;
  contractStatus: boolean;
  totalPrice: number;
  landlordName: string;
  renterName: string;
  durationMonth: number;
  address: string;
  urlFile: string;
};

export type ContractDetail = {
  createDateContract: string;
  expireDateContract: string;
  durationMonth: number;
  totalPrice: number;
  pricePerMonth: number;
  areaName: string;
  zoneName: string;
  buildingName: string;
  apartment: Apartment;
  landlord: UserContract;
  renter: UserContract;
  urlContract: string;
  statusOfPayment: boolean;
  bank: {
    name: string;
    code: string;
    address: string;
  };
};

export type ListContract = Contract[];
