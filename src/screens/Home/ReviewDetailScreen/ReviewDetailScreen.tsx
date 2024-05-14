import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { RouteProp, useRoute } from '@react-navigation/native';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ReviewPostItem from './ReviewDetailScreenComponents/ReviewPostItem';
import StartContainer from './ReviewDetailScreenComponents/StartContainer';
import UserReviews from './ReviewDetailScreenComponents/UserReviews';

const ReviewDetailScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'ReviewDetailScreen'>>();
  const { post } = route.params;

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ReviewPostItem post={post} />

      {/* Star Container */}
      <StartContainer />

      {/* User Reviews */}
      <View>
        <TextComponent styles={styles.reviewTitle} content='User Reviews' />
      </View>
      <UserReviews />
    </SafeAreaView>
  );
};

export default ReviewDetailScreen;

const styles = StyleSheet.create({
  reviewTitle: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 15,
    fontFamily: fontFam.bold
  }
});
