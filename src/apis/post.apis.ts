import { SuccessfullResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';
import Post from 'src/models/class/Post.class';

const EndPoint = {
  getAllPost: '/api/v1/post'
};

const postApi = {
  getAllPost: () => {
    return httpClient.get<SuccessfullResponse<Post[]>>(EndPoint.getAllPost);
  }
};

export default postApi;
