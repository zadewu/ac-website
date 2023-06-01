export class Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  rating: number;
  type: string;
  picture: string;

  public constructor(id: number, brand: string, name: string, price: number, rating: number, picture: string, type: string) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.picture = picture;
    this.type = type;
  }
}