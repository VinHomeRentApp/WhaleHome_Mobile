import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type DialogProps = {
  visible: boolean;
  onClose?: () => void;
  title: string;
  message: string;
  primaryButtonTitle: string;
  secondaryButtonTitle: string;
  onPrimaryButtonPress: () => void;
  onSecondaryButtonPress: () => void;
};

const Dialog = ({
  visible,
  onClose,
  title,
  message,
  primaryButtonTitle,
  secondaryButtonTitle,
  onPrimaryButtonPress,
  onSecondaryButtonPress
}: DialogProps) => {
  return (
    <Modal animationType='slide' transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={onSecondaryButtonPress}>
              <Text style={styles.buttonText}>{secondaryButtonTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={onPrimaryButtonPress}>
              <Text style={styles.buttonText}>{primaryButtonTitle}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5
  },
  primaryButton: {
    backgroundColor: typoColor.blue2
  },
  secondaryButton: {
    backgroundColor: typoColor.yellow2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: fontFam.bold
  }
});

export default Dialog;
