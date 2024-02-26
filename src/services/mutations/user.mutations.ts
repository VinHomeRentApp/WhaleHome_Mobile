import userApi from '@apis/user.apis';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import { useMutation } from '@tanstack/react-query';
import { FormSignUpData } from '@type/form.types';
import { Dispatch } from 'react';

export const useRegisterAccount = () => {
  return useMutation({
    mutationFn: (body: FormSignUpData) => userApi.registerAccount(body)
  });
};

export const useGetCurrentUser = () => {
  return useMutation({
    mutationFn: async (params: { accessToken: string; dispatch: Dispatch<RootAction> }) => {
      const { accessToken, dispatch } = params;
      const response = await userApi.getCurrentUser(accessToken);
      const user = response.data.data;
      dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: user });
      return user;
    }
  });
};
