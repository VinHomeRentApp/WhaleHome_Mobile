import userApi from '@services/apis/user.apis';
import { THREE_MINUTES } from '@constants/appConstants';
import { useQuery } from '@tanstack/react-query';
import { getWithPagination } from '@type/post.types';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
    staleTime: THREE_MINUTES
  });
};

export const useUsersWithPagination = ({ field, page, size }: getWithPagination) => {
  return useQuery({
    queryKey: ['users', { page, size, field }],
    queryFn: () => userApi.getUserWithPagination({ field, page, size }),
    staleTime: THREE_MINUTES
  });
};
