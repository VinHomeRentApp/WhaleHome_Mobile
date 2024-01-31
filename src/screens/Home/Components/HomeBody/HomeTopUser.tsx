import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

const HomeTopUser = () => {
  return (
    <View style={styles.topUser}>
      <View>
        <View style={styles.topUserTitleContainer}>
          <TextComponent content='Top Estate Agent' styles={styles.topUserTitle} />
          <Pressable>
            <TextComponent content='Explore' />
          </Pressable>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.topUserContainer}>
          <View style={styles.topUserImageContainer}>
            <Image style={styles.topUserImage} resizeMode='contain' source={require('@assets/images/user/kien.jpg')} />
          </View>
          <TextComponent styles={styles.topUserName} content='Kien Dep Trai' />
        </View>
        <View style={styles.topUserContainer}>
          <View style={styles.topUserImageContainer}>
            <Image style={styles.topUserImage} resizeMode='contain' source={require('@assets/images/user/kien.jpg')} />
          </View>
          <TextComponent styles={styles.topUserName} content='Kien Dep Trai' />
        </View>
        <View style={styles.topUserContainer}>
          <View style={styles.topUserImageContainer}>
            <Image style={styles.topUserImage} resizeMode='contain' source={require('@assets/images/user/kien.jpg')} />
          </View>
          <TextComponent styles={styles.topUserName} content='Kien Dep Trai' />
        </View>
        <View style={styles.topUserContainer}>
          <View style={styles.topUserImageContainer}>
            <Image style={styles.topUserImage} resizeMode='contain' source={require('@assets/images/user/kien.jpg')} />
          </View>
          <TextComponent styles={styles.topUserName} content='Kien Dep Trai' />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeTopUser;

const styles = StyleSheet.create({
  topUser: { marginBottom: 100 },
  topUserTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  topUserContainer: {
    marginLeft: 20
  },
  topUserTitle: {
    fontSize: 18,
    fontFamily: fontFam.bold
  },
  topUserImageContainer: {
    height: 100,
    width: 100,
    backgroundColor: typoColor.white1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 20
  },
  topUserImage: {
    height: 90,
    width: 90,
    borderRadius: 50
  },
  topUserName: {
    marginLeft: 8,
    textAlign: 'center',
    width: 90,
    fontFamily: fontFam.bold
  }
});
