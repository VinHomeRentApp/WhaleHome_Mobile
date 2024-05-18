import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useBankList, useCardUser } from '@services/queries/card.queries';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { CardAdd } from 'iconsax-react-native';
import React, { useCallback, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import BankCard from '../PaymentMethodScreen/BankCard/BankCard';

const PaymentMethod = () => {
  const {
    state: {
      auth: {
        currentUser: { id }
      }
    }
  } = useRootContext();
  const listBankCardQuery = useBankList();
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['30%'];

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpenCard(true);
  }, []);

  const handleNavigateToCreate = (bankCode: string) => {
    navigation.navigate('CreatePaymentMethod', { bankCode });
    sheetRef.current?.close();
  };

  const cardUserQuery = useCardUser(id as number);

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={[{ paddingHorizontal: 20, marginBottom: 60 }]}>
        <View style={[styles.wrapHeader]}>
          <View>
            <TextComponent content='Payment Method' fontSize={30} fontFamily={fontFam.extraBold} />
            <TextComponent content='Your bank cards will appear below' textColor={typoColor.yellow1} />
          </View>
          <TouchableOpacity style={[styles.wrapAddButton]} onPress={() => handleSnapPress(0)}>
            <CardAdd size='24' color={typoColor.black1} variant='Bold' />
          </TouchableOpacity>
        </View>
        {/* Bank Card */}
        <FlatList data={cardUserQuery.data?.data.data} renderItem={({ item }) => <BankCard bankInformation={item} />} />

        {/* Add */}

        <BottomSheet
          handleStyle={{ backgroundColor: '#e5e5e5', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
          style={{ backgroundColor: 'transperent' }}
          snapPoints={snapPoints}
          ref={sheetRef}
          enablePanDownToClose={true}
          enableOverDrag={false}
          onClose={() => setIsOpenCard(false)}
          enableContentPanningGesture
          index={-1}
        >
          <BottomSheetView style={[styles.bottomSheetStyle]}>
            <TextComponent
              content='Popular banks'
              styles={{ marginBottom: 10, textTransform: 'uppercase' }}
              textColor={typoColor.black1}
              fontFamily={fontFam.bold}
              fontSize={20}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {listBankCardQuery.isLoading ? (
                <>
                  <ActivityIndicator />
                </>
              ) : (
                listBankCardQuery.data?.data.data.map((item) => (
                  <TouchableOpacity
                    style={[styles.bank]}
                    key={item.id}
                    onPress={() => handleNavigateToCreate(item.bankCode)}
                  >
                    <Image source={{ uri: item.url_img ?? '' }} style={{ width: 40, height: 40 }} />
                    <TextComponent content={item.bankCode} textColor='#000' fontFamily={fontFam.bold} />
                  </TouchableOpacity>
                ))
              )}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapHeader: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  wrapCard: {},
  card: {
    width: '100%',
    height: 210,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#99f6e4'
  },
  createButton: {
    marginVertical: 20,
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: typoColor.gray4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  wrapAddButton: {
    padding: 5,
    backgroundColor: typoColor.yellow1,
    borderRadius: 100
  },
  bottomSheetStyle: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 15
  },
  bank: {
    width: '30%',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 15
  }
});

export default PaymentMethod;
