import postApi from '@apis/post.apis';
import { useQuery } from '@tanstack/react-query';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => postApi.getAllPost(),
    staleTime: 3 * 1000 * 60
  });
};
