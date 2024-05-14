import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGetUnpaidBill, useGetUpcomingBill } from '@services/queries/bill.queries';
import globalStyle from '@styles/globalStyle';
import { Bill } from '@type/bill.type';
import { BillingScreenProps, MainStackParamList } from '@type/navigation.types';
import { addPostfixToNumber, getMonthNameByNum } from '@utils/helper';
import { ArrowRight2, Calendar1, TickSquare, Trash } from 'iconsax-react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Image, RefreshControl, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight
} from 'react-native-reanimated';
import socketIO from 'socket.io-client';
import NotFound from '../Components/NotFound/NotFound';

type FilterType = 'isAllBill' | 'isNotAllBill';

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const BillingScreen = ({ route }: BillingScreenProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const [listIdChecked, setListIdChecked] = useState<{ id: number; price: number }[]>([]);
  const [isAllBill, setIsAllBill] = useState<FilterType>('isNotAllBill');
  const [listBillFilter, setListBillFilter] = useState<Bill[]>([]);
  const [isRefreshUpcoming, setIsRefreshUpcoming] = useState<boolean>(false);
  const {
    state: {
      auth: {
        currentUser: { id }
      }
    }
  } = useRootContext();

  // Fetch data
  const billUpcomingQuery = useGetUpcomingBill({ userId: id as number, month: currentMonth + 1, year: currentYear });
  const billUnpaidQuery = useGetUnpaidBill(id as number);
  // End Fetch data

  const paymentData = useMemo(() => {
    const listId = listIdChecked.map((item) => item.id).join(',');
    const totalPrice = listIdChecked.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
    return {
      paymentId: listId,
      price: totalPrice
    };
  }, [listIdChecked]);
  const io = socketIO('https://whale-socket.up.railway.app/');
  console.log(paymentData.paymentId.split(','));
  useFocusEffect(
    React.useCallback(() => {
      io.emit('check-status-payment-36', { data: paymentData.paymentId.split(',') });

      io.on('check-status-payment-36', (data) => {
        console.log(data);
        if (data.data === true) {
          Alert.alert('Thanh toan thanh cong');
        }
      });

      return () => {
        io.off('check-status-payment-36');
        io.disconnect();
      };
    }, [paymentData]) // Đảm bảo cập nhật khi paymentData thay đổi
  );

  useEffect(() => {
    if (isAllBill === 'isNotAllBill') {
      if (billUpcomingQuery.isSuccess) {
        setListBillFilter(billUpcomingQuery.data.data.data);
      } else {
        setListBillFilter([]);
      }
    } else {
      if (billUnpaidQuery.isSuccess) {
        setListBillFilter(billUnpaidQuery.data.data.data);
      } else {
        setListBillFilter([]);
      }
    }
  }, [
    isAllBill,
    billUpcomingQuery.isSuccess,
    billUnpaidQuery.isSuccess,
    billUnpaidQuery.data?.data.data,
    billUpcomingQuery.data?.data.data
  ]);

  useEffect(() => {
    return () => {
      setListIdChecked([]);
    };
  }, []);

  const handleListIdChecked = (payment: { id: number; price: number }) => {
    const isInListIdChecked = listIdChecked.find((item) => item.id === payment.id);
    if (!isInListIdChecked) {
      setListIdChecked((prevState) => [...prevState, payment]);
    } else {
      setListIdChecked((prevState) => prevState.filter((item) => item.id !== payment.id));
    }
  };

  const isCheckBox = useMemo(
    () => (id: number) => {
      const checked = listIdChecked.find((item) => item.id === id);
      return {
        backgroundColor: checked ? typoColor.yellow1 : '#121212',
        iconColor: checked ? '#000' : '#121212',
        isShowIcon: checked
      };
    },
    [listIdChecked]
  );

  const onRefresh = useCallback(async () => {
    setIsRefreshUpcoming(true);
    if (isAllBill === 'isNotAllBill') {
      await billUpcomingQuery.refetch();
      setIsRefreshUpcoming(false);
    } else {
      await billUnpaidQuery.refetch();
      setIsRefreshUpcoming(false);
    }
  }, [isAllBill, billUnpaidQuery, billUpcomingQuery]);

  const handleNavigateToChoosePayment = () => {
    navigation.navigate('ChoosePaymentMethod', paymentData);
  };

  const handleClearCached = () => {
    setListIdChecked([]);
  };

  return (
    <View style={[globalStyle.container]}>
      <LoadingOverlay isLoading={billUnpaidQuery.isFetching || billUpcomingQuery.isFetching} message='Loading' />
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
              content='Upcoming'
              fontSize={14}
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
              fontSize={14}
              fontFamily={fontFam.semiBold}
              textColor={isAllBill === 'isAllBill' ? '#000' : '#fff'}
            />
          </TouchableOpacity>
        </View>
        {/* Body */}
        <View style={[{ marginVertical: 20 }]}></View>
        <ScrollView
          refreshControl={<RefreshControl tintColor='#fff' refreshing={isRefreshUpcoming} onRefresh={onRefresh} />}
        >
          {/* Component  */}

          {listBillFilter.length === 0 ? (
            <NotFound />
          ) : (
            listBillFilter.map((item, index) => (
              <View style={[styles.wrapMainContent]} key={index}>
                {/* Header */}
                <Animated.View entering={FadeInLeft} exiting={FadeOutLeft} style={[styles.wrapHeaderContent]}>
                  <View style={[styles.wrapCalendarInfo]}>
                    <Calendar1 size='27' color={typoColor.yellow1} variant='Outline' />
                    <TextComponent
                      content={`${getMonthNameByNum(new Date(item.expiredDate).getMonth() + 1)}, ${currentYear}`}
                      fontSize={16}
                      fontFamily={fontFam.semiBold}
                    />
                  </View>
                </Animated.View>
                <Animated.View entering={FadeInRight} exiting={FadeOutRight} style={[styles.wrapBoxPayment]}>
                  {/* Image */}
                  <View>
                    <Image style={[styles.wrapImage]} source={require('../../../assets/images/main-logo.png')} />
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
                      <TextComponent content='VIEW DETAIL BILL' fontFamily={fontFam.semiBold} fontSize={14} />
                      <ArrowRight2 size='20' color='#fff' />
                    </TouchableOpacity>
                    <TextComponent
                      content={`${addPostfixToNumber(item.semester)} semester`}
                      fontFamily={fontFam.semiBold}
                      textColor='#606060'
                      fontSize={13}
                    />
                    <View style={[{ flexDirection: 'row' }]}>
                      <View style={[styles.wrapPrice]}>
                        <TextComponent
                          content={`$ ${item.price},00`}
                          textColor='#000'
                          fontFamily={fontFam.bold}
                          fontSize={15}
                        />
                      </View>
                    </View>
                  </View>
                  {/* Time date */}
                  <View style={[styles.wrapTimeDate]}>
                    <TextComponent content='Expired Date' textColor='#606060' fontFamily={fontFam.semiBold} />
                    <TextComponent content={item.expiredDate} fontFamily={fontFam.bold} />
                  </View>
                  {/* Chechbox */}

                  <View style={[styles.wrapChecbox]}>
                    <TouchableOpacity
                      style={[styles.checkbox]}
                      onPress={() => handleListIdChecked({ id: item.paymentId, price: item.price })}
                    >
                      {isCheckBox(item.paymentId).isShowIcon && (
                        <TickSquare size='29' color={typoColor.yellow1} variant='Bold' />
                      )}
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              </View>
            ))
          )}
        </ScrollView>
        {paymentData.paymentId !== '' && (
          <Animated.View entering={FadeInDown} exiting={FadeOutDown} style={[styles.buttonPayment]}>
            <TouchableOpacity onPress={handleClearCached}>
              <Trash size='32' color={typoColor.yellow1} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.wrapButtonCheckout]} onPress={handleNavigateToChoosePayment}>
              <TextComponent
                content={`Continue - $ ${paymentData.price}`}
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
    flex: 1,
    position: 'relative'
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: 20
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
    flexDirection: 'row',
    borderWidth: 1.5,
    width: '50%',
    paddingVertical: 5,
    paddingLeft: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#151515',
    borderColor: '#1d1d1d',
    borderLeftWidth: 0
  },
  wrapCalendarInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 3
  },
  wrapImage: {
    height: 70,
    width: 70,
    borderRadius: 50
  },
  wrapBoxPayment: {
    borderWidth: 1.5,
    borderRightWidth: 0,
    borderColor: '#1e1e1e',
    backgroundColor: '#151515',
    padding: 15,
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 20
  },
  wrapInforBoxPayment: {
    gap: 3
  },
  wrapViewDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  wrapTimeDate: {
    alignItems: 'center'
  },
  wrapChecbox: {
    alignItems: 'flex-end'
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 0.5,
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
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20
  },
  wrapButtonCheckout: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: typoColor.yellow1
  },
  wrapPrice: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: typoColor.yellow1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BillingScreen;
