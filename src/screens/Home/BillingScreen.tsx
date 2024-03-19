import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGetUnpaidBill, useGetUpcomingBill } from '@services/queries/bill.queries';
import globalStyle from '@styles/globalStyle';
import { Bill } from '@type/bill.type';
import { MainStackParamList } from '@type/navigation.types';
import { addPostfixToNumber, getMonthNameByNum } from '@utils/helper';
import { Add, ArrowRight2, ArrowRotateRight, Calendar, Trash } from 'iconsax-react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import NotFound from './Components/NotFound/NotFound';

type FilterType = 'isAllBill' | 'isNotAllBill';

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const BillingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [totalPriceToCheckout, setTotalPriceToCheckout] = useState<number>(0);
  const [paymentBillToCheckout, setPaymentBillToCheckout] = useState<number | null>(null);
  const [isAllBill, setIsAllBill] = useState<FilterType>('isNotAllBill');
  const [listBillFilter, setListBillFilter] = useState<Bill[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const {
    state: {
      auth: {
        currentUser: { id }
      }
    }
  } = useRootContext();
  const billUpcomingQuery = useGetUpcomingBill({ userId: id as number, month: currentMonth + 1, year: currentYear });
  const billUnpaidQuery = useGetUnpaidBill(id as number);

  useEffect(() => {
    if (isAllBill === 'isNotAllBill') {
      if (billUpcomingQuery.isSuccess) {
        setListBillFilter(billUpcomingQuery.data.data.data);
      }
    } else {
      if (billUnpaidQuery.isSuccess) {
        setListBillFilter(billUnpaidQuery.data.data.data);
      }
    }
  }, [isAllBill, billUpcomingQuery, billUnpaidQuery]);

  const isCheckBox = useMemo(() => {
    return {
      backgroundColor: isChecked ? typoColor.yellow1 : '#121212',
      iconColor: isChecked ? '#000' : '#121212'
    };
  }, [isChecked]);

  const handleNavigateToChoosePayment = () => {
    const objectPayment = {
      paymentId: paymentBillToCheckout as number,
      price: totalPriceToCheckout
    };
    navigation.navigate('ChoosePaymentMethod', objectPayment);
  };

  const handlePlusTotalPrice = (price: number, paymentId: number) => () => {
    if (isChecked) {
      setTotalPriceToCheckout((prevState) => prevState - price);
      setPaymentBillToCheckout(null);
      setIsChecked(false);
    } else {
      setTotalPriceToCheckout((prevState) => prevState + price);
      setPaymentBillToCheckout(paymentId);
      setIsChecked(true);
    }
  };

  const clearPrice = () => {
    setIsChecked((prevState) => !prevState);
    setTotalPriceToCheckout(0);
  };

  useEffect(() => {
    return () => {
      setIsChecked(false);
    };
  }, []);

  return (
    <View style={[globalStyle.container]}>
      <View style={[styles.wrapContainer]}>
        {/* Filter 15days & All days */}
        <View style={[styles.wrapHeader]}>
          <TouchableOpacity
            onPress={() => setIsAllBill('isNotAllBill')}
            style={[
              styles.wrapButton,
              { backgroundColor: isAllBill === 'isNotAllBill' ? typoColor.yellow1 : '#121212' }
            ]}
          >
            <TextComponent
              content='Upcoming in month'
              fontSize={16}
              fontFamily={fontFam.semiBold}
              textColor={isAllBill === 'isNotAllBill' ? '#000' : '#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsAllBill('isAllBill')}
            style={[styles.wrapButton, { backgroundColor: isAllBill === 'isAllBill' ? typoColor.yellow1 : '#121212' }]}
          >
            <TextComponent
              content='All bills'
              fontSize={16}
              fontFamily={fontFam.semiBold}
              textColor={isAllBill === 'isAllBill' ? '#000' : '#fff'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => billUpcomingQuery.refetch()}
          style={[
            {
              marginLeft: 20,
              height: 30,
              width: 30,
              backgroundColor: typoColor.yellow1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderRadius: 8
            }
          ]}
        >
          <ArrowRotateRight size='25' color='#000' />
        </TouchableOpacity>
        {/* Body */}
        <View style={[{ marginVertical: 20 }]}></View>
        <ScrollView>
          {/* Component  */}

          {listBillFilter.length === 0 && <NotFound />}
          {listBillFilter.map((item, index) => (
            <View style={[styles.wrapMainContent]} key={index}>
              {/* Header */}
              <View style={[styles.wrapHeaderContent]}>
                <View style={[styles.wrapCalendarInfo]}>
                  <Calendar size='27' color={typoColor.yellow1} variant='Bold' />
                  <TextComponent
                    content={`${getMonthNameByNum(new Date(item.expiredDate).getMonth() + 1)}, ${currentYear}`}
                    fontSize={16}
                    fontFamily={fontFam.semiBold}
                  />
                </View>
              </View>
              <View style={[styles.wrapBoxPayment]}>
                {/* Image */}
                <View>
                  <Image style={[styles.wrapImage]} source={require('../../assets/images/main-logo.png')} />
                </View>
                {/* Information */}
                <View style={[styles.wrapInforBoxPayment]}>
                  <TouchableOpacity
                    style={[styles.wrapViewDetail]}
                    onPress={() =>
                      navigation.navigate('HistoryBillingScreen', {
                        date: item.expiredDate,
                        price: item.price,
                        semester: item.semester
                      })
                    }
                  >
                    <TextComponent content='Detail your bills' fontFamily={fontFam.semiBold} fontSize={15} />
                    <ArrowRight2 size='20' color='#fff' />
                  </TouchableOpacity>
                  <TextComponent
                    content={`${addPostfixToNumber(item.semester)} semester`}
                    fontFamily={fontFam.semiBold}
                    textColor='#ccc'
                    fontSize={15}
                  />
                  <TextComponent content={item.price} fontFamily={fontFam.semiBold} fontSize={15} />
                </View>
                {/* Time date */}
                <View style={[styles.wrapTimeDate]}>
                  <TextComponent content='Expired Date' fontFamily={fontFam.semiBold} />
                  <TextComponent content={item.expiredDate} fontFamily={fontFam.medium} />
                </View>
                {/* Chechbox */}
                {isAllBill === 'isNotAllBill' && (
                  <View style={[styles.wrapChecbox]}>
                    <TouchableOpacity
                      style={[styles.checkbox, { backgroundColor: isCheckBox.backgroundColor }]}
                      onPress={handlePlusTotalPrice(item.price, item.paymentId)}
                    >
                      {isChecked && <Add size='18' color={isCheckBox.iconColor} />}
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
        {isChecked && (
          <Animated.View entering={FadeInDown} exiting={FadeOutDown} style={[styles.buttonPayment]}>
            <TouchableOpacity onPress={clearPrice}>
              <Trash size='32' color={typoColor.yellow1} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.wrapButtonCheckout]} onPress={handleNavigateToChoosePayment}>
              <TextComponent
                content={`Continue - $ ${totalPriceToCheckout}`}
                textColor='#000'
                fontSize={18}
                fontFamily={fontFam.bold}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapContainer: {
    padding: 20,
    flex: 1,
    position: 'relative'
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  wrapButton: {
    width: '50%',
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  wrapMainContent: {
    gap: 20,
    alignItem: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  wrapHeaderContent: {
    flexDirection: 'row'
  },
  wrapCalendarInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  wrapImage: {
    height: 70,
    width: 70,
    borderRadius: 50
  },
  wrapBoxPayment: {
    borderWidth: 1,
    borderColor: '#404040',
    padding: 14,
    borderRadius: 24,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  wrapInforBoxPayment: {
    gap: 3
  },
  wrapViewDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  wrapTimeDate: {
    alignItems: 'center'
  },
  wrapChecbox: {
    alignItems: 'flex-end'
  },
  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: typoColor.yellow1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPayment: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: '#242424',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrapButtonCheckout: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: typoColor.yellow1
  }
});

export default BillingScreen;
