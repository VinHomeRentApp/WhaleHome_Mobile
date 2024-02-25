class ApartmentClass {
  id: number;
  createDate: string | null;
  name: string;
  rent_price: number;
  buy_price: number;
  width: number;
  length: number;
  height: number;

  constructor(
    id: number,
    createDate: string | null,
    name: string,
    rent_price: number,
    buy_price: number,
    width: number,
    length: number,
    height: number
  ) {
    this.id = id;
    this.createDate = createDate;
    this.name = name;
    this.rent_price = rent_price;
    this.buy_price = buy_price;
    this.width = width;
    this.length = length;
    this.height = height;
  }
}

export default ApartmentClass;
