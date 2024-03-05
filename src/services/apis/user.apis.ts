import { FormSignUpData } from '@type/form.types';
import { PaginationResponse, RegisterSuccessResponse, SuccessfulResponse } from '../../types/response.types';

import { getWithPagination } from '@type/post.types';
import httpClient from '@utils/httpClient';
import UserCurrentResponse from 'src/models/class/User.class';
import { FormDataUpdate } from '@screens/Home/EditProfileScreen';

const EndPoint = {
  register: 'api/v1/auth/register',
  getUser: 'api/v1/user',
  login: 'api/v1/auth/authenticate',
  getCurrentUser: '/api/v1/auth/getUser',
  getUserWithPagination: '/api/v1/user/get-page',
  updateUserImage: '/api/v1/user/update-image',
  updateUserInfo: '/api/v1/user/update',
  logout: '/api/v1/auth/logout'
};

const userApi = {
  getUsers: () => {
    return httpClient.get<SuccessfulResponse<UserCurrentResponse[]>>(EndPoint.getUser);
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
  },
  getUserWithPagination: ({ page, size, field }: getWithPagination) => {
    const currentPage = page || 1;
    const currentSize = size || 5;
    const currentField = field || 'email';
    return httpClient.get<SuccessfulResponse<PaginationResponse<UserCurrentResponse[]>>>(
      `${EndPoint.getUserWithPagination}/${currentPage}?sizePage=${currentSize}&field=${currentField}`
    );
  },
  updateUserImage: (formData: FormData, userId: string) => {
    return httpClient.put<SuccessfulResponse<UserCurrentResponse>>(`${EndPoint.updateUserImage}/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Đặt header 'Content-Type' là 'multipart/form-data'
      }
    });
  },
  updateUserInfo: (formDataUpdate: FormDataUpdate, userId: string) => {
    return httpClient.put<SuccessfulResponse<UserCurrentResponse>>(
      `${EndPoint.updateUserInfo}/${userId}`,
      formDataUpdate
    );
  },
  logout: (token: string) => {
    return httpClient.post<SuccessfulResponse<null>>(`${EndPoint.logout}?token=${token}`);
  }
};

export default userApi;
