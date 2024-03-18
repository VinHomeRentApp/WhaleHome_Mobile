import { User } from 'firebase/auth';
import { Apartment } from './appointment.type';

export type Contract = {
  id: number;
  apartmentName: string;
  contractStatus: boolean;
  totalPrice: number;
  landlordName: string;
  renterName: string;
  durationMonth: number;
  address: string;
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
  landlord: User;
  renter: User;
  urlContract: null;
  statusOfPayment: boolean;
};

export type ListContract = Contract[];
