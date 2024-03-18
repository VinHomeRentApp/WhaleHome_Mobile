import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import React from 'react';
import { View } from 'react-native';
import TextComponent from '../TextComponent';

interface Props {
  content: string;
  width?: number;
  marginVertical?: number;
}

const Seperate = ({ marginVertical = 20, width = 38, content }: Props) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5
        }
      ]}
    >
      <View
        style={{
          borderWidth: 0.5,
          borderColor: typoColor.gray4,
          width: `${width}%`,
          marginVertical
        }}
      />
      <TextComponent content={content} textColor={typoColor.gray4} fontFamily={fontFam.semiBold} />
      <View
        style={{
          borderWidth: 0.5,
          borderColor: typoColor.gray4,
          width: '38%',
          marginVertical
        }}
      />
    </View>
  );
};

export default Seperate;
