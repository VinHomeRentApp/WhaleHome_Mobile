import postApi from '@apis/post.apis';
import { THREE_MINUTES } from '@constants/appConstants';
import { useQuery } from '@tanstack/react-query';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => postApi.getAllPost(),
    staleTime: THREE_MINUTES
  });
};
