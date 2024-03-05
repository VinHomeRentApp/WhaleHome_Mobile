/* eslint-disable no-unused-vars */

import { User } from 'firebase/auth';
import UserCurrentResponse from 'src/models/class/User.class';

export enum AUTH_ACTION {
  SET_USER = 'SET_USER',
  SET_ERROR = 'SET_ERROR',
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_AUTH_IS_LOADING = 'SET_AUTH_IS_LOADING',
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SET_IS_LOADING_SENT_EMAIL = 'SET_IS_LOADING_SENT_EMAIL'
}

export type AuthContextType = {
  user: Partial<User> | null;
  errors: string[];
  isAuth: boolean;
  isLoading: boolean;
  accessToken: string;
  currentUser: Partial<UserCurrentResponse>;
  isLoadingSendEmail: boolean;
};

export const initialAuthState: AuthContextType = {
  user: {},
  errors: [],
  isAuth: false,
  isLoading: false,
  isLoadingSendEmail: false,
  accessToken: '',
  currentUser: {}
};

export type SetUserAction = {
  type: AUTH_ACTION.SET_USER;
  payload: User | null;
};

export type SetErrorAction = {
  type: AUTH_ACTION.SET_ERROR;
  payload: string[];
};

export type SetIsAuthAction = {
  type: AUTH_ACTION.SET_IS_AUTH;
  payload: boolean;
};

export type SetIsLoading = {
  type: AUTH_ACTION.SET_AUTH_IS_LOADING;
  payload: boolean;
};

export type SetAccessToken = {
  type: AUTH_ACTION.SET_ACCESS_TOKEN;
  payload: string;
};

export type SetCurrentUser = {
  type: AUTH_ACTION.SET_CURRENT_USER;
  payload: UserCurrentResponse;
};

export type SetIsLoadingSentEmailAction = {
  type: AUTH_ACTION.SET_IS_LOADING_SENT_EMAIL;
  payload: boolean;
};

export type AuthAction =
  | SetUserAction
  | SetErrorAction
  | SetIsLoading
  | SetIsAuthAction
  | SetAccessToken
  | SetCurrentUser
  | SetIsLoadingSentEmailAction;
