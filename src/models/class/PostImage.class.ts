class PostImage {
  id: number;
  createDate: string | Date;
  image_url: string;
  image_alt: string;

  constructor(id: number, createDate: string | Date, image_url: string, image_alt: string) {
    this.id = id;
    this.createDate = createDate;
    this.image_url = image_url;
    this.image_alt = image_alt;
  }
}

export default PostImage;
