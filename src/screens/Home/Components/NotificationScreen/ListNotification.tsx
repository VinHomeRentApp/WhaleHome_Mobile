import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const ListNotification = () => {
  return (
    <ScrollView>
      <View style={styles.notificationContainer}>
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
                  styles={styles.notificationDescription}
                  content='Just messaged you. Check the message in message tab.'
                />

                <View style={styles.timeContainer}>
                  <TextComponent styles={styles.timeNotification} content='10 mins ago' />
                </View>
              </View>
            </View>
          </View>
        </View>
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
                  styles={styles.notificationDescription}
                  content='Just messaged you. Check the message in message tab.'
                />

                <View style={styles.timeContainer}>
                  <TextComponent styles={styles.timeNotification} content='10 mins ago' />
                </View>
              </View>
            </View>
          </View>
        </View>
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
                  styles={styles.notificationDescription}
                  content='Just messaged you. Check the message in message tab.'
                />

                <View style={styles.timeContainer}>
                  <TextComponent styles={styles.timeNotification} content='10 mins ago' />
                </View>
              </View>
            </View>
          </View>
        </View>
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
                  styles={styles.notificationDescription}
                  content='Just messaged you. Check the message in message tab.'
                />

                <View style={styles.timeContainer}>
                  <TextComponent styles={styles.timeNotification} content='10 mins ago' />
                </View>
              </View>
            </View>
          </View>
        </View>
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
                  styles={styles.notificationDescription}
                  content='Just messaged you. Check the message in message tab.'
                />

                <View style={styles.timeContainer}>
                  <TextComponent styles={styles.timeNotification} content='10 mins ago' />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ListNotification;

const styles = StyleSheet.create({
  notificationContainer: {},

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
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: typoColor.black1,
    borderRadius: 25,
    marginRight: 15
  },
  notificationImage: {
    height: '100%',
    width: '100%',
    borderRadius: 25
  },

  notificationTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notificationerTitle: {
    color: typoColor.black3,
    fontSize: 18,
    fontWeight: 'bold'
  },
  notificationDescriptionContainer: {
    marginTop: 10,
    maxWidth: '95%'
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
