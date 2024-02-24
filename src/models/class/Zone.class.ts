import Area from './Area.class';

class Zone {
  id: number;
  createDate: string;
  name: string;
  area: Area;

  constructor(id: number, createDate: string, name: string, area: Area) {
    this.id = id;
    this.createDate = createDate;
    this.name = name;
    this.area = area;
  }
}

export default Zone;
