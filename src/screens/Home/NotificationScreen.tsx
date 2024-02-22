import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft, Trash } from 'iconsax-react-native';
import React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const NotificationScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={[globalStyle.container]}>
      {/* Header */}
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft size='40' color={typoColor.yellow1} variant='Outline' />
        </Pressable>
        <Image style={styles.mainLogo} resizeMode='contain' source={require('../../assets/images/main-logo.png')} />
        <Pressable style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <Trash size='40' color={typoColor.yellow1} variant='Outline' />
        </Pressable>
      </View>

      <View>
        <View>
          <TextComponent content='Notification' />
        </View>
        <View>
          <TextComponent content='Messages' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {},
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
  }
});
