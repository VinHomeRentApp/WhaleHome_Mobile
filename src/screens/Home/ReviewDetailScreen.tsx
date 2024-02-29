import { RouteProp, useRoute } from '@react-navigation/native';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ReviewPostItem from './Components/ReviewDetailScreen/ReviewPostItem';
import StartContainer from './Components/ReviewDetailScreen/StartContainer';
import UserReviews from './Components/ReviewDetailScreen/UserReviews';

const ReviewDetailScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'ReviewDetailScreen'>>();
  const { post } = route.params;

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ReviewPostItem post={post} />

      {/* Star Container */}
      <StartContainer />

      {/* User Reviews */}
      <UserReviews />
    </SafeAreaView>
  );
};

export default ReviewDetailScreen;

const styles = StyleSheet.create({});
