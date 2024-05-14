import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { CARD } from '@type/card.type';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const getInforBank = (bank_code: string) => {
  switch (bank_code) {
    case 'NCB':
      return {
        titleTop: 'NCB',
        titleBottom: 'napas',
        color_hex: '#5faab1'
      };
    case 'MasterCard':
      return {
        titleTop: '',
        titleBottom: 'VISA',
        color_hex: '#d97706'
      };
    case 'VISA':
      return {
        titleTop: '',
        titleBottom: 'VISA',
        color_hex: '#dbeafe'
      };
  }
};

const convertBank = (str: string) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 4 || i === 8 || i === 12) {
      newStr += '  ';
      newStr += str[i];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

type Props = {
  bankInformation: CARD;
};

const BankCard = ({ bankInformation }: Props) => {
  const inforBank = getInforBank(bankInformation.bankCode);
  return (
    <View style={[styles.card, { backgroundColor: inforBank?.color_hex }]}>
      <View style={[styles.wrapInforCard]}>
        <TextComponent styles={[styles.headerCard]} content={bankInformation.bankCode} />
        <TextComponent styles={[styles.cardNumber]} content={convertBank(bankInformation.cartNumber)} />
        <View>
          <TextComponent styles={[styles.nameStyle]} content={bankInformation.name} />
          <View style={[styles.footer]}>
            <TextComponent content={`ExpireDate: ${bankInformation.releaseDate}`} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 210,
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    marginVertical: 10
  },
  wrapInforCard: {
    justifyContent: 'space-between',
    flex: 1
  },
  headerCard: {
    fontSize: 30,
    fontFamily: fontFam.extraBold,
    fontStyle: 'italic'
  },
  cardNumber: {
    fontSize: 25
  },
  nameStyle: {
    fontSize: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default BankCard;
