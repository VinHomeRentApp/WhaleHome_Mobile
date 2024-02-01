import { SuccessfullResponse } from '../types/response.types';
import { User } from '../types/user.types';

import httpClient from '@utils/httpClient';

const userApi = {
  getUsers: () => {
    return httpClient.get<SuccessfullResponse<User>>('api/v1/user');
  }
};

export default userApi;
