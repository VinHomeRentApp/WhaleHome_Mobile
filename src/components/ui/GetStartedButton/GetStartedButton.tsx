import React from 'react';
import TextComponent from '../TextComponent';
import fontFam from '@constants/fontFamilies';
import { typoColor } from '@constants/appColors';
import GetStartedButtonStyle from './style';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
}

const GetStartedButton = ({ onPress }: Props) => {
  const handleOnPress = () => {
    onPress && onPress();
  };
  return (
    <TouchableOpacity onPress={handleOnPress} style={[GetStartedButtonStyle.container]}>
      <TextComponent content='Continue' fontSize={16} fontFamily={fontFam.bold} textColor={typoColor.black1} />
    </TouchableOpacity>
  );
};

export default GetStartedButton;
