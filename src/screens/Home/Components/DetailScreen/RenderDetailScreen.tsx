import Seperate from '@components/ui/SeperateOr/SeperateOr';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from 'src/models/class/Post.class';
import BodyAdminContact from '../../../../components/ui/AdminContact';
import BodyButtonField from './BodyButtonField';
import BodyCostLivingField from './BodyCostLivingField';
import BodyFacilityField from './BodyFacilityField';
import BodyInformationRoom from './BodyInformationRoom';
import BodyReviewersField from './BodyReviewersField';
import BodyTitleField from './BodyTitleField';
import TopOverview from './TopOverview';

type RenderDetailScreenProps = {
  post: Post;
};

const RenderDetailScreen = ({ post }: RenderDetailScreenProps) => {
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top-Overview Image Background */}
        <TopOverview post={post} />

        {/* Body-Overview */}
        <View style={styles.detailContainer}>
          {/* Body Title field */}
          <BodyTitleField post={post} />

          {/* Body Button Field */}
          <BodyButtonField apartmentClass={post.apartment.apartmentClass} />

          {/* Body Facilities  */}
          <BodyFacilityField apartment={post.apartment} />

          <BodyInformationRoom apartment={post.apartment} />

          {/* Body Admin Contact */}
          <BodyAdminContact />

          {/* Body Cost of Living */}
          <BodyCostLivingField post={post} />

          {/* Review Field */}
          <BodyReviewersField post={post} />
          <View style={styles.otherField}>
            <Seperate content='Other' />
          </View>
          <View style={styles.titleFoundRoomField}>
            <TextComponent styles={styles.titleFoundRooms} content='Another Rooms' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RenderDetailScreen;

const styles = StyleSheet.create({
  detailContainer: {},
  otherField: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleFoundRoomField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 4,
    marginBottom: 5
  },
  titleFoundRooms: {
    fontSize: 18,
    fontFamily: fontFam.bold
  }
});
