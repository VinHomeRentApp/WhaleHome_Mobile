import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TextComponent from '../TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';

interface Props {
  width?: number;
  marginVertical?: number;
}

const SeperateOr = ({ marginVertical = 20, width = 38 }: Props) => {
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
      <TextComponent content='or' textColor={typoColor.gray4} fontFamily={fontFam.semiBold} />
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

export default SeperateOr;
