import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGetContractById } from '@services/queries/contract.queries';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { FilterSquare, SearchNormal1 } from 'iconsax-react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ContractComponent from './Components/ContractComponent/ContractComponent';

const ContractScreen = () => {
  const {
    state: {
      auth: {
        currentUser: { id }
      }
    }
  } = useRootContext();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpenOptional, setIsOpenOptional] = useState<boolean>(false);

  const snapPoints = useMemo(() => ['25%'], []);

  const getContractListQuery = useGetContractById(id as number);
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpenOptional(true);
  }, []);

  const handleCloseOptional = () => {
    sheetRef.current?.close();
    setIsOpenOptional(false);
  };

  const handleNavigateToDetailScreen = () => {
    handleCloseOptional();
    navigation.navigate('DetailContract', { contractId: 1 });
  };

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <LoadingOverlay isLoading={getContractListQuery.isLoading} message='Loading contract' />
      <View style={[styles.wrapContainer, { opacity: isOpenOptional ? 0.2 : 1 }]}>
        <View style={[styles.wrapHeaderTitle]}>
          <TextComponent content='My Contract' fontSize={30} fontFamily={fontFam.extraBold} />
          <View
            style={[
              {
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center'
              }
            ]}
          >
            <TextComponent
              content={getContractListQuery.data?.data.data.length ?? 0}
              fontFamily={fontFam.extraBold}
              fontSize={20}
              textColor='#000'
            />
          </View>
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        {/* Search */}
        <View style={[styles.wrapSearch]}>
          <View style={[styles.wrapContentSearchInput]}>
            <TextInput
              placeholder='Search contracts'
              placeholderTextColor={typoColor.white1}
              style={[styles.textInput]}
            />
            <SearchNormal1 size='25' color={typoColor.white1} />
          </View>
          <TouchableOpacity style={[styles.wrapFilterButton]}>
            <FilterSquare size='40' color={typoColor.yellow1} variant='Bold' />
          </TouchableOpacity>
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        {/* Contract List */}

        <FlatList
          data={getContractListQuery.data?.data.data}
          renderItem={({ item }) => <ContractComponent key={item.id} data={item} onOpenOptional={handleSnapPress} />}
        />
      </View>
      <BottomSheet
        detached={true}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        ref={sheetRef}
        style={[styles.headerDetailAppointment]}
        index={-1}
        bottomInset={25}
        handleIndicatorStyle={{ display: 'none' }}
        handleStyle={{ display: 'none' }}
      >
        <BottomSheetView style={[styles.contentAppointment]}>
          <Pressable
            onPress={handleNavigateToDetailScreen}
            style={({ pressed }) => [
              styles.wrapButtonDetails,
              { borderBottomWidth: 0.2, borderColor: '#404040', backgroundColor: pressed ? '#303030' : '#262626' }
            ]}
          >
            <TextComponent content='View detail' fontSize={17} fontFamily={fontFam.medium} />
          </Pressable>

          {/* DownLoad link */}
          <Pressable
            style={({ pressed }) => [
              styles.wrapButtonDetails,
              { borderBottomWidth: 0.2, borderColor: '#404040', backgroundColor: pressed ? '#303030' : '#262626' }
            ]}
          >
            <TextComponent content='Download contract' fontSize={17} fontFamily={fontFam.medium} />
          </Pressable>
          {/* End Download link */}

          <Pressable
            onPress={() => handleCloseOptional()}
            style={({ pressed }) => [
              styles.wrapButtonCancel,
              { borderBottomWidth: 0.2, borderColor: '#404040', backgroundColor: pressed ? '#303030' : '#262626' },
              styles.wrapButtonCancel
            ]}
          >
            <TextComponent content='Cancel' fontSize={17} fontFamily={fontFam.medium} />
          </Pressable>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    paddingHorizontal: 15
  },
  wrapHeaderTitle: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  // Wrap Search
  wrapSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5
  },
  wrapFilterButton: {
    width: 'auto'
  },
  wrapContentSearchInput: {
    width: '85%',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#3E3E3E',
    borderRadius: 12
  },
  textInput: {
    fontSize: 16,
    color: 'white'
  },
  headerDetailAppointment: {
    marginHorizontal: 24
  },
  contentAppointment: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 14
  },
  wrapButtonDetails: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14
  },
  wrapButtonCancel: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  }
  // Wrap Contract Component
});

export default ContractScreen;
