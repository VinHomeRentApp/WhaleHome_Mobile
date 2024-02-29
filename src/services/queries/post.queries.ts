import postApi from '@apis/post.apis';
import { useQuery } from '@tanstack/react-query';
import { getWithPagination } from '@type/post.types';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => postApi.getAllPost()
  });
};

export const usePostWithLimit = ({ page, size, field }: getWithPagination) => {
  return useQuery({
    queryKey: ['posts', { page, size, field }],
    queryFn: () => postApi.getPostWithLimit({ page, size, field })
  });
};
