import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';

type LoadingOverlayProps = {
  isLoading: boolean;
  message: string;
};

const LoadingOverlay = ({ isLoading, message }: LoadingOverlayProps) => {
  return (
    <Modal transparent={true} visible={isLoading} animationType='fade'>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size='large' color='#0000ff' />
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white', // Background color for the loading indicator and message
    borderRadius: 10, // Rounded corners for the loading container
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  message: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16
  }
});

export default LoadingOverlay;
