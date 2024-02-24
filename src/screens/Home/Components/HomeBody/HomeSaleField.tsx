import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { PN1, PN2, PN3, apartmentClass, studioImage } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import { useApartmentClass } from '@services/queries/apartment.queries';
import globalStyle from '@styles/globalStyle';
import { ArrowCircleRight2 } from 'iconsax-react-native';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import ApartmentClass from 'src/models/class/ApartmentClass.class';

// Mapping of apartment names to image sources
const apartmentImageMap = {
  [apartmentClass.STUDIO]: studioImage,
  [apartmentClass.PN1]: PN1,
  [apartmentClass.PN2]: PN2,
  [apartmentClass.PN3]: PN3
};

const HomeSaleField = () => {
  const data = useApartmentClass();
  const apartmentClasses = data.data?.data.data;

  if (!apartmentClasses) {
    return (
      <View>
        <TextComponent content='Not Found Any' />
      </View>
    );
  }

  // Function to get image source based on apartment name
  const getImageSource = (name: string) => {
    return apartmentImageMap[name] || studioImage; // Default to studioImage if no match
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      {apartmentClasses.map((apartment: ApartmentClass, index: number) => (
        <View key={apartment.id} style={styles.saleFieldContainer}>
          <Image style={styles.saleImage} resizeMode='cover' source={getImageSource(apartment.name)} />
          <View style={styles.saleTextContainer}>
            <TextComponent content={apartment.name} styles={styles.saleTitle} />
            <TextComponent content={'Apartment Class'} styles={styles.saleText} />
          </View>
          <Pressable style={({ pressed }) => [styles.buttonContainer, pressed && globalStyle.pressed]}>
            <ArrowCircleRight2 size='25' color={typoColor.white1} variant='Broken' />
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeSaleField;

const styles = StyleSheet.create({
  saleFieldContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 20
  },
  saleImage: {
    borderRadius: 10,
    width: 300,
    height: 200
  },
  saleTextContainer: {
    position: 'absolute',
    top: 20,
    left: 15,
    padding: 10,
    borderRadius: 12,
    backgroundColor: typoColor.gray3,
    opacity: 0.8
  },
  saleTitle: {
    fontSize: 18,
    color: typoColor.white1,
    fontFamily: fontFam.bold
  },
  saleText: {
    fontSize: 10
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: typoColor.yellow1,
    height: 40,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 20
  }
});
