import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
  useFonts
} from '@expo-google-fonts/manrope';
import 'react-native-gesture-handler';

import MainNavigator from '@navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import ClientProvider from '@contexts/providers/ClientProvider';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import AppProvider from '@contexts/providers/AppProvider';

export default function App() {
  const [isShowSplash, setIsShownSplash] = useState<boolean>(true);
  const [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  });

  useEffect(() => {
    const timeoutSplashScreen = setTimeout(() => setIsShownSplash(false), 1000);
    return () => clearTimeout(timeoutSplashScreen);
  }, []);

  return (
    <AppProvider>
      <ClientProvider>
        <StatusBar style='light' translucent />
        {fontsLoaded && (
          <NavigationContainer>
            <MainNavigator isShowSplash={isShowSplash} />
          </NavigationContainer>
        )}
      </ClientProvider>
    </AppProvider>
  );
}
