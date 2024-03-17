import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';
import fontFam from '@constants/fontFamilies';
import { typoColor } from '@constants/appColors';

interface Props {
  content: number | string;
  textColor?: string;
  fontSize?: number;
  flex?: number;
  fontFamily?: string;
  numberOfLines?: number;
  styles?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const { content, flex, fontFamily, fontSize, textColor, styles, numberOfLines } = props;
  return (
    <Text
      ellipsizeMode='tail'
      numberOfLines={numberOfLines}
      style={[
        {
          flex: flex ?? 0,
          fontSize: fontSize ?? 14,
          fontFamily: fontFamily ?? fontFam.regular,
          color: textColor ?? typoColor.white1
        },
        styles
      ]}
    >
      {content}
    </Text>
  );
};

export default TextComponent;
