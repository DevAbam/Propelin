import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
   <Stack >
    <Stack.Screen name='Otp' options={{headerShown:false}} />
    <Stack.Screen name='index' options={{headerShown:false,  contentStyle:{backgroundColor:"#f1f5f9"}}} />
   </Stack>
  )
}

export default _layout

