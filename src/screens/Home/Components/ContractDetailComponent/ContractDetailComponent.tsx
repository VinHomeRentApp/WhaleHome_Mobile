import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { Bank, Profile } from 'iconsax-react-native';

type Props = {
  id_contract: string;
  create_date_contract: Date;
  expire_date_contract: Date;
  duration_months: number;
  total_price: number;
  price_per_month: number;
  // information_about_building
  zone_name: string;
  area_name: string;
  appartment_name: string;
  //Information about appartment
  //landlord
  landlord_fullName: string;
  landlord_phone: string;
  landlord_identity_card: number;
  landlord_identity_card_date_provided: Date;
  landlord_identity_card_address_provided: string;
  landlord_address: string;
  bank_name: string;
  bank_code: string;
  bank_address: string;
  //renter
  renter_fullname: string;
  renter_phone: string;
  renter_identity_card: Date;
  renter_identity_card_provided: Date;
  renter_identity_card_address_provided: string;
  renter_address: string;
  // link download
  linkdownload_contract: string;
};

const ContractDetailComponent = () => {
  return (
    <View>
      {/* Header */}
      <View style={[styles.wrapHeader]}>
        <View style={[styles.wrapTitleHeader]}>
          <View style={[styles.wrapIcon, { backgroundColor: '#2563eb' }]}>
            <Profile size='24' color='#fff' />
          </View>
          <TextComponent content='Information' fontFamily={fontFam.extraBold} textColor='#292929' fontSize={24} />
        </View>
      </View>
      <View style={[styles.wrapContentInformation]}>
        <View style={[styles.wrapEachRow]}>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Fullname' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent content='TRAN QUANG MINH' fontSize={16} fontFamily={fontFam.semiBold} />
          </View>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Phone' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent content='9886751110' fontSize={16} fontFamily={fontFam.semiBold} />
          </View>
        </View>
        <View style={[styles.wrapEachRow]}>
          <View style={[styles.wrapRow]}>
            <TextComponent content='CCCD' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent content='272891343' fontSize={16} fontFamily={fontFam.semiBold} />
          </View>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Ngay cap' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent content='31/12/2021' fontSize={16} fontFamily={fontFam.semiBold} />
          </View>
        </View>
        <View style={[styles.wrapEachRow, { justifyContent: 'flex-end' }]}>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Noi cap' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent content='272891343' fontSize={16} fontFamily={fontFam.semiBold} />
          </View>
        </View>
        <View style={[styles.wrapEachRow]}>
          <View style={[styles.wrapRow, { width: '100%' }]}>
            <TextComponent content='Dia chi' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent
              content='81, Quảng Phát, Quảng Tiến, Trảng Bom, Đồng Nai'
              fontSize={16}
              fontFamily={fontFam.semiBold}
            />
          </View>
        </View>
      </View>
      <View style={[styles.seperateLine]}></View>
      <View style={[styles.wrapHeader]}>
        <View style={[styles.wrapTitleHeader]}>
          <View style={[styles.wrapIcon, { backgroundColor: '#15803d' }]}>
            <Bank size='24' color='#fff' />
          </View>
          <TextComponent content='Payment method' fontFamily={fontFam.extraBold} textColor='#292929' fontSize={24} />
        </View>
      </View>
      <View style={[styles.wrapContentInformation]}>
        <View style={[styles.wrapRow]}>
          <TextComponent content='Bank' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
          <TextComponent content='TRAN QUANG MINH' fontSize={16} fontFamily={fontFam.semiBold} />
        </View>
        <View style={[styles.wrapRow]}>
          <TextComponent content='BankCode' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
          <TextComponent content='9886751110' fontSize={16} fontFamily={fontFam.semiBold} />
        </View>
        <View style={[styles.wrapRow, { width: '100%' }]}>
          <TextComponent content='Bank Address' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
          <TextComponent content='PGD Trang Bom Vietcombank' fontSize={16} fontFamily={fontFam.semiBold} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    paddingHorizontal: 20
  },
  wrapContract: {
    borderWidth: 1,
    backgroundColor: '#191919',
    borderColor: '#404040',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    gap: 10
  },
  wrapTitleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10
  },
  wrapIcon: {
    height: 30,
    width: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapHeader: {
    flexDirection: 'row'
  },
  wrapContentInformation: {},
  wrapRow: {
    marginBottom: 5,
    width: '50%'
  },
  wrapEachRow: {
    flexDirection: 'row',
    marginBottom: 5
  },
  seperateLine: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#404040',
    marginVertical: 10
  }
});

export default ContractDetailComponent;
