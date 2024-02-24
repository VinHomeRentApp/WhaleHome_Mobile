import Zone from './Zone.class';

class Building {
  id: number;
  createDate: string;
  name: string;
  zone: Zone;

  constructor(id: number, createDate: string, name: string, zone: Zone) {
    this.id = id;
    this.createDate = createDate;
    this.name = name;
    this.zone = zone;
  }
}

export default Building;
