import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Appointment } from '@type/appointment.type';
import { convertDate } from '@utils/helper';
import { Calendar, Call, Clock, CloseCircle, Location, Map, Note1, Star1 } from 'iconsax-react-native';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
  snapPoints: string[] | number[];
  sheetDetailRef: React.RefObject<BottomSheetMethods>;
  data: Appointment;
  onClose: () => void;
};

const BottomSheetDetailAppointment = ({ sheetDetailRef, snapPoints, onClose, data }: Props) => {
  const handleCall = async (phone: string) => {
    const phoneLink = `tel:+${phone}`;
    try {
      const isSupported = await Linking.canOpenURL(phoneLink);
      isSupported === true && (await Linking.openURL(phoneLink));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <BottomSheet
      detached={true}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      ref={sheetDetailRef}
      index={-1}
      handleIndicatorStyle={{ display: 'none' }}
      handleStyle={{ display: 'none' }}
      onClose={onClose}
    >
      <BottomSheetView style={[styles.contentDetailAppointment]}>
        <ScrollView style={[styles.wrapContent]}>
          <View style={[styles.wrapHeader]}>
            <TextComponent content='Detail Appointment' fontSize={20} fontFamily={fontFam.bold} textColor='#ccc' />
            <TouchableOpacity onPress={onClose}>
              <CloseCircle size='32' color={typoColor.yellow1} variant='Bold' />
            </TouchableOpacity>
          </View>
          <View style={[{ marginVertical: 5 }]}></View>
          <View style={[styles.wrapComponent, { gap: 15 }]}>
            {/* Image & Infomation */}
            <View style={[styles.wrapImageAndInfo]}>
              {/* Image */}
              <View style={[styles.besideImage]}>
                <Image source={{ uri: data?.userImage }} style={[styles.wrapImage]} />
              </View>
              {/* Information and call */}
              <View style={[styles.wrapInforandCall]}>
                <TextComponent content={data?.userName} fontSize={22} fontFamily={fontFam.semiBold} />
                <TextComponent content={data?.userAddress} fontSize={14} fontFamily={fontFam.light} />
                <View style={[styles.wrapButton]}>
                  <View style={[styles.wrapVerify]}>
                    <Star1 size='20' color={typoColor.yellow1} variant='Bold' />
                    <TextComponent content='Verified' fontSize={14} textColor='#cecece' />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.wrapDescriptionInfor]}>
              <TextComponent content='Owner' fontSize={40} fontFamily={fontFam.extraBold} textColor='#f8d649' />
              <View style={[styles.wrapBothButton]}>
                <TouchableOpacity
                  style={[styles.wrapButtonCall, { backgroundColor: '#000', borderWidth: 2, borderColor: '#161616' }]}
                >
                  <Map size='24' color='#f8d649' variant='Bold' />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleCall(data.userPhone)}
                  style={[styles.wrapButtonCall, { flexDirection: 'row', alignItems: 'center', gap: 10 }]}
                >
                  <Call size='24' color='#0f0f10' variant='Bold' />
                  <TextComponent content={data?.userPhone} textColor='#000' fontFamily={fontFam.bold} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[{ marginVertical: 10 }]}></View>
          <View style={[styles.wrapInformationAppartment]}>
            <View style={[styles.wrapComponent, styles.cardInformation]}>
              <TextComponent content='Area' fontSize={16} textColor='#818181' />
              <View style={[{ marginVertical: 10 }]}></View>
              <TextComponent
                content={data?.apartment.building.zone.area.name}
                fontSize={27}
                textColor='#f8d649'
                fontFamily={fontFam.extraBold}
              />
            </View>
            <View style={[styles.wrapComponent, styles.cardInformation]}>
              <TextComponent content='Building' fontSize={16} textColor='#818181' />
              <View style={[{ marginVertical: 10 }]}></View>
              <TextComponent
                content={data?.apartment.building.name}
                fontSize={27}
                textColor='#f8d649'
                fontFamily={fontFam.extraBold}
              />
            </View>
            <View style={[styles.wrapComponent, styles.cardInformation]}>
              <TextComponent content='Appartment' textColor='#818181' />
              <View style={[{ marginVertical: 10 }]}></View>

              <TextComponent
                content={data?.apartment.name}
                fontSize={27}
                textColor='#f8d649'
                fontFamily={fontFam.extraBold}
              />
            </View>
          </View>
          <View style={[{ marginVertical: 10 }]}></View>
          <View style={[styles.wrapComponent, { gap: 10 }]}>
            <TextComponent content='Date and time' textColor='#818181' />
            <View style={[styles.wrapContentDateTime]}>
              <View style={[styles.wrapIconDateTime]}>
                <Calendar size='20' color='#f8d649' variant='Bold' />
              </View>
              <TextComponent content={convertDate(data?.dateTime)} fontFamily={fontFam.bold} fontSize={18} />
            </View>
            <View style={[styles.wrapContentDateTime]}>
              <View style={[styles.wrapIconDateTime]}>
                <Clock size='20' color='#f8d649' variant='Bold' />
              </View>
              <TextComponent content={data?.time} fontFamily={fontFam.bold} fontSize={18} />
            </View>
          </View>
          <View style={[{ marginVertical: 10 }]}></View>
          <View style={[styles.wrapComponent, { gap: 10 }]}>
            <TextComponent content='Address' textColor='#818181' />
            <View style={[styles.wrapContentDateTime]}>
              <View style={[styles.wrapIconDateTime]}>
                <Location size='20' color='#f8d649' variant='Bold' />
              </View>
              <TextComponent content={data?.address} fontFamily={fontFam.bold} fontSize={18} />
            </View>
          </View>
          <View style={[{ marginVertical: 10 }]}></View>
          <View style={[styles.wrapComponent, { gap: 10 }]}>
            <TextComponent content='Note' textColor='#818181' />
            <View style={[styles.wrapContentDateTime]}>
              <View style={[styles.wrapIconDateTime]}>
                <Note1 size='20' color='#f8d649' variant='Bold' />
              </View>
              <TextComponent content={data?.note} fontFamily={fontFam.bold} fontSize={18} />
            </View>
          </View>
        </ScrollView>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentDetailAppointment: {
    flex: 1,
    backgroundColor: '#151515',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  wrapContent: {
    marginBottom: 30
  },
  wrapHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wrapComponent: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#1f1f20d9',
    borderRadius: 14,
    borderWidth: 0.2,
    borderColor: '#3e3e3e'
  },
  besideImage: {
    padding: 7,
    borderWidth: 0.2,
    borderRadius: 50,
    borderColor: '#f8f8f844',
    backgroundColor: '#393939d9'
  },
  wrapImageAndInfo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  wrapImage: {
    width: 85,
    height: 85,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10
  },
  wrapInforandCall: {
    gap: 7
  },
  wrapVerify: {
    flexDirection: 'row',
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 0.2,
    borderRadius: 15,
    borderColor: '#30302d1a',
    backgroundColor: '#30302d',
    gap: 5
  },
  wrapButton: {
    flexDirection: 'row'
  },
  wrapDescriptionInfor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrapButtonCall: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#fde047',
    borderRadius: 10,
    backgroundColor: '#f8d649'
  },
  wrapInformationAppartment: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardInformation: {
    width: '31%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12
  },
  wrapIconDateTime: {
    padding: 7,
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: '#f8f8f844'
  },
  wrapContentDateTime: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  wrapBothButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
});

export default BottomSheetDetailAppointment;
