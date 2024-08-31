import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const CountryInput = () => {
  return (
    <View className=' flex flex-row bg-yellow-200 h-16 items-center w-[90%] relative'>
    <View className='w-[15%] border-2 border-red-300'>
    <Text>fff</Text>
    </View>
    <View className='w-[15%] border-2 border-pink-600'>
    <Text>fff</Text>
    </View>
    <View className='border-2 border-green-400 w-[70%]'>
    <Text>fff</Text>
    </View>
  </View>
  )
}

export default CountryInput

const styles = StyleSheet.create({
  
})