import postApi from '@apis/post.apis';
import { THREE_MINUTES } from '@constants/appConstants';
import { useQuery } from '@tanstack/react-query';
import { getPostLimitParams } from '@type/post.types';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => postApi.getAllPost(),
    staleTime: THREE_MINUTES
  });
};

export const usePostWithLimit = ({ page, size, field }: getPostLimitParams) => {
  return useQuery({
    queryKey: ['posts', { page, size, field }],
    queryFn: () => postApi.getPostWithLimit({ page, size, field })
  });
};
