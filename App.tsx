import 'react-native-gesture-handler';
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

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainNavigator from '@navigation/MainNavigator';

export default function App() {
  const queryClient = new QueryClient();
  const [isAuth] = useState<boolean>(true);
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
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar style='light' translucent />
        {fontsLoaded && (
          <NavigationContainer>
            <MainNavigator isAuth={isAuth} isShowSplash={isShowSplash} />
          </NavigationContainer>
        )}
      </QueryClientProvider>
    </>
  );
}
