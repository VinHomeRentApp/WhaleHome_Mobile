import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import useRootContext from '@hooks/useRootContext';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const HomeWelcomeField = () => {
  const { state } = useRootContext();
  const { currentUser, isLoading } = state.auth;

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
