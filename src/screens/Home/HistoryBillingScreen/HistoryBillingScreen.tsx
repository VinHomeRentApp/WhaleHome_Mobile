import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useGetAllBIll } from '@services/queries/bill.queries';
import globalStyle from '@styles/globalStyle';
import { HistoryBillingScreenProps } from '@type/navigation.types';
import { addPostfixToNumber } from '@utils/helper';
import { Clock, RefreshCircle, TickCircle, Wallet } from 'iconsax-react-native';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const HistoryBillingScreen = ({ route }: HistoryBillingScreenProps) => {
  const {
    state: {
      auth: {
        currentUser: { id }
      }
    }
  } = useRootContext();

  const getAllBillQueries = useGetAllBIll(id as number);
  const data = getAllBillQueries.data?.data.data;
  if (getAllBillQueries.isLoading) {
    return (
      <View style={[globalStyle.container]}>
        <LoadingOverlay isLoading={true} message='Loading' />
      </View>
    );
  } else {
    return (
      <ScrollView style={[globalStyle.container]}>
        {/* Information */}
        <View style={[styles.wrapContainer]}>
          <View style={[[styles.wrapHeader]]}>
            <View style={[styles.wrapTotalPrice]}>
              <TextComponent
                content={`$ ${
                  data?.reduce((acc, curr) => {
                    return acc + curr.price;
                  }, 0) as number
                },00`}
                fontSize={30}
                fontFamily={fontFam.bold}
              />
              <TextComponent
                textColor='#fff'
                content={
                  data?.every((item) => item.status === true) ? 'Finished' : 'This contract is in the payment stage'
                }
                fontFamily={fontFam.semiBold}
              />
            </View>
            <Image style={[styles.wrapImage]} source={require('../../../assets/images/main-logo.png')} />
          </View>
          <View style={[styles.wrapCurrentPayment]}>
            <View style={[styles.wrapContentPurchase]}>
              <View style={[styles.wrapDateTimeAndMoney]}>
                <View style={[styles.wrapDateTimeContentPurchase]}>
                  <Clock size='27' color='#fff' />
                  <View>
                    <TextComponent content={`${addPostfixToNumber(route.params.semester)} term`} fontSize={16} />
                    <TextComponent content={`${route.params.date}`} fontSize={16} />
                  </View>
                </View>
                <TextComponent content={`$ ${route.params.price},00`} fontSize={16} fontFamily={fontFam.extraBold} />
              </View>
              <View style={[styles.wrapIcon]}>
                <Wallet size='40' color='#000' variant='Bold' />
              </View>
            </View>
          </View>
          <View style={[styles.lineSeperate]}></View>
          <View style={[styles.wrapHistory]}>
            <TextComponent
              content='Payment History'
              styles={[{ marginVertical: 5 }]}
              fontSize={24}
              fontFamily={fontFam.extraBold}
            />
            {data?.map((item, index) => (
              <View style={[styles.wrapHistoryPurchased]} key={item.paymentId}>
                {/* Icon */}
                <View style={[styles.wrapIconStatus]}>
                  {item.status ? (
                    <TickCircle size='22' color='#16a34a' variant='Bold' />
                  ) : (
                    <RefreshCircle size='22' color='#303030' variant='Bold' />
                  )}

                  {index !== data.length - 1 && <View style={[styles.wrapLine]}></View>}
                </View>
                {/* Status */}
                <View style={[styles.wrapContentStatus]}>
                  <TextComponent
                    content={item.status ? 'Payment completed' : 'Waiting for payment'}
                    textColor={item.status ? '#fff' : '#303030'}
                    fontSize={17}
                    fontFamily={fontFam.semiBold}
                  />
                  <TextComponent
                    content={`${addPostfixToNumber(item.semester)} term  -  ${item.expiredDate.replaceAll('-', '.')}`}
                    fontFamily={fontFam.medium}
                    textColor={item.status ? '#808080' : '#303030'}
                  />
                </View>
                {/* Price */}
                <View style={[styles.wrapPriceStatus]}>
                  <TextComponent
                    content={`$ ${item.price},00`}
                    textColor={item.status ? '#fff' : '#303030'}
                    fontFamily={fontFam.semiBold}
                    fontSize={17}
                  />
                  <TextComponent
                    content={`$ ${item.price},00`}
                    fontSize={14}
                    fontFamily={fontFam.medium}
                    textColor={item.status ? '#808080' : '#303030'}
                  />
                </View>
              </View>
            ))}

            {/* Component history */}
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  wrapContainer: {
    flex: 1
  },
  wrapHeader: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrapImage: {
    width: 80,
    height: 80
  },
  wrapTotalPrice: {
    gap: 5
  },
  wrapCurrentPayment: {
    marginTop: 10,
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  wrapContentPurchase: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 14,
    borderColor: typoColor.yellow1
  },
  wrapDateTimeAndMoney: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  wrapDateTimeContentPurchase: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  wrapIcon: {
    width: '20%',
    backgroundColor: '#ffa02a',
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lineSeperate: {
    borderWidth: 4,
    borderColor: '#232323'
  },
  wrapHistory: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  wrapComponentHistory: {
    flexDirection: 'row'
  },
  wrapLineStatus: {
    flexDirection: 'row',
    width: '10%'
  },
  wrapStatusAndPrice: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dot: {
    zIndex: 2,
    position: 'absolute',
    height: 13,
    width: 13,
    backgroundColor: typoColor.yellow1,
    borderRadius: 50
  },
  line: {
    zIndex: 1,
    left: 6,
    height: 70,
    width: 1,
    backgroundColor: '#404040'
  },
  wrapPrice: {
    alignItems: 'flex-end'
  },
  wrapHistoryPurchased: {
    flexDirection: 'row',
    width: '100%',
    height: 60
  },
  wrapIconStatus: {
    width: '10%',
    alignItems: 'center',
    marginTop: 10
  },
  wrapContentStatus: {
    width: '65%',
    gap: 5
  },
  wrapPriceStatus: {
    width: '25%',
    gap: 5,
    alignItems: 'flex-end'
  },
  wrapLine: {
    zIndex: 1,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#404040',
    top: -2
  }
});

export default HistoryBillingScreen;
