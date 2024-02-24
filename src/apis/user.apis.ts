import { FormSignUpData } from '@screens/Authentication/SignUpScreen/SignUpScreen';
import { RegisterSuccessResponse, SuccessfullResponse } from '../types/response.types';
import { User } from '../types/user.types';

import httpClient from '@utils/httpClient';

const EndPoint = {
  register: 'api/v1/auth/register',
  getUser: 'api/v1/user',
  login: 'api/v1/auth/authenticate'
};

const userApi = {
  getUsers: () => {
    return httpClient.get<SuccessfullResponse<User>>(EndPoint.getUser);
  },
  registerAccount: (body: FormSignUpData) => {
    return httpClient.post<SuccessfullResponse<RegisterSuccessResponse>>(EndPoint.register, body);
  },
  signIn: (email: string, password: string) => {
    return httpClient.post<SuccessfullResponse<RegisterSuccessResponse>>(EndPoint.login, { email, password });
  }
};

export default userApi;
