import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { Messages2 } from 'iconsax-react-native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const BodyAdminContact = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')} style={styles.contactContainer}>
      <View style={styles.titleAdminContainer}>
        <Image style={styles.mainLogo} resizeMode='contain' source={require('@assets/images/main-logo.png')} />
        <View style={styles.titleContainer}>
          <TextComponent styles={styles.titleText} content='Whale Home' />
          <TextComponent styles={styles.descriptionText} content='Apartment Admin' />
        </View>
      </View>
      <View style={styles.messageIcon}>
        <Messages2 size='26' color={typoColor.black1} variant='Outline' />
      </View>
    </TouchableOpacity>
  );
};

export default BodyAdminContact;

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: typoColor.white1,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleAdminContainer: {
    marginLeft: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainLogo: {
    height: 60,
    width: 60
  },
  titleContainer: {},
  titleText: {
    color: typoColor.black1,
    fontWeight: 'bold',
    fontSize: 16
  },
  descriptionText: {
    color: typoColor.black1,
    fontSize: 10
  },
  messageIcon: {
    marginRight: 25
  }
});
