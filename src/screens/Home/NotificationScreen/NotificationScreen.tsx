import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2, Trash } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import ListNotification from './NotificationScreenComponents/ListNotification';
import TabCategory from './NotificationScreenComponents/TabCategory';
import TabHeader from './NotificationScreenComponents/TabHeader';
import ChatList from '../ChatScreen/ChatListScreen';

const NotificationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [tabNotification, setTabNotification] = useState(true);
  const [tabMessages, setTabMessages] = useState(false);
  return (
    <SafeAreaView style={[globalStyle.container, styles.container]}>
      {/* Header */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowCircleLeft2 size='35' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
        <Image style={styles.mainLogo} resizeMode='contain' source={require('../../../assets/images/main-logo.png')} />
        <Pressable style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <Trash size='35' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
      </View>

      {/* Tab Header */}
      <TabHeader
        setTabMessages={setTabMessages}
        setTabNotification={setTabNotification}
        tabMessages={tabMessages}
        tabNotification={tabNotification}
      />

      {tabNotification && (
        <>
          {/* Categories tab */}
          <TabCategory />

          <View>
            <TextComponent styles={styles.notificationTitle} content='Today' />
          </View>
          {/* List Notification */}
          <ListNotification />

          <Pressable style={({ pressed }) => [styles.viewAllButtonContainer, pressed && styles.activeButton]}>
            <TextComponent styles={styles.viewAllText} content='View All Notifications' />
          </Pressable>
        </>
      )}

      {tabMessages && <ChatList />}
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20
  },
  mainLogo: {
    position: 'relative',
    top: -10,
    height: 65,
    width: 65
  },
  notificationTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 15
  },
  viewAllButtonContainer: {
    height: 60,
    marginHorizontal: 15,
    backgroundColor: typoColor.white1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  viewAllText: {
    color: typoColor.black2,
    fontSize: 16,
    fontWeight: 'bold'
  },
  activeButton: { backgroundColor: typoColor.yellow1 }
});
