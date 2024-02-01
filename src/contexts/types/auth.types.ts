import { User } from 'firebase/auth';

export enum AUTH_ACTION {
  SET_USER = 'SET_USER',
  SET_ERROR = 'SET_ERROR',
  SET_AUTH_IS_LOADING = 'SET_AUTH_IS_LOADING'
}

export type AuthContextType = {
  User: Partial<User>;
  errors: string[];
  isLoading: boolean;
};

export const initialAuthState: AuthContextType = {
  User: {},
  errors: [],
  isLoading: false
};

export type SetUserAction = {
  type: AUTH_ACTION.SET_USER;
  payload: User;
};

export type SetErrorAction = {
  type: AUTH_ACTION.SET_ERROR;
  payload: string[];
};

export type SetIsLoading = {
  type: AUTH_ACTION.SET_AUTH_IS_LOADING;
  payload: boolean;
};

export type AuthAction = SetUserAction | SetErrorAction | SetIsLoading;
