import userApi from '@services/apis/user.apis';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import useRootContext from '@hooks/useRootContext';
import { useMutation } from '@tanstack/react-query';
import { FormSignUpData } from '@type/form.types';
import { Dispatch } from 'react';

export const useRegisterAccount = () => {
  const { dispatch } = useRootContext();
  return useMutation({
    mutationFn: (body: FormSignUpData) => userApi.registerAccount(body),
    onSuccess: (data) => {
      dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: data.data.data.access_token });
    }
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

interface UpdateUserImageParams {
  formData: FormData;
  userId: string;
}

export const useUpdateUserImage = () => {
  return useMutation({
    mutationFn: async ({ formData, userId }: UpdateUserImageParams) => {
      return userApi.updateUserImage(formData, userId);
    }
  });
};
