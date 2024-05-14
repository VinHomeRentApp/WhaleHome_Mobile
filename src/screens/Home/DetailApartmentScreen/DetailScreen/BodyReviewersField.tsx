import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import Post from 'src/models/class/Post.class';

type BodyReviewerFieldProps = {
  post: Post;
};

const BodyReviewersField = ({ post }: BodyReviewerFieldProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <View style={styles.reviewContainer}>
      <View>
        <TextComponent styles={styles.reviewTitle} content='Reviews' />
      </View>
      {/* Review Field */}
      <View style={styles.reviewItem}>
        <View style={styles.reviewDetail}>
          <View style={styles.reviewImageContainer}>
            <Image style={styles.reviewImage} resizeMode='cover' source={require('@assets/images/user/kien.jpg')} />
          </View>
          <View>
            <View style={styles.reviewerTitleContainer}>
              <TextComponent styles={styles.reviewerTitle} content='Trung Kien' />
              <StarRating
                starStyle={styles.star}
                starSize={20}
                style={styles.starContainer}
                rating={4}
                onChange={() => {}}
              />
            </View>
            <View style={styles.reviewDescriptionContainer}>
              <TextComponent
                styles={styles.reviewDescription}
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
              />
              <View style={styles.timeContainer}>
                <TextComponent styles={styles.timeReview} content='8 Days Ago' />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Review Field */}
      <View style={styles.reviewItem}>
        <View style={styles.reviewDetail}>
          <View style={styles.reviewImageContainer}>
            <Image style={styles.reviewImage} resizeMode='cover' source={require('@assets/images/user/kien.jpg')} />
          </View>
          <View>
            <View style={styles.reviewerTitleContainer}>
              <TextComponent styles={styles.reviewerTitle} content='Trung Kien' />
              <StarRating
                starStyle={styles.star}
                starSize={20}
                style={styles.starContainer}
                rating={4}
                onChange={() => {}}
              />
            </View>
            <View style={styles.reviewDescriptionContainer}>
              <TextComponent
                styles={styles.reviewDescription}
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
              />
              <View style={styles.timeContainer}>
                <TextComponent styles={styles.timeReview} content='8 Days Ago' />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate('ReviewDetailScreen', { post })}
        style={({ pressed }) => [styles.viewAllButtonContainer, pressed && styles.activeButton]}
      >
        <TextComponent styles={styles.viewAllText} content='View All Reviews' />
      </Pressable>
    </View>
  );
};

export default BodyReviewersField;

const styles = StyleSheet.create({
  reviewContainer: {},
  reviewTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 15
  },
  reviewItem: {
    backgroundColor: typoColor.white1,
    marginHorizontal: 10,
    borderRadius: 15,
    marginBottom: 20,
    padding: 5
  },
  reviewDetail: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  reviewImageContainer: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: typoColor.black1,
    borderRadius: 25,
    marginRight: 15
  },
  reviewImage: {
    height: '100%',
    width: '100%',
    borderRadius: 25
  },
  reviewerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  starContainer: {
    marginRight: 40
  },
  star: {
    marginRight: -5
  },
  reviewerTitle: {
    color: typoColor.black3,
    fontSize: 18,
    fontWeight: 'bold'
  },
  reviewDescriptionContainer: {
    marginTop: 10,
    maxWidth: '95%'
  },
  reviewDescription: {
    color: typoColor.black3
  },
  timeContainer: {
    marginTop: 10
  },
  timeReview: {
    color: typoColor.gray2
  },
  viewAllButtonContainer: {
    height: 60,
    marginHorizontal: 15,
    backgroundColor: typoColor.white1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewAllText: {
    color: typoColor.black2,
    fontSize: 16,
    fontWeight: 'bold'
  },
  activeButton: { backgroundColor: typoColor.yellow1 }
});
