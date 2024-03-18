import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import globalStyle from '@styles/globalStyle';
import { EmptyWallet, Paypal } from 'iconsax-react-native';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { typoColor } from '@constants/appColors';

type PaymentMethodType = 'VNPay' | 'Paypal' | 'Momo';

const ChoosePaymentMethod = () => {
  const [isChoosePayment, setIsChoosePayment] = useState<PaymentMethodType | null>(null);

  const handlePickerMethod = useMemo(
    () => (name: PaymentMethodType) => {
      return {
        backgroundColor: isChoosePayment === name ? typoColor.yellow1 : '#121212',
        textColor: isChoosePayment === name ? '#000' : '#606060'
      };
    },
    [isChoosePayment]
  );
  const handleChangeMethod = (name: PaymentMethodType) => () => {
    setIsChoosePayment(name);
  };

  return (
    <View style={[globalStyle.container]}>
      <View style={[styles.wrapContainer]}>
        {/* Component Selector */}
        <TouchableOpacity
          style={[styles.wrapComponent, { backgroundColor: handlePickerMethod('Paypal').backgroundColor }]}
          onPress={handleChangeMethod('Paypal')}
        >
          <Paypal size='42' color={handlePickerMethod('Paypal').textColor} variant='Bold' />
          <TextComponent
            fontSize={20}
            textColor={handlePickerMethod('Paypal').textColor}
            fontFamily={fontFam.bold}
            content='Purchase by Paypal'
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.wrapComponent, { backgroundColor: handlePickerMethod('VNPay').backgroundColor }]}
          onPress={handleChangeMethod('VNPay')}
        >
          <EmptyWallet size='42' color={handlePickerMethod('VNPay').textColor} variant='Bold' />
          <TextComponent
            fontSize={20}
            textColor={handlePickerMethod('VNPay').textColor}
            fontFamily={fontFam.bold}
            content='Purchase by VNPay'
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapCheckoutButton]}>
        <TouchableOpacity
          style={[styles.buttonCheckout, { backgroundColor: isChoosePayment === null ? '#404040' : typoColor.yellow1 }]}
          disabled={isChoosePayment === null}
        >
          <TextComponent
            content='Checkout'
            fontSize={20}
            textColor={isChoosePayment === null ? '#212121' : '#000'}
            fontFamily={fontFam.bold}
          />
        </TouchableOpacity>
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
    borderRadius: 10
  }
});

export default ChoosePaymentMethod;
