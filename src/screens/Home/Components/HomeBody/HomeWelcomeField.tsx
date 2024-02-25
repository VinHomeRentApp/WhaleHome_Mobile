import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import useRootContext from '@hooks/useRootContext';
import { useGetCurrentUser } from '@services/mutations/user.mutations';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const HomeWelcomeField = () => {
  const { state, dispatch } = useRootContext();
  const { accessToken, currentUser, isLoading } = state.auth;
  const currentUserMutation = useGetCurrentUser();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
      try {
        await currentUserMutation.mutate({ accessToken, dispatch });
      } catch (error) {
        console.error('Error fetching current user:', error);
      } finally {
        dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        {isLoading ? (
          <ActivityIndicator size={30} />
        ) : (
          <Text style={styles.welcomeText}>
            Hey, <TextComponent content={currentUser?.fullName || 'Guest'} styles={styles.nameText} />
          </Text>
        )}

        <TextComponent content="Let's start exploring" styles={styles.exploreText} />
      </View>
    </View>
  );
};

export default HomeWelcomeField;

const styles = StyleSheet.create({
  container: {},
  welcomeTextContainer: {
    paddingHorizontal: 20
  },
  welcomeText: {
    color: typoColor.white1,
    fontSize: 30
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: typoColor.yellow1
  },
  exploreText: {
    color: typoColor.white1,
    fontSize: 30
  }
});
