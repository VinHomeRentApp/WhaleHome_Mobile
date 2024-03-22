import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@type/navigation.types';
import { Call } from 'iconsax-react-native';
import React from 'react';
import { Image, Linking, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import ApartmentClass from 'src/models/class/ApartmentClass.class';

type BodyButtonFieldProps = {
  apartmentClass: ApartmentClass;
};

const BodyButtonField = ({ apartmentClass }: BodyButtonFieldProps) => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const handleCall = async () => {
    try {
      const isCall = await Linking.canOpenURL('tel:+974102437');
      if (isCall) {
        await Linking.openURL('tel:+974102437');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buyAndRentContainer}>
        <View
          style={[
            {
              padding: 10,
              borderWidth: 1,
              backgroundColor: typoColor.yellow1,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10
            }
          ]}
        >
          <Call size='24' color='#000' variant='Bold' />
          <TouchableOpacity onPress={handleCall}>
            <TextComponent
              styles={styles.textButton}
              content='0974102437'
              fontSize={16}
              fontFamily={fontFam.semiBold}
            />
          </TouchableOpacity>
        </View>
        {/* <Pressable style={({ pressed }) => [styles.button, pressed && styles.activeButton]}>
          <TextComponent styles={styles.textButton} content='Buy' />
        </Pressable> */}
      </View>
      <Pressable
        onPress={() => navigation.navigate('View360', { apartmentClass })}
        style={({ pressed }) => [styles.view3dButton, pressed && styles.activeButton]}
      >
        <Image style={styles.iconImage} resizeMode='contain' source={require('@assets/images/icon/360.png')} />
      </Pressable>
    </View>
  );
};

export default BodyButtonField;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  buyAndRentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 80,
    backgroundColor: typoColor.white1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 50,
    borderRadius: 10
  },
  textButton: {
    color: typoColor.black2,
    fontWeight: 'bold'
  },
  activeButton: {
    backgroundColor: typoColor.yellow1
  },
  view3dButton: {
    backgroundColor: typoColor.white1,
    width: 70,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  iconImage: {
    width: '60%',
    height: '60%'
  }
});
