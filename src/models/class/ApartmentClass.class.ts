class ApartmentClass {
  id: number;
  modifiedBy: string | null;
  createBy: string | null;
  deleteBy: string | null;
  modifiedDate: string | null;
  createDate: string | null;
  deleteAt: string | null;
  status: boolean;
  name: string;
  rent_price: number;
  width: number;
  length: number;
  height: number;

  constructor(
    id: number,
    modifiedBy: string | null,
    createBy: string | null,
    deleteBy: string | null,
    modifiedDate: string | null,
    createDate: string | null,
    deleteAt: string | null,
    status: boolean,
    name: string,
    rent_price: number,
    width: number,
    length: number,
    height: number
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
    this.rent_price = rent_price;
    this.width = width;
    this.length = length;
    this.height = height;
  }
}

export default ApartmentClass;
