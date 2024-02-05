import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BodyAdminContact from './Components/DetailScreen/BodyAdminContact';
import BodyButtonField from './Components/DetailScreen/BodyButtonField';
import BodyFacilityField from './Components/DetailScreen/BodyFacilityField';
import BodyTitleField from './Components/DetailScreen/BodyTitleField';
import TopOverview from './Components/DetailScreen/TopOverview';
import BodyCostLivingField from './Components/DetailScreen/BodyCostLivingField';

const DetailScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ScrollView>
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
          <View style={styles.reviewContainer}>
            <View>
              <TextComponent styles={styles.reviewTitle} content='Reviews' />
            </View>
            <View style={styles.reviewItem}>
              <View style={styles.reviewDetail}>
                <View style={styles.reviewImageContainer}>
                  <Image
                    style={styles.reviewImage}
                    resizeMode='cover'
                    source={require('@assets/images/user/kien.jpg')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  detailContainer: {},
  reviewContainer: {},
  reviewTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10
  },
  reviewItem: {
    backgroundColor: typoColor.white1,
    marginHorizontal: 10,
    borderRadius: 15
  },
  reviewDetail: {
    padding: 10
  },

  reviewImageContainer: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: typoColor.black1,
    borderRadius: 25
  },
  reviewImage: {
    height: '100%',
    width: '100%',
    borderRadius: 25
  }
});
