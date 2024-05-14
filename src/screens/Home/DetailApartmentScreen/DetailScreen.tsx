import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '@type/navigation.types';
import FooterAnotherRoomField from './DetailScreen/FooterAnotherRoomField';
import FooterButtonComponent from './DetailScreen/FooterButtonComponent';
import RenderDetailScreen from './DetailScreen/RenderDetailScreen';

const DetailScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'DetailRoomScreen'>>();
  const { post } = route.params;

  return (
    <FooterAnotherRoomField
      ListHeaderComponent={<RenderDetailScreen post={post} />}
      ListFooterComponent={<FooterButtonComponent />}
    />
  );
};

export default DetailScreen;
