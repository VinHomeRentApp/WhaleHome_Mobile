import { View } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'iconsax-react-native';
import PrevButtonStyle from './style';

const ArrowIconSize = 20;
const ArrowIconColor = '#03053D';
const ArrowIconVariant = 'Broken';

const PrevButton = () => {
  return (
    <View style={[PrevButtonStyle.container]}>
      <ArrowLeft size={ArrowIconSize} color={ArrowIconColor} variant={ArrowIconVariant} />
    </View>
  );
};

export default PrevButton;
