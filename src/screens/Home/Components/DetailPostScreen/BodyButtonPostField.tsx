import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { kitchenIconImage } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type BodyButtonPostFieldProps = {
  post: Post;
};

const BodyButtonPostField = ({ post }: BodyButtonPostFieldProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleNavigation = (post: Post) => {
    navigation.push('DetailRoomScreen', { post });
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => handleNavigation(post)}
        style={({ pressed }) => [styles.button, pressed && styles.activeButton]}
      >
        <Image style={styles.facilityIcon} resizeMode='contain' source={kitchenIconImage} />
        <TextComponent styles={styles.textButton} content='View Apartment' />
      </Pressable>
    </View>
  );
};

export default BodyButtonPostField;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  button: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: typoColor.white1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20
  },
  textButton: {
    color: typoColor.black2,
    fontSize: 16,
    fontFamily: fontFam.extraBold
  },
  activeButton: {
    backgroundColor: typoColor.yellow1
  },
  facilityIcon: {
    position: 'relative',
    top: -2,
    margin: 5,
    height: 20,
    width: 20
  }
});
