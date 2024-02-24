import userApi from '@apis/user.apis';
import { FormSignUpData } from '@screens/Authentication/SignUpScreen/SignUpScreen';
import { useMutation } from '@tanstack/react-query';

export const useRegisterAccount = () => {
  return useMutation({
    mutationFn: (body: FormSignUpData) => userApi.registerAccount(body)
  });
};
