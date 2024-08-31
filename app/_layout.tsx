
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import "../global.css"
import { Text } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import AuthProvider from '@/context/AuthContext';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    poppins:require('../assets/fonts/Poppins-Regular.ttf'),
    poppinsB:require('../assets/fonts/Poppins-Bold.ttf'),
    poppinsSB:require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  

  return (
    <AuthProvider>
      <SafeAreaProvider>
       <Slot/>
      </SafeAreaProvider>
    </AuthProvider>
    );
}
