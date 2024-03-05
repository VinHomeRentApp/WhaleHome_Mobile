import postApi from '@services/apis/post.apis';
import { useQuery } from '@tanstack/react-query';
import { getWithPagination, searchPostsParamsTypes } from '@type/post.types';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => postApi.getAllPost()
  });
};

export const usePostWithLimit = (params: getWithPagination) => {
  return useQuery({
    queryKey: ['posts', params],
    queryFn: () => postApi.getPostWithLimit(params)
  });
};

export const useSearchPosts = (params: searchPostsParamsTypes) => {
  return useQuery({
    queryKey: ['search-posts'],
    queryFn: () => postApi.searchPost(params)
  });
};
