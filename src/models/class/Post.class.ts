import Apartment from './Apartment.class';

class Post {
  id: number;
  createDate: string;
  title: string;
  description: string;
  apartment: Apartment;

  constructor(id: number, createDate: string, title: string, description: string, apartment: Apartment) {
    this.id = id;
    this.createDate = createDate;
    this.title = title;
    this.description = description;
    this.apartment = apartment;
  }
}

export default Post;
