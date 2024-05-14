/* eslint-disable @typescript-eslint/no-var-requires */
import Seperate from '@components/ui/SeperateOr/SeperateOr';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

import BodyButtonPostField from './BodyButtonPostField';
import BodyCommentField from './BodyCommentField';
import BodyDescriptionField from './BodyDescriptionField';
import BodyTitlePostField from './BodyTitlePostField';
import TopOverviewPost from './TopOverviewPost';
import BodyCostLivingField from '@screens/Home/DetailApartmentScreen/DetailScreen/BodyCostLivingField';

type RenderDetailPostScreenProps = {
  post: Post;
};

const RenderDetailPostScreen = ({ post }: RenderDetailPostScreenProps) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Overview Post */}
        <TopOverviewPost post={post} />

        {/* Body-Overview */}
        <View style={styles.detailContainer}>
          {/* Body Title field */}
          <BodyTitlePostField post={post} />

          {/* Description Field */}
          <BodyDescriptionField post={post} />

          {/* Body Button Field */}
          <BodyButtonPostField post={post} />

          {/* Body Cost of Living */}
          <BodyCostLivingField post={post} />

          {/* Review Field */}
          <BodyCommentField />

          <View style={styles.otherField}>
            <Seperate content='Other' />
          </View>
          <View style={styles.titleFoundRoomField}>
            <TextComponent styles={styles.titleFoundRooms} content='Another Posts' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RenderDetailPostScreen;

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
