import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { checkoutMethod } from '@services/apis/checkout.api';
import { useBankList } from '@services/queries/card.queries';
import globalStyle from '@styles/globalStyle';
import { ChoosePaymentMethodProps } from '@type/navigation.types';
import { EmptyWallet, Paypal } from 'iconsax-react-native';
import React, { useMemo, useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Linking } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

type PaymentMethodType = 'VNPay' | 'Paypal' | 'Momo';
type BankCodeType = {
  imageUrl: string;
  bankCode: string;
};
const ChoosePaymentMethod = ({ route, navigation }: ChoosePaymentMethodProps) => {
  const [isChoosePayment, setIsChoosePayment] = useState<PaymentMethodType | null>(null);
  const [bankCodeType, setBankCodeType] = useState<BankCodeType | null>(null);

  const bankListQuery = useBankList();

  const isShowSelection = useMemo(() => {
    return isChoosePayment === 'VNPay' ? true : false;
  }, [isChoosePayment]);

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

  const onCheckOut = async () => {
    if (isChoosePayment === 'VNPay') {
      const objectCheckout = {
        bankCode: bankCodeType?.bankCode as string,
        price: route.params.price,
        paymentId: route.params.paymentId
      };
      try {
        const repsonse = await checkoutMethod.checkoutByVNPay(objectCheckout);
        const link_url = repsonse.data.data;
        const isSupported = await Linking.canOpenURL(link_url);
        if (isSupported) {
          console.log(objectCheckout);
          await Linking.openURL(link_url);
          navigation.navigate('BillingScreen');
        } else {
          alert('Can not open');
        }
      } catch (error) {
        alert(error);
      }
      console.log(objectCheckout);
    } else {
      const bodyPaypal = {
        amount: route.params.price,
        paymentId: route.params.paymentId
      };
      try {
        const reponse = await checkoutMethod.checkoutByPaypal(bodyPaypal);
        const Link_Checkout = reponse.data.data;
        const isSupported = await Linking.canOpenURL(Link_Checkout);
        if (isSupported) {
          await Linking.openURL(Link_Checkout);
          navigation.navigate('BillingScreen');
        } else {
          alert('Can not open');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSetBankCode = (name: BankCodeType) => {
    setBankCodeType(name);
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
          {isChoosePayment === 'VNPay' && bankCodeType !== null && (
            <Image style={[styles.wrapImage]} source={{ uri: bankCodeType.imageUrl }} />
          )}
        </TouchableOpacity>
        {isShowSelection && (
          <Animated.View entering={FadeInUp} exiting={FadeOutUp} style={[styles.wrapSelectionBank]}>
            <FlatList
              data={bankListQuery.data?.data.data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.selectionBank]}
                  onPress={() => handleSetBankCode({ bankCode: item.bankCode, imageUrl: item.url_img })}
                >
                  <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 20 }]}>
                    <View style={[styles.wrapPaddingImage]}>
                      <Image style={[styles.wrapImage]} source={{ uri: item.url_img }} />
                    </View>
                    <View>
                      <TextComponent content={item.bankCode} fontSize={18} fontFamily={fontFam.bold} textColor='#000' />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        )}
      </View>
      <View style={[styles.wrapCheckoutButton]}>
        <TouchableOpacity
          onPress={onCheckOut}
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
  },
  wrapSelectionBank: {
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingHorizontal: 10
  },
  selectionBank: {
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wrapImage: {
    width: 40,
    height: 40
  },
  wrapPaddingImage: {
    padding: 5,
    borderRadius: 12
  }
});

export default ChoosePaymentMethod;
