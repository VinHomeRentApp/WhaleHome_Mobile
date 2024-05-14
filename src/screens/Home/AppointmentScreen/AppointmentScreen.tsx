import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, RefreshControl, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import useRootContext from '@hooks/useRootContext';
import { useGetAppointment } from '@services/queries/appointment.queries';
import globalStyle from '@styles/globalStyle';
import { Appointment } from '@type/appointment.type';
import NotFound from '../Components/NotFound/NotFound';
import AppointmentCard from './AppointmentCard/AppointmentCard';
import BottomSheetDetailAppointment from './BottomSheetDetailAppointment/BottomSheetDetailAppointment';

type FilterAppointment = 'Upcoming' | 'Past';

const AppointmentScreen = () => {
  const {
    state: {
      auth: {
        currentUser: { id }
      }
    }
  } = useRootContext();
  const [isRefreshScreen, setIsRefreshScreen] = useState<boolean>(false);
  const [isOpenOptional, setIsOpenOptional] = useState<boolean>(false);
  const [isOpenDetailAppointment, setIsOpenDetailAppointment] = useState<boolean>(false);
  const [appointment, setAppointment] = useState<Appointment>();
  const [isUpcoming, setIsUpcoming] = useState<FilterAppointment>('Upcoming');

  const sheetRef = useRef<BottomSheet>(null);
  const sheetDetailRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['15%'], []);
  const snapDetailPoints = useMemo(() => ['85%'], []);

  const getAppointmentQuery = useGetAppointment(id as number);
  const appointmentArr = useMemo(() => {
    if (getAppointmentQuery.isSuccess) {
      return getAppointmentQuery.data.data.data.filter((item) =>
        isUpcoming === 'Upcoming' ? item.statusAppointment === 'Pending' : item.statusAppointment === 'Completed'
      );
    }
  }, [getAppointmentQuery.isSuccess, isUpcoming, getAppointmentQuery.data?.data.data]);

  const handleSnapPress = useCallback((index: number, myStr: Appointment) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpenOptional(true);
    setAppointment(myStr);
  }, []);

  const handleCloseOptional = () => {
    sheetRef.current?.close();
    setIsOpenOptional(false);
  };

  const handleSnapPressDetail = useCallback((index: number) => {
    sheetDetailRef.current?.snapToIndex(index);
    sheetRef.current?.close();
    setIsOpenDetailAppointment(true);
    setIsOpenOptional(false);
  }, []);

  const handleChangeFilter = (filter: FilterAppointment) => () => {
    setIsUpcoming(filter);
  };

  const handleCloseDetailAppointment = () => {
    sheetDetailRef.current?.close();
    setIsOpenDetailAppointment(false);
  };

  const onRefresh = async () => {
    setIsRefreshScreen(true);
    await getAppointmentQuery.refetch();
    setIsRefreshScreen(false);
  };

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={[styles.wrapContainer, { opacity: isOpenDetailAppointment || isOpenOptional ? 0.2 : 1 }]}>
        <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 20 }]}>
          <TextComponent content='My Appointment' fontSize={30} fontFamily={fontFam.extraBold} />

          <View
            style={[
              {
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center'
              }
            ]}
          >
            <TextComponent
              content={getAppointmentQuery.data?.data.data.length as number}
              fontFamily={fontFam.extraBold}
              fontSize={20}
              textColor='#000'
            />
          </View>
        </View>
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
              content='Completed'
              fontSize={15}
              textColor={isUpcoming === 'Past' ? typoColor.black1 : typoColor.white1}
              fontFamily={fontFam.semiBold}
            />
          </TouchableOpacity>
        </View>
        {/* Appointment List Upcoming*/}
        {getAppointmentQuery.data?.data.data.length === 0 ? (
          <NotFound />
        ) : (
          <FlatList
            refreshControl={<RefreshControl tintColor='#fff' refreshing={isRefreshScreen} onRefresh={onRefresh} />}
            style={[styles.wrapListAppointment]}
            data={appointmentArr}
            renderItem={({ item }) => <AppointmentCard data={item} onOpenOptional={handleSnapPress} />}
          />
        )}
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

      <BottomSheetDetailAppointment
        sheetDetailRef={sheetDetailRef}
        snapPoints={snapDetailPoints}
        data={appointment as Appointment}
        onClose={handleCloseDetailAppointment}
      />
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
  }
});

export default AppointmentScreen;
