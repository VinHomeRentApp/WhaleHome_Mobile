import ApartmentClass from './ApartmentClass.class';
import Building from './Building.class';

class Apartment {
  id: number;
  createDate: string;
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

  constructor(
    id: number,
    createDate: string,
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
    gas_stoves: number,
    apartmentClass: ApartmentClass,
    building: Building
  ) {
    this.id = id;
    this.createDate = createDate;
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
    this.apartmentClass = apartmentClass;
    this.building = building;
  }
}

export default Apartment;
