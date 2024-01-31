import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import RoomItem from '../RoomItem/RoomItem';

type searchRenderType = {
  data: { id: string }[];
};

const SearchRender = ({ data }: searchRenderType) => {
  return (
    <>
      <View style={styles.titleFoundRoomField}>
        <TextComponent styles={styles.titleFoundRooms} content='Found 28 Rooms' />
        <Pressable>
          <Image style={styles.filterIcon} resizeMode='contain' source={require('@assets/images/filterIcon.png')} />
        </Pressable>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={(item) => <RoomItem key={item.item.id} />}
      />
    </>
  );
};

export default SearchRender;

const styles = StyleSheet.create({
  titleFoundRoomField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 4,
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
