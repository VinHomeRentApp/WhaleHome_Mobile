import { getWithPagination, searchPostsParamsTypes } from '@type/post.types';
import { PaginationResponse, SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';
import Post from 'src/models/class/Post.class';

const EndPoint = {
  getAllPost: '/api/v1/post',
  getPost: '/api/v1/post/get-page',
  searchPosts: '/api/v1/post/find-by-title'
};

const postApi = {
  getAllPost: () => {
    return httpClient.get<SuccessfulResponse<Post[]>>(EndPoint.getAllPost);
  },
  getPostWithLimit: ({ page, size, field }: getWithPagination) => {
    const currentPage = page || 1;
    const currentSize = size || 5;
    const currentField = field || 'title';
    return httpClient.get<SuccessfulResponse<PaginationResponse<Post[]>>>(
      `${EndPoint.getPost}/${currentPage}?sizePage=${currentSize}&field=${currentField}`
    );
  },
  searchPost: ({ page, size, field, title }: searchPostsParamsTypes) => {
    const currentPage = page || 1;
    const currentSize = size || 5;
    const currentField = field || 'title';
    return httpClient.get<SuccessfulResponse<PaginationResponse<Post[]>>>(
      `${EndPoint.searchPosts}?title=${title}&currentPage=${currentPage}&sizePage=${currentSize}&field=${currentField}`
    );
  }
};

export default postApi;
