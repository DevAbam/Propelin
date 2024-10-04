import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack >
        <Stack.Screen name='index'options={{headerShown:false, contentStyle:{backgroundColor:"#fff"}}}/>
        <Stack.Screen name='[ward]'options={{headerShown:false, contentStyle:{backgroundColor:"#fff"}}}/>
   </Stack>
  )
}