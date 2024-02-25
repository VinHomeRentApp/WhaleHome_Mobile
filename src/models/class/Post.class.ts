import Apartment from './Apartment.class';
import PostImage from './PostImage.class';

class Post {
  id: number;
  createDate: string;
  title: string;
  description: string;
  postImages: PostImage[];
  apartment: Apartment;

  constructor(
    id: number,
    createDate: string,
    title: string,
    description: string,
    postImages: PostImage[],
    apartment: Apartment
  ) {
    this.id = id;
    this.createDate = createDate;
    this.title = title;
    this.description = description;
    this.postImages = postImages;
    this.apartment = apartment;
  }
}

export default Post;
