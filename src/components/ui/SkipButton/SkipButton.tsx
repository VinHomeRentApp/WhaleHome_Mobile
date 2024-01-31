/* eslint-disable @typescript-eslint/no-explicit-any */
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import TextComponent from '@components/ui/TextComponent/TextComponent';
import SkipButtonStyles from './style';

interface Props {
  onPress: () => void;
}

const SkipButton = ({ onPress }: Props) => {
  const handleSkip = () => {
    onPress && onPress();
  };

  return (
    <TouchableOpacity onPress={handleSkip} style={[SkipButtonStyles.container]}>
      <TextComponent content='Skip' textColor={typoColor.black1} fontFamily={fontFam.bold} />
    </TouchableOpacity>
  );
};

export default SkipButton;
