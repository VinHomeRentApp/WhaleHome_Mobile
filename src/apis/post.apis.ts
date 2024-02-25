import { getPostLimitParams } from '@type/post.types';
import { PaginationResponse, SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';
import Post from 'src/models/class/Post.class';

const EndPoint = {
  getAllPost: '/api/v1/post',
  getPost: '/api/v1/post/get-page'
};

const postApi = {
  getAllPost: () => {
    return httpClient.get<SuccessfulResponse<Post[]>>(EndPoint.getAllPost);
  },
  getPostWithLimit: ({ page, size, field }: getPostLimitParams) => {
    return httpClient.get<SuccessfulResponse<PaginationResponse<Post[]>>>(
      `${EndPoint.getPost}/${page}?sizePage=${size}&field=${field}`
    );
  }
};

export default postApi;
