import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import globalStyle from '@styles/globalStyle';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { typoColor } from '@constants/appColors';
import { Building, Building4, Clock } from 'iconsax-react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

type FilterAppointment = 'Upcoming' | 'Past';

const AppointmentScreen = () => {
  const [isOpenDetailAppointment, setIsOpenDetailAppointment] = useState<boolean>(false);
  const [isUpcoming, setIsUpcoming] = useState<FilterAppointment>('Upcoming');
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['30%'];

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpenDetailAppointment(true);
  }, []);

  const handleChangeFilter = (filter: FilterAppointment) => () => {
    setIsUpcoming(filter);
  };

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={[styles.wrapContainer]}>
        <TextComponent content='My Appointment' fontSize={30} fontFamily={fontFam.extraBold} />
        {/* Filter past / upcoming */}
        <View style={[styles.wraperFilter]}>
          {/* Filter past */}
          <TouchableOpacity
            onPress={handleChangeFilter('Upcoming')}
            style={[
              styles.wrapButtonFilter,
              { backgroundColor: isUpcoming === 'Upcoming' ? typoColor.yellow1 : '#121212' }
            ]}
          >
            <TextComponent
              content='Upcoming'
              fontSize={15}
              textColor={isUpcoming === 'Upcoming' ? typoColor.black1 : typoColor.white1}
              fontFamily={fontFam.semiBold}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.wrapButtonFilter,
              { backgroundColor: isUpcoming === 'Past' ? typoColor.yellow1 : '#121212' }
            ]}
            onPress={handleChangeFilter('Past')}
          >
            <TextComponent
              content='Past'
              fontSize={15}
              textColor={isUpcoming === 'Past' ? typoColor.black1 : typoColor.white1}
              fontFamily={fontFam.semiBold}
            />
          </TouchableOpacity>
        </View>
        {/* Appointment List Upcoming*/}
        <ScrollView style={[styles.wrapListAppointment]}>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <TouchableOpacity style={[styles.wrapAppointment]} key={index}>
                {/* Header Appointment */}
                <View style={[styles.wrapHeaderAppointment]}>
                  <View style={[styles.wrapDatePart]}>
                    <TextComponent content='Appointment Date' textColor={typoColor.gray1} />
                    <View style={[styles.wrapOclock]}>
                      <Clock size='20' color='#fff' />
                      <TextComponent
                        content='Wed Jun 20 - 8:00 8:30 AM'
                        textColor={typoColor.white1}
                        fontFamily={fontFam.bold}
                      />
                    </View>
                  </View>
                  <Building size='32' color='#f8f8f899' />
                </View>

                {/* Wrap Information Owner */}
                <View style={[styles.wrapInformation]}>
                  {/* Image */}
                  <View style={[styles.wrapImage]}></View>
                  {/* Information */}
                  <View>
                    <TextComponent content='TRAN QUANG MINH' fontSize={16} fontFamily={fontFam.bold} />
                    <TextComponent content='Owner' fontSize={14} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      <BottomSheet snapPoints={snapPoints} enablePanDownToClose={true} ref={sheetRef}>
        <BottomSheetView>
          <TextComponent content='Popular banks' />
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // #262626
  wrapContainer: {
    paddingHorizontal: 20
  },
  wraperFilter: {
    padding: 5,
    backgroundColor: '#121212',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  wrapButtonFilter: {
    width: '49%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  wrapListAppointment: {
    marginTop: 40
  },
  wrapAppointment: {
    backgroundColor: '#262626',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderLeftWidth: 7,
    borderColor: typoColor.yellow1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20
  },
  wrapHeaderAppointment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#f8f8f899'
  },
  wrapDatePart: {
    gap: 5,
    paddingBottom: 15
  },
  wrapOclock: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  wrapImage: {
    position: 'relative',
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 50
  },
  wrapInformation: {
    paddingTop: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  buildingImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 35,
    width: 35,
    backgroundColor: '#262626',
    borderRadius: 20
  }
});

export default AppointmentScreen;
