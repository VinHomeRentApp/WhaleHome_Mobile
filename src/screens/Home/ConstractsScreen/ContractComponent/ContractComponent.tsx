import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { Contract } from '@type/contract.type';
import { CalendarTick, DocumentText1, Location, MoreCircle } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
  onOpenOptional: (index: number, contract: Contract) => void;
  data: Contract;
};

const ContractComponent = ({ onOpenOptional, data }: Props) => {
  return (
    <View style={[styles.wrapContract]}>
      {/* Header */}
      <View style={[styles.wrapHeaderContract]}>
        <View style={[styles.wrapIconAndTitle]}>
          <View style={[styles.wrapIconContract]}>
            <DocumentText1 size='32' color='#212121' variant='Outline' />
          </View>
          <View style={[styles.wrapHeadTitle]}>
            <TextComponent content={`${data.apartmentName} Contract`} fontFamily={fontFam.bold} fontSize={20} />
            <TextComponent content={`#${data.id}`} textColor='#cecece' fontFamily={fontFam.medium} fontSize={14} />
          </View>
        </View>
        <TouchableOpacity onPress={() => onOpenOptional(0, data)}>
          <MoreCircle size='32' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
      </View>
      {/* Body */}
      <View style={[{ marginVertical: 10 }]}></View>
      <View style={[styles.wrapStatusContract]}>
        <View style={[styles.wrapStatusComponent, { backgroundColor: '#0369a1' }]}>
          <TextComponent content='Contract' fontFamily={fontFam.semiBold} />
        </View>
        <View style={[styles.wrapStatusComponent, { backgroundColor: '#15803d' }]}>
          <TextComponent
            content={data.contractStatus ? 'Payment Processing' : 'Payment Finished'}
            fontFamily={fontFam.semiBold}
          />
        </View>
      </View>
      {/* Total Balance */}
      <View style={[{ marginVertical: 10 }]}></View>
      <View style={[styles.wrapTotalPrice]}>
        <TextComponent content='Rs:' fontSize={26} fontFamily={fontFam.light} />
        <TextComponent content={`$ ${data.totalPrice}`} fontSize={26} fontFamily={fontFam.bold} />
        <TextComponent content={`/ ${data.durationMonth} months`} fontSize={14} fontFamily={fontFam.light} />
      </View>
      <View style={[{ marginVertical: 10 }]}></View>
      <View style={[styles.lineSeperate]}></View>
      <View style={[{ marginVertical: 10 }]}></View>
      <View style={[styles.wrapOwnerAndRenter]}>
        {/* Ben A */}
        <View style={[styles.wrapOnwerAndRenterComponent]}>
          <View style={[styles.iconRenter, { backgroundColor: '#525252' }]}>
            <TextComponent content='A' fontSize={30} fontFamily={fontFam.extraBold} />
          </View>
          <TextComponent content={`${data.landlordName.toUpperCase()}`} fontSize={18} fontFamily={fontFam.semiBold} />
          <TextComponent content='(owner)' fontSize={12} fontFamily={fontFam.semiBold} />
        </View>
        {/* Ben B */}
        <View style={[styles.wrapOnwerAndRenterComponent]}>
          <View style={[styles.iconRenter, { backgroundColor: '#525252' }]}>
            <TextComponent content='B' fontSize={30} fontFamily={fontFam.extraBold} />
          </View>
          <TextComponent content={`${data.renterName.toUpperCase()}`} fontSize={18} fontFamily={fontFam.semiBold} />
          <TextComponent content='(you)' fontSize={12} fontFamily={fontFam.semiBold} />
        </View>
      </View>
      <View style={[{ marginVertical: 10 }]}></View>
      <View style={[styles.lineSeperate]}></View>
      <View style={[{ marginVertical: 10 }]}></View>
      <View style={[styles.wrapOwnerAndRenter]}>
        {/* Ben A */}
        <View style={[styles.wrapOnwerAndRenterComponent]}>
          <View style={[styles.iconRenter, { backgroundColor: '#525252' }]}>
            <CalendarTick size='32' color='#fff' variant='Outline' />
          </View>
          <TextComponent content={`${data.durationMonth} months`} fontSize={16} fontFamily={fontFam.semiBold} />
        </View>
        {/* Ben B */}
        <View style={[styles.wrapOnwerAndRenterComponent]}>
          <View style={[styles.iconRenter, { backgroundColor: '#525252' }]}>
            <Location size='32' color='#fff' variant='Outline' />
          </View>
          <TextComponent content={`${data.address}`} fontSize={16} fontFamily={fontFam.semiBold} />
        </View>
      </View>
      {/*  */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapContract: {
    borderWidth: 1,
    backgroundColor: '#202020',
    borderColor: '#404040',
    borderRadius: 14,
    padding: 20,
    marginBottom: 20
  },
  wrapHeaderContract: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrapIconContract: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: typoColor.yellow1
  },
  wrapIconAndTitle: {
    flexDirection: 'row',
    gap: 10
  },
  wrapHeadTitle: {},
  wrapStatusContract: {
    flexDirection: 'row',
    gap: 10
  },
  wrapStatusComponent: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  wrapTotalPrice: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-end'
  },
  lineSeperate: {
    borderBottomWidth: 0.5,
    borderColor: '#404040'
  },
  wrapOwnerAndRenter: {
    gap: 10
  },
  wrapOnwerAndRenterComponent: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  iconRenter: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ContractComponent;
