import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@type/navigation.types';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type BodyButtonPostFieldProps = {
  post: Post;
};

const BodyButtonPostField = ({ post }: BodyButtonPostFieldProps) => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => navigation.navigate('DetailRoomScreen', { post })}
        style={({ pressed }) => [styles.button, pressed && styles.activeButton]}
      >
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
    width: '90%',
    backgroundColor: typoColor.white1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20
  },
  textButton: {
    color: typoColor.black2,
    fontWeight: 'bold',
    fontSize: 16
  },
  activeButton: {
    backgroundColor: typoColor.yellow1
  }
});
