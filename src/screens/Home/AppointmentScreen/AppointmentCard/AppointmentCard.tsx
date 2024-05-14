import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { bedRoomIconImage } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import { Appointment } from '@type/appointment.type';
import { convertDate } from '@utils/helper';
import { Clock, MoreCircle } from 'iconsax-react-native';
import React from 'react';
import { Image, Linking, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  data: Appointment;
  // eslint-disable-next-line no-unused-vars
  onOpenOptional: (index: number, appointmentDetail: Appointment) => void;
};

const AppointmentCard = ({ data, onOpenOptional }: Props) => {
  return (
    <View style={[styles.wrapAppointment]}>
      {/* Header Appointment */}
      <View style={[styles.wrapHeaderAppointment]}>
        <View style={[styles.wrapDatePart]}>
          <TextComponent content='Appointment Date' textColor={typoColor.gray1} />
          <View style={[styles.wrapOclock]}>
            <Clock size='20' color='#fff' />
            <TextComponent
              content={`${convertDate(data.dateTime)}`}
              textColor={typoColor.white1}
              fontFamily={fontFam.bold}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => onOpenOptional(0, data)}>
          <MoreCircle size='32' color={typoColor.gray1} />
        </TouchableOpacity>
      </View>

      {/* Wrap Information Owner */}
      <View style={[styles.wrapInformation]}>
        {/* Image */}
        <View
          style={[
            { padding: 5, borderWidth: 0.2, borderRadius: 50, borderColor: '#f8f8f899', backgroundColor: '#393939d9' }
          ]}
        >
          <Image source={data?.userImage ? { uri: data.userImage } : bedRoomIconImage} style={[styles.wrapImage]} />
        </View>
        {/* Information */}
        <View>
          <TextComponent content={data.userName} fontSize={16} fontFamily={fontFam.extraBold} />
          <TextComponent content='Owner' fontSize={14} textColor={typoColor.yellow1} />
        </View>
      </View>
    </View>
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
    position: 'relative',
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10
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

export default AppointmentCard;
