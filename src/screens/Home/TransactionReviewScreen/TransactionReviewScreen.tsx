import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import { ArrowDown2, Card, ClipboardText, Location } from 'iconsax-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { typoColor } from '@constants/appColors';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { useCardUser } from '@services/queries/card.queries';
import useRootContext from '@hooks/useRootContext';
import BankLineComponent, { CardType } from '@screens/Home/PaymentMethodScreen/BankLineComponent/BankLineComponent';
type PeriodMonth = 2 | 4 | 6;
// const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const TransactionReviewScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const {
    state: {
      auth: { currentUser }
    }
  } = useRootContext();
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);
  const [cardInfomation, setCardInformation] = useState<CardType>();
  const [periodMonth, setPeriodMonth] = useState<PeriodMonth>(2);

  const [isBuy, _] = useState<boolean>(false);
  const snapPoints = ['30%'];

  const cardUserQuery = useCardUser(currentUser.id as number);

  useEffect(() => {
    if (cardUserQuery.isSuccess) {
      setCardInformation(cardUserQuery.data.data.data[0]);
    }
  }, [cardUserQuery.isSuccess]);

  const handleChangePeriodMonth = (months: PeriodMonth) => {
    setPeriodMonth(months);
    console.log(months);
  };

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpenCard(true);
  }, []);

  const handleChangePaymentMethod = (data: CardType) => {
    setCardInformation(data);
    sheetRef.current?.close();
  };

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ScrollView style={[{ paddingHorizontal: 30, flex: 1 }]}>
        {/* Modal */}
        <View style={[styles.wrapperApartment]}>
          <Image
            style={[{ width: 168, height: 140, borderRadius: 18 }]}
            source={require('../../../assets/images/rooms/PN1.jpg')}
          />
          <View style={[styles.wrapperInformationApartment]}>
            <View>
              <TextComponent
                styles={{ maxWidth: '95%' }}
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
        {/* If customer BUY then no Period Month */}
        {!isBuy && (
          <View style={[styles.wrapperPeriod]}>
            <TextComponent content='Period' fontFamily={fontFam.bold} fontSize={21} />
            <View style={[styles.wrapperSelectorMonths]}>
              <Pressable
                onPress={() => handleChangePeriodMonth(2)}
                style={[styles.periodMonth, periodMonth === 2 && { backgroundColor: '#FFA02A' }]}
              >
                <TextComponent content='2 Months' />
              </Pressable>
              <Pressable
                onPress={() => handleChangePeriodMonth(4)}
                style={[styles.periodMonth, periodMonth === 4 && { backgroundColor: '#FFA02A' }]}
              >
                <TextComponent content='4 Months' />
              </Pressable>
              <Pressable
                onPress={() => handleChangePeriodMonth(6)}
                style={[styles.periodMonth, periodMonth === 6 && { backgroundColor: '#FFA02A' }]}
              >
                <TextComponent content='6 Months' />
              </Pressable>
            </View>
          </View>
        )}
        <View style={[{ marginVertical: 10 }]}></View>

        <View style={[{ width: '100%' }]}>
          <TextComponent content='Note for Owner' fontFamily={fontFam.bold} fontSize={21} />
          <View style={[{ marginVertical: 10 }]}></View>
          <View style={[styles.wrapperInputNote]}>
            <TextInput
              style={[styles.textInputNote]}
              placeholderTextColor={'#252B5C'}
              placeholder='Please, clean before I go there'
            />
            <ClipboardText size='30' color='#252B5C' />
          </View>
        </View>
        <View style={[{ marginVertical: 10 }]}></View>

        <View>
          <TextComponent content='Payment Method' fontFamily={fontFam.bold} fontSize={21} />
          <View style={[{ marginVertical: 10 }]}>
            <TextComponent
              content='Choose your method payment'
              fontFamily={fontFam.bold}
              textColor={typoColor.yellow2}
              fontSize={14}
            />
            <TouchableOpacity style={[styles.selectCard]} onPress={() => handleSnapPress(0)}>
              <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                <Card size='24' color='#FFA02A' variant='Bulk' />
                <TextComponent
                  content={`${cardInfomation?.bankCode} ${cardInfomation?.cartNumber}`}
                  styles={[styles.textColorSelectCard]}
                />
              </View>
              <ArrowDown2 size='23' color='#FF8A65' variant='Bold' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.bankCard, { borderWidth: 1, borderColor: '#fff' }]}>
          <View style={[{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }]}>
            <Image
              style={[{ width: '10%', height: 26.32 }]}
              source={require('../../../assets/bankCard/ChipBank.png')}
            />
            <TextComponent content={cardInfomation?.bankCode as string} fontSize={20} fontFamily={fontFam.extraBold} />
          </View>
          <TextComponent content={cardInfomation?.cartNumber as string} fontSize={20} />
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
            <TextComponent content={cardInfomation?.name as string} fontFamily={fontFam.semiBold} fontSize={20} />
            <View style={[{ alignItems: 'flex-end' }]}>
              <TextComponent content='EXP DATE' fontFamily={fontFam.semiBold} fontSize={15} />
              <TextComponent content='02/03' />
            </View>
          </View>
        </View>
        <TouchableOpacity style={[styles.buttonNext]} onPress={() => navigation.navigate('CheckOutScreen')}>
          <TextComponent content='Next' fontSize={18} textColor='#000' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
      </ScrollView>

      <BottomSheet
        snapPoints={snapPoints}
        ref={sheetRef}
        enablePanDownToClose={true}
        enableOverDrag={false}
        onClose={() => setIsOpenCard(false)}
        enableContentPanningGesture
        index={-1}
      >
        <BottomSheetView style={[styles.wrapBottomSheet]}>
          <TextComponent content='List payment methods' textColor='#000' fontFamily={fontFam.bold} fontSize={16} />
          <FlatList
            style={[{ width: '100%', paddingHorizontal: 10, marginVertical: 30 }]}
            data={cardUserQuery.data?.data.data}
            renderItem={({ item }) => <BankLineComponent onPress={handleChangePaymentMethod} data={item} />}
          />
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
    justifyContent: 'space-between',
    width: '45%'
  },
  wrapperPeriod: {
    gap: 10
  },
  wrapperSelectorMonths: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  periodMonth: {
    width: '30%',
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5D5D5E'
  },
  wrapperInputNote: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textInputNote: {},
  buttonNext: {
    width: 190,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFA02A',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
  },
  wrapBankCard: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  selectCard: {
    width: '100%',
    height: 40,
    borderRadius: 11,
    marginVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textColorSelectCard: {
    color: '#FFA02A',
    fontFamily: fontFam.bold,
    marginHorizontal: 15
  },
  wrapBottomSheet: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  wrappListCardBottomSheet: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 10,
    borderBottomWidth: 0.2,
    borderColor: '#cecece'
  },
  bankCard: {
    width: '100%',
    height: 210,
    borderRadius: 20,
    padding: 30,
    justifyContent: 'space-between'
  }
});
export default TransactionReviewScreen;
