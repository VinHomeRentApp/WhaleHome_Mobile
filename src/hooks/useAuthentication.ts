import { AUTH_ACTION } from '@contexts/types/auth.types';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../config/firebaseConfig';
import useRootContext from './useRootContext';

export function useAuthentication() {
  const { state, dispatch } = useRootContext();
  const {
    auth: { user, isAuth }
  } = state;
  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);

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
    isAuth
  };
}
