import { View, Text, ScrollView, SafeAreaView, StyleSheet, Button, Pressable, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '@styles/globalStyle';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { ClipboardText } from 'iconsax-react-native';

type PeriodMonth = 2 | 4 | 6;

const TransactionReviewScreen = () => {
  const [isBuy, _] = useState<boolean>(false);
  const [periodMonth, setPeriodMonth] = useState<PeriodMonth>(2);

  const handleChangePeriodMonth = (months: PeriodMonth) => {
    setPeriodMonth(months);
    console.log(months);
  };

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ScrollView style={[{ paddingHorizontal: 30 }]}>
        {/* Modal */}
        <View style={[styles.wrapperApartment]}>
          <Image
            style={[{ width: 168, height: 140, borderRadius: 18 }]}
            source={require('../../assets/images/rooms/PN1.jpg')}
          />
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
        <View style={[{ marginVertical: 20 }]}></View>

        <View>
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
        <View style={[{ marginVertical: 20 }]}></View>

        <View>
          <TextComponent content='Payment Method' fontFamily={fontFam.bold} fontSize={21} />
          <View style={[{ marginVertical: 10 }]}></View>
        </View>
        <View>
          <TextComponent content='Next' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperApartment: {
    width: 327,
    height: 156,
    backgroundColor: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  wrapperPeriod: {
    gap: 10
  },
  wrapperSelectorMonths: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  periodMonth: {
    width: 82,
    height: 33,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5D5D5E'
  },
  wrapperInputNote: {
    width: 327,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textInputNote: {}
});
export default TransactionReviewScreen;
