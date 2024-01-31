import { View, StyleSheet } from 'react-native';
import React from 'react';
import { typoColor } from '@constants/appColors';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';

interface Props {
  counter: number;
  title: string;
}

const ProfileCounter = ({ counter, title }: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.containerItem]}>
        <TextComponent
          content={String(counter)}
          fontSize={14}
          textColor={typoColor.yellow1}
          fontFamily={fontFam.bold}
        />
        <TextComponent content={title} fontSize={10} fontFamily={fontFam.medium} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 102,
    height: 70,
    borderWidth: 1,
    borderColor: typoColor.white1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProfileCounter;
