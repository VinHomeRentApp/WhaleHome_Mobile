import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import TextComponent from '@components/ui/TextComponent';
import { Category2 } from 'iconsax-react-native';
import RoomItem from '../RoomItem/RoomItem';
import fontFam from '@constants/fontFamilies';
interface Props {
  data: { id: string }[];
}

const ProfileTransaction = ({ data }: Props) => {
  return (
    <View style={[styles.transactionContainer]}>
      <View style={[styles.titleTransaction]}>
        <TextComponent fontSize={18} styles={{ paddingTop: 10 }} fontFamily={fontFam.bold} content='2 transactions' />
        <View style={[styles.containerButton]}>
          <TouchableOpacity style={[styles.buttonMore]}>
            <Category2 size='15' color='#A1A5C1' variant='Bold' />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{ marginBottom: 70 }}
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={(item) => <RoomItem key={item.item.id} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    flex: 0.6
  },
  titleTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
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
