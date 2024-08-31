import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { router } from 'expo-router'

const CountryInput = () => {
  return (
    <View className=' flex flex-row   h-16 items-center w-[90%] rounded-xl'>
    <View className='w-[25%] flex flex-row gap-2 h-full items-center justify-center'>
    <Image source={require("../assets/images/ghana.png")} style={{height:25, width:20}} resizeMode='cover'/>
    <Text className='font-poppins'>+233</Text>
    </View>
    
    <View  className='w-[75%]  bg-[#f5f5f5]  h-full  justify-center rounded-xl'>
    <TextInput  className='h-full  font-poppins text-lg pl-2 pr-2 text-primary tracking-wider' keyboardType='phone-pad' style={{letterSpacing:5}}/>
    </View>
  </View>
  )
}

export default CountryInput

const styles = StyleSheet.create({
  
})