/* eslint-disable no-unused-vars */
import { User } from 'firebase/auth';

export enum AUTH_ACTION {
  SET_USER = 'SET_USER',
  SET_ERROR = 'SET_ERROR',
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_AUTH_IS_LOADING = 'SET_AUTH_IS_LOADING'
}

export type AuthContextType = {
  user: Partial<User> | null;
  errors: string[];
  isAuth: boolean;
  isLoading: boolean;
};

export const initialAuthState: AuthContextType = {
  user: {},
  errors: [],
  isAuth: false,
  isLoading: false
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

export type AuthAction = SetUserAction | SetErrorAction | SetIsLoading | SetIsAuthAction;
