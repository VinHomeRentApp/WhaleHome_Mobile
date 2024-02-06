import FooterAnotherRoomField from './Components/DetailScreen/FooterAnotherRoomField';
import FooterButtonComponent from './Components/DetailScreen/FooterButtonComponent';
import RenderDetailScreen from './Components/DetailScreen/RenderDetailScreen';

const data = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];

const DetailScreen = () => {
  return (
    <FooterAnotherRoomField
      data={data}
      ListHeaderComponent={<RenderDetailScreen />}
      ListFooterComponent={<FooterButtonComponent />}
    />
  );
};

export default DetailScreen;
