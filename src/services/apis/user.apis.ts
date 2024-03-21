import { FormDataUpdate } from '@models/schema/formUpdateProfileSchema';
import { SignUpData } from '@type/form.types';
import { getWithPagination } from '@type/post.types';
import httpClient from '@utils/httpClient';
import UserCurrentResponse from 'src/models/class/User.class';
import { PaginationResponse, RegisterSuccessResponse, SuccessfulResponse } from '../../types/response.types';

const EndPoint = {
  register: 'api/v1/auth/register',
  getUser: 'api/v1/user',
  login: 'api/v1/auth/authenticate',
  loginMobile: 'api/v1/auth/authenticate-mobile',
  getCurrentUser: '/api/v1/auth/getUser',
  getUserWithPagination: '/api/v1/user/get-page',
  updateUserImage: '/api/v1/user/update-image',
  updateUserInfo: '/api/v1/user/update',
  logout: '/api/v1/auth/logout',
  forgotPassword: '/api/v1/auth/forgot-password',
  verifyOTP: '/api/v1/auth/verify',
  resetPassword: '/api/v1/auth/reset-password'
};

const userApi = {
  getUsers: () => {
    return httpClient.get<SuccessfulResponse<UserCurrentResponse[]>>(EndPoint.getUser);
  },
  registerAccount: (body: SignUpData) => {
    return httpClient.post<SuccessfulResponse<RegisterSuccessResponse>>(EndPoint.register, body);
  },
  signIn: (email: string, password: string) => {
    return httpClient.post<SuccessfulResponse<RegisterSuccessResponse>>(EndPoint.login, { email, password });
  },
  signInMobile: (email: string) => {
    return httpClient.post<SuccessfulResponse<RegisterSuccessResponse>>(EndPoint.loginMobile, { email });
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
  },
  forgotPassword: (email: string) => {
    return httpClient.post<SuccessfulResponse<string>>(`${EndPoint.forgotPassword}`, { email });
  },
  verifyOTP: (code: string, email: string) => {
    return httpClient.post<SuccessfulResponse<string>>(`${EndPoint.verifyOTP}`, { code, email });
  },
  resetPassword: (newPassword: string, confirmPassword: string, email: string) => {
    return httpClient.post<SuccessfulResponse<string>>(EndPoint.resetPassword, { newPassword, confirmPassword, email });
  }
};

export default userApi;
