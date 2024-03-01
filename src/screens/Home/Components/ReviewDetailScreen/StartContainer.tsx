import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { Star1 } from 'iconsax-react-native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const StartContainer = () => {
  return (
    <View style={{ height: 80 }}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.starReviewContainer}>
        <View style={[styles.starReviewItem, styles.activeItem]}>
          <Star1 size='22' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={[styles.starText, styles.activeText]} content='All' />
        </View>

        <View style={styles.starReviewItem}>
          <Star1 size='22' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.starText} content='1' />
        </View>

        <View style={styles.starReviewItem}>
          <Star1 size='22' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.starText} content='2' />
        </View>

        <View style={styles.starReviewItem}>
          <Star1 size='22' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.starText} content='3' />
        </View>

        <View style={styles.starReviewItem}>
          <Star1 size='22' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.starText} content='4' />
        </View>

        <View style={styles.starReviewItem}>
          <Star1 size='22' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.starText} content='5' />
        </View>
      </ScrollView>
    </View>
  );
};

export default StartContainer;

const styles = StyleSheet.create({
  starReviewContainer: {
    padding: 10
  },
  starReviewItem: {
    margin: 5,
    padding: 5,
    borderRadius: 20,
    backgroundColor: typoColor.white1,
    height: 40,
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  starText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: fontFam.bold,
    color: typoColor.black1
  },
  activeItem: {
    backgroundColor: typoColor.yellow2
  },
  activeText: {
    color: typoColor.white1
  }
});
