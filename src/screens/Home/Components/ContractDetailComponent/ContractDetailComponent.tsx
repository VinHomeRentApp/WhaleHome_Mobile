import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { UserContract } from '@type/user.types';
import { Bank, Profile } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  userInformation: UserContract;
  isLandLord?: boolean;
  bank?: {
    name: string;
    code: string;
    address: string;
  };
};
const ContractDetailComponent = ({ userInformation, isLandLord, bank }: Props) => {
  return (
    <View>
      {/* Header */}
      <View style={[styles.wrapHeader]}>
        <View style={[styles.wrapTitleHeader]}>
          <View style={[styles.wrapIcon, { backgroundColor: '#2563eb' }]}>
            <Profile size='24' color='#fff' />
          </View>
          <TextComponent content='Information' fontFamily={fontFam.extraBold} textColor='#292929' fontSize={24} />
        </View>
      </View>
      <View style={[styles.wrapContentInformation]}>
        <View style={[styles.wrapEachRow]}>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Fullname' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent
              content={userInformation.fullName.toUpperCase()}
              fontSize={16}
              fontFamily={fontFam.semiBold}
            />
          </View>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Phone' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent content={userInformation.phone} fontSize={16} fontFamily={fontFam.semiBold} />
          </View>
        </View>
        <View style={[styles.wrapEachRow]}>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Identity Card' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent
              content={userInformation.identityCard ?? 'Updating'}
              fontSize={16}
              fontFamily={fontFam.semiBold}
            />
          </View>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Provided Date Card' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent
              content={userInformation.identityCardDateProvide ?? 'Updating'}
              fontSize={16}
              fontFamily={fontFam.semiBold}
            />
          </View>
        </View>
        <View style={[styles.wrapEachRow, { justifyContent: 'flex-end' }]}>
          <View style={[styles.wrapRow]}>
            <TextComponent content='Address Date Card' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent
              content={userInformation.identityCardAddressProvide ?? 'Updating'}
              fontSize={16}
              fontFamily={fontFam.semiBold}
            />
          </View>
        </View>
        <View style={[styles.wrapEachRow]}>
          <View style={[styles.wrapRow, { width: '100%' }]}>
            <TextComponent content='Address' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
            <TextComponent content={userInformation.address} fontSize={16} fontFamily={fontFam.semiBold} />
          </View>
        </View>
      </View>
      {isLandLord && (
        <View>
          <View style={[styles.seperateLine]}></View>
          <View style={[styles.wrapHeader]}>
            <View style={[styles.wrapTitleHeader]}>
              <View style={[styles.wrapIcon, { backgroundColor: '#15803d' }]}>
                <Bank size='24' color='#fff' />
              </View>
              <TextComponent
                content='Payment method'
                fontFamily={fontFam.extraBold}
                textColor='#292929'
                fontSize={24}
              />
            </View>
          </View>
          <View style={[styles.wrapContentInformation]}>
            <View style={[styles.wrapRow]}>
              <TextComponent content='Bank' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
              <TextComponent content={bank?.name as string} fontSize={16} fontFamily={fontFam.semiBold} />
            </View>
            <View style={[styles.wrapRow]}>
              <TextComponent content='BankCode' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
              <TextComponent content={bank?.code as string} fontSize={16} fontFamily={fontFam.semiBold} />
            </View>
            <View style={[styles.wrapRow, { width: '100%' }]}>
              <TextComponent content='Bank Address' textColor='#404040' fontSize={14} fontFamily={fontFam.bold} />
              <TextComponent content={bank?.address as string} fontSize={16} fontFamily={fontFam.semiBold} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    paddingHorizontal: 20
  },
  wrapContract: {
    borderWidth: 1,
    backgroundColor: '#191919',
    borderColor: '#404040',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    gap: 10
  },
  wrapTitleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10
  },
  wrapIcon: {
    height: 30,
    width: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapHeader: {
    flexDirection: 'row'
  },
  wrapContentInformation: {},
  wrapRow: {
    marginBottom: 5,
    width: '50%'
  },
  wrapEachRow: {
    flexDirection: 'row',
    marginBottom: 5
  },
  seperateLine: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#404040',
    marginVertical: 10
  }
});

export default ContractDetailComponent;
