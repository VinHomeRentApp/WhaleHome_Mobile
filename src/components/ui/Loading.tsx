import globalStyle from '@styles/globalStyle';
import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type LoadingProps = {
  style?: StyleProp<ViewStyle>;
};

const Loading = ({ style }: LoadingProps) => {
  return (
    <View style={[globalStyle.container, styles.container, style]}>
      <ActivityIndicator size={30} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' }
});
