import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import useRootContext from '@hooks/useRootContext';
import { useGetAppointment } from '@services/queries/appointment.queries';
import globalStyle from '@styles/globalStyle';
import { Appointment } from '@type/appointment.type';
import { Buildings2, Calendar2, CalendarRemove, Call, Location, Note } from 'iconsax-react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Alert, FlatList, Pressable, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppointmentCard from './Components/AppointmentCard/AppointmentCard';

type FilterAppointment = 'Upcoming' | 'Past';

const AppointmentScreen = () => {
  const {
    state: {
      auth: {
        currentUser: { id }
      }
    }
  } = useRootContext();
  const [detailAppointment, setDetailAppintment] = useState<Appointment | null>(null);
  const [isOpenOptional, setIsOpenOptional] = useState<boolean>(false);
  const [isOpenDetailAppointment, setIsOpenDetailAppointment] = useState<boolean>(false);
  const [isUpcoming, setIsUpcoming] = useState<FilterAppointment>('Upcoming');

  const sheetRef = useRef<BottomSheet>(null);
  const sheetDetailRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['15%'], []);
  const snapDetailPoints = useMemo(() => ['85%'], []);

  const getAppointmentQuery = useGetAppointment(id as number);
  console.log('');
  const appointmentArr = useMemo(() => {
    const isCurrentDate = new Date().getTime();
    if (getAppointmentQuery.isSuccess) {
      return getAppointmentQuery.data.data.data.filter((item) =>
        isUpcoming === 'Upcoming'
          ? new Date(item.dateTime).getTime() > isCurrentDate
          : new Date(item.dateTime).getTime() < isCurrentDate
      );
    }
  }, [getAppointmentQuery.isSuccess, isUpcoming, getAppointmentQuery.data?.data.data]);

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
    setIsOpenOptional(false);
  }, []);

  const handleChangeFilter = (filter: FilterAppointment) => () => {
    setIsUpcoming(filter);
  };

  const handleCloseDetailAppointment = () => {
    setIsOpenDetailAppointment(false);
  };

  const handeCallPhone = () => {
    Alert.alert(' 0886751110', '', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'Call Now', style: 'destructive' }
    ]);
  };

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <LoadingOverlay isLoading={getAppointmentQuery.isPending} message='Loading' />
      <View style={[styles.wrapContainer, { opacity: isOpenOptional || isOpenDetailAppointment ? 0.2 : 1 }]}>
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
        {getAppointmentQuery.data?.data.data.length !== 0 ? (
          <FlatList
            style={[styles.wrapListAppointment]}
            data={appointmentArr}
            renderItem={({ item }) => <AppointmentCard data={item} onOpenOptional={handleSnapPress} />}
          />
        ) : (
          <View style={[{ height: 300, justifyContent: 'center', alignItems: 'center', gap: 10 }]}>
            <CalendarRemove size='70' color='#404040' />
            <TextComponent content='No appointment founded' textColor='#404040' fontSize={20} />
          </View>
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

      <BottomSheet
        detached={true}
        snapPoints={snapDetailPoints}
        enablePanDownToClose={true}
        ref={sheetDetailRef}
        index={-1}
        onClose={handleCloseDetailAppointment}
        handleIndicatorStyle={{ display: 'none' }}
        handleStyle={{ display: 'none' }}
      >
        <BottomSheetView style={[styles.contentDetailAppointment]}>
          <View style={[styles.wrapContentDetailAppointment]}>
            {/* Wrap Image & Infomation */}
            <View style={[styles.wrapImageContent]}>
              {/* Image */}
              <View style={[styles.wrapImageDetail]}></View>
              {/* Information Content */}
              <View style={[styles.wrapContentInformation]}>
                <TextComponent content='Nguyen Trung Kien' fontSize={20} fontFamily={fontFam.extraBold} />
                <TextComponent content='Owner' fontSize={16} fontFamily={fontFam.light} />
                <TextComponent content='Dong Nai, Viet Nam' fontSize={16} fontFamily={fontFam.light} />

                <TouchableOpacity style={[styles.buttonCallNow]} onPress={handeCallPhone}>
                  <Call size='20' color={typoColor.yellow1} />
                  <TextComponent content='Call now' styles={[styles.textButtonCallNow]} fontFamily={fontFam.light} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Date and Time */}
            <View style={[styles.wrapDateTime]}>
              <View style={[{ flexDirection: 'row', alignContent: 'center', gap: 5 }]}>
                <Buildings2 size='20' color='#cecece' />
                <TextComponent
                  content='Infomation your home'
                  styles={[{ marginBottom: 5 }]}
                  fontFamily={fontFam.medium}
                />
              </View>

              <TextComponent content='30th September, 2020' fontFamily={fontFam.semiBold} fontSize={16} />
              <TextComponent content='10 AM' fontFamily={fontFam.semiBold} fontSize={16} />
              <TextComponent content='10 AM' fontFamily={fontFam.semiBold} fontSize={16} />
            </View>
            <View style={[styles.wrapDateTime]}>
              <View style={[{ flexDirection: 'row', alignContent: 'center', gap: 5 }]}>
                <Calendar2 size='20' color='#cecece' />
                <TextComponent content='Date and Time' styles={[{ marginBottom: 5 }]} fontFamily={fontFam.medium} />
              </View>
              <TextComponent content='30th September, 2020' fontFamily={fontFam.semiBold} fontSize={16} />
              <TextComponent content='10 AM' fontFamily={fontFam.semiBold} fontSize={16} />
            </View>
            <View style={[styles.wrapDateTime]}>
              <View style={[{ flexDirection: 'row', alignContent: 'center', gap: 5 }]}>
                <Location size='20' color='#cecece' />
                <TextComponent
                  content='Address'
                  styles={[{ marginBottom: 5 }]}
                  textColor='#cecece'
                  fontFamily={fontFam.medium}
                />
              </View>
              <TextComponent
                content='Đường Chu Huy Mân, Khu đô thị sinh thái Vinhomes Riverside, Phường Phúc Lợi, Quận Long Biên, Thành phố Hà Nội, Việt Nam.'
                fontFamily={fontFam.semiBold}
                fontSize={16}
              />
            </View>
            <View style={[styles.wrapDateTime]}>
              <View style={[{ flexDirection: 'row', alignContent: 'center', gap: 5 }]}>
                <Note size='20' color='#cecece' />
                <TextComponent
                  content='Note'
                  styles={[{ marginBottom: 5 }]}
                  textColor='#cecece'
                  fontFamily={fontFam.medium}
                />
              </View>

              <TextComponent content='Please call me 3pm' fontFamily={fontFam.semiBold} fontSize={16} />
            </View>
          </View>
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
  },
  // Detail Appointment
  contentDetailAppointment: {
    flex: 1,
    backgroundColor: '#151515',
    borderRadius: 14,
    padding: 20
  },
  wrapContentDetailAppointment: {
    flex: 1
  },
  wrapImageContent: {
    flexDirection: 'row',
    gap: 20
  },
  wrapImageDetail: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  wrapContentInformation: {},
  buttonCallNow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: typoColor.yellow1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120
  },
  textButtonCallNow: {
    fontSize: 16,
    fontFamily: fontFam.bold,
    color: typoColor.yellow1
  },
  wrapDateTime: {
    marginTop: 15,
    backgroundColor: '#242424',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15
  }
});

export default AppointmentScreen;
