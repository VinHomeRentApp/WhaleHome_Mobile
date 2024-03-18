import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import { Paypal } from 'iconsax-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type PaymentMethodType = 'VNPay' | 'Paypal' | 'Momo';

const ChoosePaymentMethod = () => {
  const [isChoosePayment, setIsChoosePayment] = useState<boolean>(false);

  const handleChangeChoosePayment = () => {
    setIsChoosePayment((prevState) => !prevState);
  };

  useEffect(() => {
    return () => {
      setIsChoosePayment(false);
    };
  }, []);

  return (
    <View style={[globalStyle.container]}>
      <View style={[styles.wrapContainer]}>
        {/* Component Selector */}
        <TouchableOpacity
          onPress={handleChangeChoosePayment}
          style={[styles.wrapComponent, isChoosePayment && { backgroundColor: typoColor.yellow1 }]}
        >
          <Paypal size='42' color={isChoosePayment ? '#000' : '#606060'} variant='Bold' />
          <TextComponent
            fontSize={20}
            textColor={isChoosePayment ? '#000' : '#606060'}
            fontFamily={fontFam.bold}
            content='Purchase by Paypal'
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapCheckoutButton]}>
        <View style={[styles.buttonCheckout, !isChoosePayment && { backgroundColor: '#404040' }]}>
          <TextComponent
            content='Checkout'
            fontSize={20}
            textColor={!isChoosePayment ? '#606060' : '#000'}
            fontFamily={fontFam.bold}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    padding: 20,
    gap: 10,
    flex: 0.9
  },
  wrapComponent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: 14,
    borderColor: '#404040'
  },
  wrapCheckoutButton: {
    flex: 0.1,
    alignItems: 'center'
  },
  buttonCheckout: {
    width: '90%',
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: typoColor.yellow1
  }
});

export default ChoosePaymentMethod;
