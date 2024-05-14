import globalStyle from '@styles/globalStyle';
import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import Post from 'src/models/class/Post.class';
import HomePostItem from '../../HomeScreen/HomeBody/HomePostItem';

type MainFieldProps = {
  ListHeaderComponent: ReactElement;
  ListFooterComponent: ReactElement;
  data: Post[] | undefined; // fix type item later
};

const MainField = (props: MainFieldProps) => {
  const { data, ListHeaderComponent, ListFooterComponent } = props;
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={(item) => <HomePostItem post={item.item} key={item.item.id} />}
      style={globalStyle.container}
    />
  );
};

export default MainField;
