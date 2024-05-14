import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import React, { useCallback, useRef, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Location } from 'iconsax-react-native';

export type BANK_INFOR = {
  id: number;
  title: string;
  color: string;
};

const CheckoutScreen = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);
  const snapPoints = ['60%'];

  const handleSnapPress = useCallback((index: number) => {
    alert('Loading....');
    setTimeout(() => {
      sheetRef.current?.snapToIndex(index);
      setIsOpenCard(true);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={[{ paddingHorizontal: 30, flex: 1 }]}>
        {/* Modal */}
        <View style={[styles.wrapperApartment]}>
          <Image
            style={[{ width: 168, height: 140, borderRadius: 18 }]}
            source={require('../../../assets/images/rooms/PN1.jpg')}
          />
          <View style={[styles.wrapperInformationApartment]}>
            <View style={[{ maxWidth: 200 }]}>
              <TextComponent
                content='Sky Dandelions Apartment'
                fontFamily={fontFam.semiBold}
                fontSize={16}
                textColor='#000'
              />
              <View style={[{ flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 5 }]}>
                <Location size='18' color='#000' variant='Bold' />
                <TextComponent content='Cầu Giấy, Hà Nội' textColor='#000' />
              </View>
            </View>
            <View style={[{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }]}>
              <TextComponent content='TYPE:' textColor='#000' />
              <TextComponent
                content='RENT'
                textColor='#000'
                styles={[{ padding: 3, backgroundColor: '#cecece' }]}
                fontFamily={fontFam.bold}
              />
            </View>
          </View>
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        <View>
          <TextComponent content='Payment Detail' fontFamily={fontFam.bold} fontSize={20} />
          <View style={[styles.wrapPaymentDetail]}></View>
        </View>
        <TouchableOpacity style={[styles.buttonCheckout]} onPress={() => handleSnapPress(0)}>
          <TextComponent content='Checkout' fontSize={18} textColor='#000' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        ref={sheetRef}
        enablePanDownToClose={true}
        enableOverDrag={false}
        onClose={() => setIsOpenCard(false)}
        enableContentPanningGesture
        handleStyle={[{ backgroundColor: '#1D1D1D' }]}
        index={-1}
      >
        <BottomSheetView style={[{ backgroundColor: '#1D1D1D', flex: 1, alignItems: 'center' }]}>
          <Image style={[{ marginTop: 10 }]} source={require('../../../assets/CheckOut/Item/Success.png')} />
          <TextComponent content='Your transaction is success' fontSize={30} />
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperApartment: {
    width: '100%',
    height: 156,
    backgroundColor: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  wrapperInformationApartment: {
    height: '100%',
    justifyContent: 'space-between'
  },
  wrapPaymentDetail: {
    marginTop: 10,
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10
  },
  buttonCheckout: {
    marginTop: 10,
    backgroundColor: '#FBA12B',
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 54,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center'
  }
});
export default CheckoutScreen;
