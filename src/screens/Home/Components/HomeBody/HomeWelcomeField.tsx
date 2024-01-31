import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { typoColor } from '@constants/appColors';
import TextComponent from '@components/ui/TextComponent';

const HomeWelcomeField = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>
          Hey, <TextComponent content='Johnathan!' styles={styles.nameText} />
        </Text>
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
