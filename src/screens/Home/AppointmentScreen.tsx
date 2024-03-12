import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Pressable, FlatList } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import globalStyle from '@styles/globalStyle';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { typoColor } from '@constants/appColors';
import { Building, Building4, Clock, More, MoreCircle } from 'iconsax-react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useGetAppointment } from '@services/queries/appointment.queries';
import AppointmentCard from './Components/AppointmentCard/AppointmentCard';
import { get } from 'lodash';

type FilterAppointment = 'Upcoming' | 'Past';

const AppointmentScreen = () => {
  const [isOpenOptional, setIsOpenOptional] = useState<boolean>(false);
  const [isOpenDetailAppointment, setIsOpenDetailAppointment] = useState<boolean>(false);
  const [appointment, setAppointment] = useState<string>('');
  const [isUpcoming, setIsUpcoming] = useState<FilterAppointment>('Upcoming');
  const sheetRef = useRef<BottomSheet>(null);
  const sheetDetailRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['15%'], []);
  const snapDetailPoints = useMemo(() => ['75%'], []);

  const getAppointmentQuery = useGetAppointment(13);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpenOptional(true);
  }, []);

  const handleCloseOptional = () => {
    sheetRef.current?.close();
    setIsOpenOptional(false);
  };

  const handleSnapPressDetail = useCallback((index: number) => {
    sheetDetailRef.current?.snapToIndex(index);
    sheetRef.current?.close();
    setIsOpenDetailAppointment(true);
  }, []);

  const handleChangeFilter = (filter: FilterAppointment) => () => {
    setIsUpcoming(filter);
  };

  if (!getAppointmentQuery.data?.data.data) {
    return null;
  } else {
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
          <FlatList
            style={[styles.wrapListAppointment]}
            data={getAppointmentQuery.data?.data.data}
            renderItem={({ item }) => <AppointmentCard data={item} onOpenOptional={handleSnapPress} />}
          />
        </View>
        <BottomSheet
          detached={true}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          ref={sheetRef}
          style={[styles.headerDetailAppointment]}
          index={-1}
          bottomInset={25}
          handleIndicatorStyle={{ display: 'none' }}
          handleStyle={{ display: 'none' }}
        >
          <BottomSheetView style={[styles.contentAppointment]}>
            <Pressable
              onPress={() => handleSnapPressDetail(0)}
              style={({ pressed }) => [
                styles.wrapButtonDetails,
                { borderBottomWidth: 0.2, borderColor: '#404040', backgroundColor: pressed ? '#303030' : '#262626' }
              ]}
            >
              <TextComponent content='View details' fontSize={17} fontFamily={fontFam.medium} />
            </Pressable>
            <Pressable
              onPress={() => handleCloseOptional()}
              style={({ pressed }) => [
                styles.wrapButtonCancel,
                { borderBottomWidth: 0.2, borderColor: '#404040', backgroundColor: pressed ? '#303030' : '#262626' },
                styles.wrapButtonCancel
              ]}
            >
              <TextComponent content='Cancel' fontSize={17} fontFamily={fontFam.medium} />
            </Pressable>
          </BottomSheetView>
        </BottomSheet>
        <BottomSheet
          detached={true}
          snapPoints={snapDetailPoints}
          enablePanDownToClose={true}
          ref={sheetDetailRef}
          index={-1}
          handleIndicatorStyle={{ display: 'none' }}
          handleStyle={{ display: 'none' }}
        >
          <BottomSheetView style={[styles.contentDetailAppointment]}>
            <TextComponent content='123' />
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    );
  }
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
    marginTop: 20,
    marginBottom: 60
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
  headerDetailAppointment: {
    marginHorizontal: 24
  },
  contentAppointment: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 14
  },
  wrapButtonDetails: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14
  },
  wrapButtonCancel: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  contentDetailAppointment: {
    flex: 1,
    backgroundColor: '#121212',
    borderRadius: 14
  }
});

export default AppointmentScreen;
