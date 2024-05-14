import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { Category2 } from 'iconsax-react-native';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Post from 'src/models/class/Post.class';
import RoomItem from '../../../../components/room/RoomItem';
interface Props {
  posts: Post[];
}

const ProfileTransaction = ({ posts }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  return (
    <View style={[styles.transactionContainer]}>
      <View style={[styles.titleTransaction]}>
        <TextComponent fontSize={18} styles={{ paddingTop: 10 }} fontFamily={fontFam.bold} content='5 Favorite Posts' />
        <View style={[styles.containerButton]}>
          <TouchableOpacity onPress={() => navigation.navigate('FavoriteScreen')} style={[styles.buttonMore]}>
            <Category2 size='15' color='#A1A5C1' variant='Bold' />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{ marginBottom: 70, marginTop: 30 }}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <RoomItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    flex: 0.6,
    marginTop: 20
  },
  titleTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20
  },
  containerButton: {
    height: 40,
    width: 52,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  buttonMore: {
    height: 24,
    width: 36,
    borderWidth: 1,
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  profileCounterContainer: {
    flexDirection: 'row',
    gap: 10
  }
});

export default ProfileTransaction;
