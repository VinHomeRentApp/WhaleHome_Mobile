import AppProvider from '@contexts/providers/AppProvider';
import ClientProvider from '@contexts/providers/ClientProvider';
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
import MainNavigator from '@navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
  LogBox.ignoreAllLogs();
  return (
    <AlertNotificationRoot>
      <AppProvider>
        <ClientProvider>
          <StatusBar style='light' translucent />
          <>
            {fontsLoaded && (
              <GestureHandlerRootView style={[{ flex: 1 }]}>
                <NavigationContainer>
                  <MainNavigator isShowSplash={isShowSplash} />
                </NavigationContainer>
              </GestureHandlerRootView>
            )}
          </>
        </ClientProvider>
      </AppProvider>
    </AlertNotificationRoot>
  );
}
