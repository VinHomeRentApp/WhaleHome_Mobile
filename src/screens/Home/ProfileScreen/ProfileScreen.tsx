import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { UPDATING, defaultUser } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useGetAppointment } from '@services/queries/appointment.queries';
import { useGetContractById } from '@services/queries/contract.queries';
import globalStyle from '@styles/globalStyle';
import { Man, Woman } from 'iconsax-react-native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ProfileTransaction from './ProfileTransaction/ProfileTransaction';

const ProfileScreen = () => {
  const {
    state: {
      auth: { currentUser },
      post: { posts }
    }
  } = useRootContext();

  const { data: contractResponse } = useGetContractById(currentUser.id as number);
  const { data: appointmentResponse } = useGetAppointment(currentUser.id as number);

  return (
    <View style={[globalStyle.container]}>
      <View style={[styles.containerProfile]}>
        <View style={[styles.profileInfo]}>
          <Image style={[styles.profileImage]} source={currentUser.image ? { uri: currentUser.image } : defaultUser} />
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        <View style={[styles.fullNameContainer]}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
            <TextComponent
              content={`${currentUser.fullName || UPDATING}`}
              fontSize={18}
              textColor={typoColor.yellow1}
              fontFamily={fontFam.bold}
            />
            {currentUser.gender === 'Male' ? (
              <Man size='16' color={typoColor.blue2} />
            ) : (
              <Woman size='16' color='#FF8A65' />
            )}
          </View>

          <View style={[{ marginVertical: 2 }]}></View>
          <TextComponent
            content={currentUser.email || 'Updating...'}
            fontSize={14}
            textColor={typoColor.white1}
            fontFamily={fontFam.regular}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={styles.wrapDetailItem}>
            <TextComponent styles={styles.wrapDetailItemText} content={'5'} />
            <TextComponent styles={styles.wrapDetailItemTextTitle} content={'Apartments'} />
          </View>
          <View style={{ borderWidth: 1, height: 45, borderColor: typoColor.gray1 }}></View>
          <View style={styles.wrapDetailItem}>
            <TextComponent
              styles={styles.wrapDetailItemText}
              content={`${contractResponse?.data.data ? contractResponse?.data.data.length : 0}`}
            />
            <TextComponent styles={styles.wrapDetailItemTextTitle} content={'Contracts'} />
          </View>
          <View style={{ borderWidth: 1, height: 45, borderColor: typoColor.gray1 }}></View>
          <View style={styles.wrapDetailItem}>
            <TextComponent
              styles={styles.wrapDetailItemText}
              content={`${appointmentResponse?.data.data ? appointmentResponse?.data.data.length : 0}`}
            />
            <TextComponent styles={styles.wrapDetailItemTextTitle} content={'Appointments'} />
          </View>
        </View>
      </View>
      <ProfileTransaction posts={posts} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerProfile: {
    flex: 0.4,
    alignItems: 'center',
    marginHorizontal: 15,
    paddingTop: 20
  },
  profileInfo: {
    width: 100,
    height: 100,
    marginHorizontal: 'auto'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover'
  },
  fullNameContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapInformation: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center'
  },
  wrapButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: typoColor.yellow1
  },
  wrapCounter: {
    paddingHorizontal: 20,
    borderWidth: 1
  },
  wrapDetailItem: {
    width: '30%',
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red'
  },
  wrapDetailItemText: {
    fontSize: 24,
    fontFamily: fontFam.extraBold,
    color: typoColor.yellow1
  },
  wrapDetailItemTextTitle: {
    fontSize: 13,
    fontFamily: fontFam.medium,
    color: typoColor.gray1
  }
});

export default ProfileScreen;
