import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useBankList } from '@services/queries/card.queries';
import globalStyle from '@styles/globalStyle';
import { EmptyWallet, Paypal } from 'iconsax-react-native';
import React, { useMemo, useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Linking } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

const linkUrl =
  'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=100000&vnp_BankCode=Vietinbank&vnp_Command=pay&vnp_CreateDate=20240318142805&vnp_CurrCode=VND&vnp_ExpireDate=20240318214305&vnp_IpAddr=127.0.0.1&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+don+hang%3A92395709&vnp_OrderType=other&vnp_ReturnUrl=https%3A%2F%2Fwhalehome.up.railway.app%2Fapi%2Fv1%2Fvnpay%2Fpayment-callback%3FpaymentId%3D36&vnp_TmnCode=DMN554JS&vnp_TxnRef=92395709&vnp_Version=2.1.0&vnp_SecureHash=60b87531c2a3ec89474b5d9bbad0a4dc0dc6f1229bb593509d4ba3d89ffdc633aee85a1eab194ae388f712c27c0e65197fd90dc3aee4286afcc0f00e78db1570';

type PaymentMethodType = 'VNPay' | 'Paypal' | 'Momo';
type BankCodeType = {
  imageUrl: string;
  bankCode: string;
};
const ChoosePaymentMethod = () => {
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

  const onCheckOut = () => {
    if (isChoosePayment === 'VNPay') {
      const objectCheckout = {
        bankCode: bankCodeType?.bankCode,
        price: '3000'
      };
      console.log(objectCheckout);
    } else {
      console.log('Payapl');
    }
  };

  const onOpenWeb = async () => {
    const isSupported = await Linking.canOpenURL(linkUrl);
    if (isSupported) {
      await Linking.openURL(linkUrl);
    } else {
      alert('Can not open');
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
          onPress={onOpenWeb}
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
