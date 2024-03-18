type Area = {
  id: number;
  createDate: string;
  status: boolean;
  name: string;
};

type Zone = {
  id: number;
  createDate: string;
  status: boolean;
  name: string;
  area: Area;
};

type Building = {
  id: number;
  createDate: string;
  status: boolean;
  name: string;
  zone: Zone;
};

type ApartmentClass = {
  id: number;
  createDate: null;
  status: boolean;
  name: string;
  rent_price: number;
  buy_price: number;
  width: number;
  length: number;
  height: number;
};

export type Apartment = {
  id: number;
  createDate: null;
  status: boolean;
  name: string;
  description: string;
  living_room: number;
  bed_room: number;
  kitchen: number;
  rest_room: number;
  floor: number;
  area: number;
  air_conditioner: number;
  electric_fan: number;
  television: number;
  electric_stoves: number;
  gas_stoves: number;
  apartmentClass: ApartmentClass;
  building: Building;
};

export type Appointment = {
  statusAppointment: string;
  dateTime: string;
  time: string;
  apartment: Apartment;
  note: string;
  address: string;
  userAddress: string;
  userPhone: string;
  userName: string;
  userImage: string;
};
