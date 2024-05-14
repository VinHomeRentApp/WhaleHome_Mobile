import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

type SearchRenderProps = {
  postLength: number;
};

const SearchRender = ({ postLength }: SearchRenderProps) => {
  const {
    state: {
      auth: { currentUser }
    }
  } = useRootContext();

  return (
    <>
      <View style={styles.titleFoundRoomField}>
        <TextComponent styles={styles.titleFoundRooms} content={`Found ${postLength} Posts`} />
        <Pressable style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <Image style={styles.filterIcon} resizeMode='contain' source={require('@assets/images/filterIcon.png')} />
        </Pressable>
      </View>
    </>
  );
};

export default SearchRender;

const styles = StyleSheet.create({
  titleFoundRoomField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  titleFoundRooms: {
    fontSize: 18,
    fontFamily: fontFam.bold
  },
  filterIcon: {
    height: 20
  }
});
