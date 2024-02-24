import { FormSignUpData } from '@screens/Authentication/SignUpScreen/SignUpScreen';
import { ResigsterSuccessResponse, SuccessfullResponse } from '../types/response.types';
import { User } from '../types/user.types';

import httpClient from '@utils/httpClient';

const EndPoint = {
  register: 'api/v1/auth/register',
  getUser: 'api/v1/user'
};

const userApi = {
  getUsers: () => {
    return httpClient.get<SuccessfullResponse<User>>(EndPoint.getUser);
  },
  registerAccount: (body: FormSignUpData) => {
    return httpClient.post<SuccessfullResponse<ResigsterSuccessResponse>>(EndPoint.register, body);
  }
};

export default userApi;
