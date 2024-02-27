import { FormSignUpData } from '@type/form.types';
import { RegisterSuccessResponse, SuccessfulResponse } from '../types/response.types';
import { User } from '../types/user.types';

import httpClient from '@utils/httpClient';
import UserCurrentResponse from 'src/models/class/User.class';

const EndPoint = {
  register: 'api/v1/auth/register',
  getUser: 'api/v1/user',
  login: 'api/v1/auth/authenticate',
  getCurrentUser: '/api/v1/auth/getUser'
};

const userApi = {
  getUsers: () => {
    return httpClient.get<SuccessfulResponse<User>>(EndPoint.getUser);
  },
  registerAccount: (body: FormSignUpData) => {
    return httpClient.post<SuccessfulResponse<RegisterSuccessResponse>>(EndPoint.register, body);
  },
  signIn: (email: string, password: string) => {
    return httpClient.post<SuccessfulResponse<RegisterSuccessResponse>>(EndPoint.login, { email, password });
  },
  getCurrentUser: (accessToken: string) => {
    return httpClient.post<SuccessfulResponse<UserCurrentResponse>>(EndPoint.getCurrentUser, {
      access_token: accessToken
    });
  }
};

export default userApi;
