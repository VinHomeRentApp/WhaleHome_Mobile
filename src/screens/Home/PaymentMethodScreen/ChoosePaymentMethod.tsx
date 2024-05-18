import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { checkoutMethod } from '@services/apis/checkout.api';
import { useBankList } from '@services/queries/card.queries';
import globalStyle from '@styles/globalStyle';
import { ChoosePaymentMethodProps } from '@type/navigation.types';
import { EmptyWallet, Paypal } from 'iconsax-react-native';
import React, { useMemo, useState } from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

type PaymentMethodType = 'VNPay' | 'Paypal' | 'Momo';
const ChoosePaymentMethod = ({ route, navigation }: ChoosePaymentMethodProps) => {
  const {
    state: {
      auth: { listIdPayment }
    }
  } = useRootContext();
  const [isChoosePayment, setIsChoosePayment] = useState<PaymentMethodType | null>(null);
  const [bankCodeType, setBankCodeType] = useState<string>('');
  const bankListQuery = useBankList();
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

  const handleSelectedColor = useMemo(
    () => (bankCode: string) => {
      return {
        backgroundColor: bankCodeType === bankCode ? typoColor.yellow1 : '#101010',
        textColor: bankCodeType === bankCode ? '#000' : '#ffffff'
      };
    },
    [bankCodeType]
  );

  const handleSetBankCode = (bankCode: string) => {
    setBankCodeType(bankCode);
  };

  const handleCheckoutWithMethod = async () => {
    if (isChoosePayment === 'Paypal') {
      try {
        const paymentData = {
          paymentId: route.params.paymentId,
          amount: route.params.price
        };
        const responseLink = await checkoutMethod.checkoutByPaypal(paymentData);
        const link_payment_paypal = responseLink.data.data;
        const isOpenUrl = await Linking.canOpenURL(link_payment_paypal);
        if (isOpenUrl) {
          await Linking.openURL(link_payment_paypal);
          navigation.navigate('HomeScreen');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      if (bankCodeType) {
        try {
          const paymentData = {
            paymentId: route.params.paymentId,
            price: route.params.price,
            bankCode: bankCodeType
          };
          console.log(paymentData);
          const responseLink = await checkoutMethod.checkoutByVNPay(paymentData);
          const link_payment_paypal = responseLink.data.data;
          const isOpenUrl = await Linking.canOpenURL(link_payment_paypal);

          if (isOpenUrl) {
            await Linking.openURL(link_payment_paypal);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <View style={[globalStyle.container]}>
      <LoadingOverlay isLoading={bankListQuery.isLoading} message='Loading' />
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
          style={[
            styles.wrapComponent,
            { justifyContent: 'space-between' },
            { backgroundColor: handlePickerMethod('VNPay').backgroundColor }
          ]}
          onPress={handleChangeMethod('VNPay')}
        >
          <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 20 }]}>
            <EmptyWallet size='42' color={handlePickerMethod('VNPay').textColor} variant='Bold' />
            <TextComponent
              fontSize={20}
              textColor={handlePickerMethod('VNPay').textColor}
              fontFamily={fontFam.bold}
              content='Purchase by VNPay'
            />
          </View>
        </TouchableOpacity>
        {isChoosePayment === 'VNPay' && (
          <Animated.View
            entering={FadeInUp.withInitialValues({ opacity: 1, transform: [{ translateY: -10 }] })}
            exiting={FadeOutUp}
            style={[styles.wrapSelectionBank]}
          >
            <TextComponent content='Choose these payments below' fontFamily={fontFam.semiBold} textColor='#606060' />
            <View style={[styles.wrapChooseBank]}>
              {bankListQuery.data?.data.data.map((item) => (
                <TouchableOpacity
                  onPress={() => handleSetBankCode(item.bankCode)}
                  style={[
                    styles.bankComponent,
                    { backgroundColor: handleSelectedColor(item.bankCode).backgroundColor }
                  ]}
                  key={item.id}
                >
                  <Image
                    source={{ uri: item.url_img }}
                    style={[
                      styles.wrapImage,
                      { width: item.bankCode === 'NCB' ? 45 : 41, height: item.bankCode === 'NCB' ? 45 : 41 }
                    ]}
                  />
                  <TextComponent
                    content={item.bankCode}
                    fontSize={12}
                    fontFamily={fontFam.bold}
                    textColor={handleSelectedColor(item.bankCode).textColor}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        )}
      </View>
      <View style={[styles.wrapCheckoutButton]}>
        <TouchableOpacity
          onPress={handleCheckoutWithMethod}
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
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: 14,
    borderColor: '#404040'
  },
  wrapCheckoutButton: {
    flex: 0.1,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonCheckout: {
    width: '80%',
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14
  },
  wrapSelectionBank: {
    borderWidth: 0.5,
    borderColor: '#1e1e1e',
    padding: 10,
    backgroundColor: '#101010',
    borderRadius: 12,
    gap: 10
  },
  wrapChooseBank: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  bankComponent: {
    borderWidth: 1.5,
    borderColor: '#1e1e1e',
    width: '31%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 15
  },
  wrapImage: {
    borderRadius: 60
  }
});

export default ChoosePaymentMethod;
