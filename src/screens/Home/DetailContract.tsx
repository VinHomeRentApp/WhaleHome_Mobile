import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import { ArrowDown2, ArrowUp2, Link21 } from 'iconsax-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import ContractDetailComponent from './Components/ContractDetailComponent/ContractDetailComponent';
import { DetailContractProps } from '@type/navigation.types';

const DetailContract = ({ route }: DetailContractProps) => {
  const [isAccrodinateLandLord, setIsAccordinateLandLord] = useState<boolean>(false);
  const [isAccrodinateRenter, setIsAccordinateRenter] = useState<boolean>(false);

  return (
    <ScrollView style={[globalStyle.container]}>
      <View style={[styles.wrapContainer]}>
        <TextComponent content='Contract information' fontSize={25} fontFamily={fontFam.bold} />
        <View style={[styles.wrapContractInfor]}>
          <TextComponent content='Contract ID:' textColor='#404040' fontSize={15} fontFamily={fontFam.bold} />
          <TextComponent content='SC201HD2' fontFamily={fontFam.semiBold} fontSize={16} />
        </View>
        <View style={[styles.wrapContractInfor]}>
          <TextComponent content='Create Date:' textColor='#404040' fontSize={15} fontFamily={fontFam.bold} />
          <TextComponent content='Thur 11 Oct 2023' fontFamily={fontFam.semiBold} fontSize={16} />
        </View>
        <View style={[styles.wrapContractInfor]}>
          <TextComponent content='Expired Date:' textColor='#404040' fontSize={15} fontFamily={fontFam.bold} />
          <TextComponent content='Wed 24 Sep 2025' fontFamily={fontFam.semiBold} fontSize={16} />
        </View>
        <View style={[styles.wrapContractInfor]}>
          <TextComponent content='Duration month:' textColor='#404040' fontSize={15} fontFamily={fontFam.bold} />
          <TextComponent content='8 tháng' fontFamily={fontFam.semiBold} fontSize={16} />
        </View>
        <View style={[styles.wrapContractInfor]}>
          <TextComponent content='Total Fee:' textColor='#404040' fontSize={15} fontFamily={fontFam.bold} />
          <TextComponent content='$ 45,000.00' fontFamily={fontFam.semiBold} fontSize={16} />
        </View>
        <View style={[styles.wrapContractInfor]}>
          <TextComponent content='Fee per month:' textColor='#404040' fontSize={15} fontFamily={fontFam.bold} />
          <TextComponent content='$ 5,300.00' fontFamily={fontFam.semiBold} fontSize={16} />
        </View>
        <View style={[{ marginVertical: 10 }]}></View>

        {/* Landlord Side */}
        <TouchableOpacity
          style={[styles.wrapExpand]}
          onPress={() => setIsAccordinateLandLord((prevState) => !prevState)}
        >
          <View style={[styles.wrapIcon, { backgroundColor: '#525252' }]}>
            <TextComponent content='A' fontSize={20} textColor='#fff' fontFamily={fontFam.extraBold} />
          </View>
          <TextComponent content='LandLord (A Side)' fontSize={18} fontFamily={fontFam.bold} />
          {isAccrodinateLandLord ? <ArrowDown2 size='28' color='#fff' /> : <ArrowUp2 size='28' color='#fff' />}
        </TouchableOpacity>
        {isAccrodinateLandLord && (
          <Animated.View entering={FadeInUp} exiting={FadeOutUp} style={[styles.wrapContract]}>
            <ContractDetailComponent />
            <View style={[styles.seperateLine]} />
          </Animated.View>
        )}

        {/* Renter side */}
        <TouchableOpacity style={[styles.wrapExpand]} onPress={() => setIsAccordinateRenter((prevState) => !prevState)}>
          <View style={[styles.wrapIcon, { backgroundColor: '#525252' }]}>
            <TextComponent content='B' fontSize={20} textColor='#fff' fontFamily={fontFam.extraBold} />
          </View>
          <TextComponent content='Renter (B Side)' fontSize={18} fontFamily={fontFam.bold} />
          {isAccrodinateRenter ? <ArrowDown2 size='28' color='#fff' /> : <ArrowUp2 size='28' color='#fff' />}
        </TouchableOpacity>
        {isAccrodinateRenter && (
          <Animated.View entering={FadeInUp} exiting={FadeOutUp} style={[styles.wrapContract]}>
            <ContractDetailComponent />
            <View style={[styles.seperateLine]} />
          </Animated.View>
        )}
        <TouchableOpacity style={[styles.wrapContract, { flexDirection: 'row', alignItems: 'center', gap: 20 }]}>
          <View style={[styles.wrapIcon, { backgroundColor: '#15803d' }]}>
            <Link21 size='27' color='#fff' />
          </View>
          <TextComponent content='Download full contract' fontSize={18} fontFamily={fontFam.bold} />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  wrapHeader: {
    flexDirection: 'row',
    gap: 10
  },
  wrapIcon: {
    height: 30,
    width: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2563eb'
  },
  wrapContractInfor: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10
  },
  wrapExpand: {
    borderWidth: 1,
    backgroundColor: '#191919',
    borderColor: '#404040',
    borderRadius: 12,
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
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
    borderColor: '#404040'
  }
});

export default DetailContract;
