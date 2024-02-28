import RoomItem from '@components/room/RoomItem';
import React from 'react';
import { FlatList } from 'react-native';
import Post from 'src/models/class/Post.class';

type RoomListProps = {
  posts: Post[];
};

const RoomList = ({ posts }: RoomListProps) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={(item) => <RoomItem item={item.item} key={item.item.id} />}
    />
  );
};

export default RoomList;
