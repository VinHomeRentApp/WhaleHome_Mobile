import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { Add, ArrowRight2, Calendar, Trash } from 'iconsax-react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

type FilterType = 'isAllBill' | 'isNotAllBill';

const BillingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const [isAllBill, setIsAllBill] = useState<FilterType>('isNotAllBill');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const isCheckBox = useMemo(() => {
    return {
      backgroundColor: isChecked ? typoColor.yellow1 : '#121212',
      iconColor: isChecked ? '#000' : '#121212'
    };
  }, [isChecked]);

  const handleNavigateToChoosePayment = () => {
    navigation.navigate('ChoosePaymentMethod');
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
              content='15 days upcoming'
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
        {/* Body */}
        <View style={[{ marginVertical: 20 }]}></View>
        <ScrollView>
          {/* Component  */}
          <View style={[styles.wrapMainContent]}>
            {/* Header */}
            <View style={[styles.wrapHeaderContent]}>
              <View style={[styles.wrapCalendarInfo]}>
                <Calendar size='27' color={typoColor.yellow1} variant='Bold' />
                <TextComponent content='March, 2024' fontSize={16} fontFamily={fontFam.semiBold} />
              </View>
            </View>
            {/*  */}
            <View style={[styles.wrapBoxPayment]}>
              {/* Image */}
              <View>
                <Image style={[styles.wrapImage]} source={require('../../assets/images/main-logo.png')} />
              </View>
              {/* Information */}
              <View style={[styles.wrapInforBoxPayment]}>
                <TouchableOpacity
                  style={[styles.wrapViewDetail]}
                  onPress={() => navigation.navigate('HistoryBillingScreen')}
                >
                  <TextComponent content='Detail your bills' fontFamily={fontFam.semiBold} fontSize={15} />
                  <ArrowRight2 size='20' color='#fff' />
                </TouchableOpacity>
                <TextComponent content='1st term' fontFamily={fontFam.semiBold} textColor='#ccc' fontSize={15} />
                <TextComponent content='$ 224,0' fontFamily={fontFam.semiBold} fontSize={15} />
              </View>
              {/* Time date */}
              <View style={[styles.wrapTimeDate]}>
                <TextComponent content='Expired Date' fontFamily={fontFam.semiBold} />
                <TextComponent content='30.03.2024' fontFamily={fontFam.medium} />
              </View>
              {/* Chechbox */}
              <View style={[styles.wrapChecbox]}>
                <TouchableOpacity
                  style={[styles.checkbox, { backgroundColor: isCheckBox.backgroundColor }]}
                  onPress={() => setIsChecked((prevState) => !prevState)}
                >
                  {isChecked && <Add size='18' color={isCheckBox.iconColor} />}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        {isChecked && (
          <Animated.View entering={FadeInDown} exiting={FadeOutDown} style={[styles.buttonPayment]}>
            <TouchableOpacity onPress={() => setIsChecked((prevState) => !prevState)}>
              <Trash size='32' color={typoColor.yellow1} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.wrapButtonCheckout]} onPress={handleNavigateToChoosePayment}>
              <TextComponent content='Continue - $ 224,00' textColor='#000' fontSize={18} fontFamily={fontFam.bold} />
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
    justifyContent: 'space-between'
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
