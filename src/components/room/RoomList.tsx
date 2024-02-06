import RoomItem from '@components/room/RoomItem';
import React from 'react';
import { FlatList } from 'react-native';

type RoomListProps = {
  data: { id: string }[]; // fix type item later
};

const RoomList = ({ data }: RoomListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={(item) => <RoomItem key={item.item.id} />}
    />
  );
};

export default RoomList;
