import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { Card } from 'iconsax-react-native';

export type CardType = {
  bankCode: string;
  cartNumber: string;
  name: string;
  releaseDate: string;
};

type Props = {
  data: CardType;
  onPress: (item: CardType) => void;
};

const BankLineComponent = ({ data, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.wrappListCardBottomSheet]} onPress={() => onPress(data)}>
      <Card size='24' color='#FFA02A' variant='Bulk' />
      <TextComponent
        content={`${data.bankCode} ${data.cartNumber}`}
        fontSize={16}
        textColor='#000'
        fontFamily={fontFam.bold}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrappListCardBottomSheet: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 10,
    borderBottomWidth: 0.2,
    borderColor: '#cecece'
  }
});

export default BankLineComponent;
