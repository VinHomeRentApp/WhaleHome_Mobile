import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const ChatListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')} style={styles.notificationContainer}>
        {/* notification Field */}
        <View style={styles.notificationItem}>
          <View style={styles.notificationDetail}>
            <View style={styles.notificationImageContainer}>
              <Image
                style={styles.notificationImage}
                resizeMode='cover'
                source={require('@assets/images/user/kien.jpg')}
              />
            </View>

            <View>
              <View style={styles.notificationTitleContainer}>
                <TextComponent styles={styles.notificationerTitle} content='Trung Kien' />
              </View>
              <View style={styles.notificationDescriptionContainer}>
                <TextComponent
                  numberOfLines={1}
                  styles={styles.notificationDescription}
                  content='Hi There I Want to talk to you! There I Want to talk to you There I Want to talk to you There I Want to talk to you There I Want to talk to you There I Want to talk to you'
                />

                <View style={styles.timeContainer}>
                  <TextComponent styles={styles.timeNotification} content='10 mins ago' />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  notificationContainer: {
    marginTop: 20
  },

  notificationItem: {
    backgroundColor: typoColor.white1,
    marginHorizontal: 10,
    borderRadius: 15,
    marginBottom: 20
  },
  notificationDetail: {
    padding: 10,
    flexDirection: 'row'
  },
  notificationImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '20%',
    borderColor: typoColor.black1,
    borderRadius: 25,
    marginRight: 15
  },
  notificationImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20
  },

  notificationTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notificationerTitle: {
    color: typoColor.black3,
    fontSize: 18,
    fontFamily: fontFam.bold
  },
  notificationDescriptionContainer: {
    marginTop: 10,
    width: '85%'
  },
  notificationDescription: {
    color: typoColor.black3
  },
  timeContainer: {
    marginTop: 10
  },
  timeNotification: {
    color: typoColor.gray2
  }
});
