import { AUTH_ACTION } from '@contexts/types/auth.types';
import userApi from '@services/apis/user.apis';
import { useGetCurrentUser } from '@services/mutations/user.mutations';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../config/firebaseConfig';
import useRootContext from './useRootContext';

export function useAuthentication() {
  const { state, dispatch } = useRootContext();
  const getCurrentUserMutation = useGetCurrentUser();
  const {
    auth: { user, isAuth, accessToken, currentUser }
  } = state;
  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.email) {
          dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
          try {
            const responseAccessToken = await userApi.signInMobile(user.email);
            dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: responseAccessToken.data.data.access_token });
            const response = await userApi.getCurrentUser(responseAccessToken.data.data.access_token);
            dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: response.data.data });
          } catch (error) {
            console.log(error);
          } finally {
            dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
          }
          getCurrentUserMutation.mutate({ accessToken, dispatch });
        }
        dispatch({ type: AUTH_ACTION.SET_USER, payload: user });
        dispatch({ type: AUTH_ACTION.SET_IS_AUTH, payload: true });
      } else {
        // User is signed out
        dispatch({ type: AUTH_ACTION.SET_USER, payload: null });
        dispatch({ type: AUTH_ACTION.SET_IS_AUTH, payload: false });
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, [dispatch]);

  return {
    user,
    isAuth,
    accessToken,
    currentUser
  };
}
