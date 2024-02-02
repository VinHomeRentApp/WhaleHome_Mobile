import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const DismissKeyboard = ({ children }: Props) => {
  const handleHiddenKeyboard = () => {
    Keyboard.dismiss();
  };

  return <TouchableWithoutFeedback onPress={handleHiddenKeyboard}>{children}</TouchableWithoutFeedback>;
};

export default DismissKeyboard;
