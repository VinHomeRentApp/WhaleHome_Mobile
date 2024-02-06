import RoomItem from '@components/room/RoomItem';
import globalStyle from '@styles/globalStyle';
import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';

type FooterAnotherRoomFieldProps = {
  ListHeaderComponent: ReactElement;
  ListFooterComponent: ReactElement;
  data: { id: string }[]; // fix type item later
};

const FooterAnotherRoomField = (props: FooterAnotherRoomFieldProps) => {
  const { data, ListHeaderComponent, ListFooterComponent } = props;
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={(item) => <RoomItem key={item.item.id} />}
      style={globalStyle.container}
    />
  );
};

export default FooterAnotherRoomField;
