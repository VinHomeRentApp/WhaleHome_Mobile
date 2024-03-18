import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import useRootContext from '@hooks/useRootContext';
import userApi from '@services/apis/user.apis';
import { useMutation } from '@tanstack/react-query';
import { SignUpData } from '@type/form.types';
import { Dispatch } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

export const useRegisterAccount = () => {
  const { dispatch } = useRootContext();
  return useMutation({
    mutationFn: (body: SignUpData) => userApi.registerAccount(body),
    onSuccess: (data) => {
      dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: data.data.data.access_token });
    },
    onError: (error) => Toast.show({ type: ALERT_TYPE.DANGER, title: 'Sign Up Error', textBody: error.message })
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
