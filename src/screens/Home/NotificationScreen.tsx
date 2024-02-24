import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft, Trash } from 'iconsax-react-native';
import React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import ListNotification from './Components/NotificationScreen/ListNotification';
import TabCategory from './Components/NotificationScreen/TabCategory';
import TabHeader from './Components/NotificationScreen/TabHeader';

const NotificationScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={[globalStyle.container, styles.container]}>
      {/* Header */}
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft size='40' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
        <Image style={styles.mainLogo} resizeMode='contain' source={require('../../assets/images/main-logo.png')} />
        <Pressable style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <Trash size='40' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
      </View>

      {/* Tab Header */}
      <TabHeader />

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
