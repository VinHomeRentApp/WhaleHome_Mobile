import RoomItem from '@components/room/RoomItem';
import useRootContext from '@hooks/useRootContext';
import globalStyle from '@styles/globalStyle';
import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';

type FooterAnotherRoomFieldProps = {
  ListHeaderComponent: ReactElement;
  ListFooterComponent: ReactElement;
};

const FooterAnotherRoomField = (props: FooterAnotherRoomFieldProps) => {
  const { state } = useRootContext();
  const {
    post: { posts }
  } = state;
  const { ListHeaderComponent, ListFooterComponent } = props;
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={(item) => <RoomItem item={item.item} key={item.item.id} />}
      style={globalStyle.container}
    />
  );
};

export default FooterAnotherRoomField;
