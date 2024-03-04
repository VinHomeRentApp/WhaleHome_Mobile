import userApi from '@services/apis/user.apis';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../config/firebaseConfig';
import useRootContext from './useRootContext';

export function useAuthentication() {
  const { state, dispatch } = useRootContext();
  const {
    auth: { user, isAuth, accessToken, currentUser }
  } = state;
  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.email) {
          const signInResponse = await userApi.signIn(user.email, '123456');
          dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: signInResponse.data.data.access_token });
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
