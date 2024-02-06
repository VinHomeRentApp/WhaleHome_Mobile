import Seperate from '@components/ui/SeperateOr/SeperateOr';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BodyAdminContact from './BodyAdminContact';
import BodyButtonField from './BodyButtonField';
import BodyCostLivingField from './BodyCostLivingField';
import BodyFacilityField from './BodyFacilityField';
import BodyReviewersField from './BodyReviewersField';
import BodyTitleField from './BodyTitleField';
import TopOverview from './TopOverview';

const RenderDetailScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top-Overview Image Background */}
        <TopOverview />

        {/* Body-Overview */}
        <View style={styles.detailContainer}>
          {/* Body Title field */}
          <BodyTitleField />

          {/* Body Button Field */}
          <BodyButtonField />

          {/* Body Facilities  */}
          <BodyFacilityField />

          {/* Body Admin Contact */}
          <BodyAdminContact />

          {/* Body Cost of Living */}
          <BodyCostLivingField />

          {/* Review Field */}
          <BodyReviewersField />
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
