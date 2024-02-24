class Apartment {
  id: number;
  modifiedBy: string | null;
  createBy: string;
  deleteBy: string | null;
  modifiedDate: string | null;
  createDate: string;
  deleteAt: string | null;
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

  constructor(
    id: number,
    modifiedBy: string | null,
    createBy: string,
    deleteBy: string | null,
    modifiedDate: string | null,
    createDate: string,
    deleteAt: string | null,
    status: boolean,
    name: string,
    description: string,
    living_room: number,
    bed_room: number,
    kitchen: number,
    rest_room: number,
    floor: number,
    area: number,
    air_conditioner: number,
    electric_fan: number,
    television: number,
    electric_stoves: number,
    gas_stoves: number
  ) {
    this.id = id;
    this.modifiedBy = modifiedBy;
    this.createBy = createBy;
    this.deleteBy = deleteBy;
    this.modifiedDate = modifiedDate;
    this.createDate = createDate;
    this.deleteAt = deleteAt;
    this.status = status;
    this.name = name;
    this.description = description;
    this.living_room = living_room;
    this.bed_room = bed_room;
    this.kitchen = kitchen;
    this.rest_room = rest_room;
    this.floor = floor;
    this.area = area;
    this.air_conditioner = air_conditioner;
    this.electric_fan = electric_fan;
    this.television = television;
    this.electric_stoves = electric_stoves;
    this.gas_stoves = gas_stoves;
  }
}

export default Apartment;
