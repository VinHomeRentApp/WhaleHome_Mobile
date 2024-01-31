import TextComponent from '@components/ui/TextComponent/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import React from 'react';
import { View } from 'react-native';
import NextButtonStyles from './style';

const NextButton = () => {
  return (
    <View style={[NextButtonStyles.container]}>
      <TextComponent content='Next' fontSize={16} fontFamily={fontFam.bold} textColor={typoColor.black1} />
    </View>
  );
};

export default NextButton;
