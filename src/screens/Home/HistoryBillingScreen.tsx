import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useGetAllBIll } from '@services/queries/bill.queries';
import globalStyle from '@styles/globalStyle';
import { HistoryBillingScreenProps } from '@type/navigation.types';
import { addPostfixToNumber } from '@utils/helper';
import { Clock, Wallet } from 'iconsax-react-native';
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
  console.log(route);

  const getAllBillQueries = useGetAllBIll(id as number);
  const data = getAllBillQueries.data?.data.data;
  return (
    <View style={[globalStyle.container]}>
      {/* Information */}
      <View style={[styles.wrapContainer]}>
        <View style={[[styles.wrapHeader]]}>
          <View style={[styles.wrapTotalPrice]}>
            <TextComponent
              content={`$ ${
                data?.reduce((acc, curr) => {
                  return acc + curr.price;
                }, 0) as number
              }`}
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
          <Image style={[styles.wrapImage]} source={require('../../assets/images/main-logo.png')} />
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
              <TextComponent content={`$ ${route.params.price}`} fontSize={16} fontFamily={fontFam.extraBold} />
            </View>
            <View style={[styles.wrapIcon]}>
              <Wallet size='40' color='#000' variant='Bold' />
            </View>
          </View>
        </View>
        <View style={[styles.lineSeperate]}></View>
        <View style={[styles.wrapHistory]}>
          <TextComponent content='History Purchased' fontSize={24} fontFamily={fontFam.extraBold} textColor='#303030' />
          <ScrollView>
            {/* Each Component */}

            {data?.map((item) => (
              <View style={[styles.wrapComponentHistory]} key={item.paymentId}>
                {/* Icon */}
                <View style={[styles.wrapLineStatus]}>
                  <View style={[styles.dot]}></View>
                  <View style={[styles.line]}></View>
                </View>
                <View style={[styles.wrapStatusAndPrice]}>
                  {/* Information */}
                  <View style={[styles.wrapStatus, { padding: 5 }]}>
                    <TextComponent
                      content={item.status ? 'Purchased' : 'Waiting for purchase'}
                      fontFamily={fontFam.semiBold}
                      textColor={item.status ? '#fff' : '#606060'}
                      fontSize={17}
                    />
                    <TextComponent
                      content={`${addPostfixToNumber(item.semester)} term`}
                      textColor={item.status ? '#fff' : '#606060'}
                      fontFamily={fontFam.semiBold}
                    />
                  </View>
                  {/* Price */}
                  <View style={[styles.wrapPrice, { padding: 5 }]}>
                    <TextComponent
                      content={`$ ${item.price}`}
                      textColor={item.status ? '#fff' : '#606060'}
                      fontFamily={fontFam.semiBold}
                      fontSize={17}
                    />
                    <TextComponent
                      content={`$ ${item.price}`}
                      textColor={item.status ? '#fff' : '#606060'}
                      fontFamily={fontFam.semiBold}
                    />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {},
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
    marginTop: 20,
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
    paddingVertical: 25
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
    padding: 20,
    gap: 20
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
    height: 'auto',
    width: 1,
    backgroundColor: '#404040'
  },
  wrapPrice: {
    alignItems: 'flex-end'
  },
  wrapStatus: {
    alignItems: 'flex-start'
  }
});

export default HistoryBillingScreen;
