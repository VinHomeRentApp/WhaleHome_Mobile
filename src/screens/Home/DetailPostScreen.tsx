import { RouteProp, useRoute } from '@react-navigation/native';
import { usePostWithLimit } from '@services/queries/post.queries';
import { MainStackParamList } from '@type/navigation.types';
import React from 'react';
import MainField from './Components/DetailPostScreen/MainField';
import RenderDetailPostScreen from './Components/DetailPostScreen/RenderDetailPostScreen';
import FooterButtonComponent from './Components/DetailScreen/FooterButtonComponent';

const DetailPostScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'DetailPostScreen'>>();
  const page = 1;
  const size = 6;
  const field = 'title';
  const postQueries = usePostWithLimit({ page, size, field });
  const { post } = route.params;

  return (
    <MainField
      data={postQueries.data?.data.data.listResult}
      ListHeaderComponent={<RenderDetailPostScreen post={post} />}
      ListFooterComponent={<FooterButtonComponent />}
    />
  );
};

export default DetailPostScreen;
