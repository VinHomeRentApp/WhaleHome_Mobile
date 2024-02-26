import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '@type/navigation.types';
import FooterAnotherRoomField from './Components/DetailScreen/FooterAnotherRoomField';
import FooterButtonComponent from './Components/DetailScreen/FooterButtonComponent';
import RenderDetailScreen from './Components/DetailScreen/RenderDetailScreen';

const data = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];

const DetailScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'DetailRoomScreen'>>();
  const { post } = route.params;

  return (
    <FooterAnotherRoomField
      data={data}
      ListHeaderComponent={<RenderDetailScreen post={post} />}
      ListFooterComponent={<FooterButtonComponent />}
    />
  );
};

export default DetailScreen;
