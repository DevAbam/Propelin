import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { AuthContext } from '@/context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const id = () => {
  const {StudentName,Id} = useLocalSearchParams()
  const {signOut} = useContext(AuthContext)
  return (
    <View>
    {/* header */}
    <View className='w-full mb-2 px-6 h-36 border bg-teal-700'>
     <SafeAreaView>
     <View className='mb-2 flex-row items-center justify-between'>
    <View className='flex-row items-center justify-center gap-3'>
    <MaterialCommunityIcons name='menu' size={28} color={"white"}/>
    <Text className=' font-poppins text-white text-lg'>Hello Frank 👋</Text>
    </View>
     <View className='h-14 w-14 items-center justify-center rounded-full bg-white'><Text className=' text-lg font-poppinsSB'>FA</Text></View>
     </View>
     {/* streak */}
     <View className='px-2 w-full h-6 rounded-2xl justify-center mt-2 bg-white/20'>
      <View className=' w-full rounded-2xl  bg-white h-2'>
      <View className=' w-[40%] bg-orange-300 h-2'></View>
      </View>
     </View>
     </SafeAreaView>
    </View>

    {/* body */}
    <ScrollView showsVerticalScrollIndicator={false} > 
    
    <View className=' px-5'>
      <Text className=' mb-2 mt-3  font-poppinsSB'>Ward</Text>
      <View className=' w-full mb-3 py-2 px-2 h-56 justify-between flex-row bg-gray-200 rounded-2xl '>
     
      </View>
      {/* Attendance */}
      <Pressable className=' mt-4
       flex-row justify-between items-center'>
      <Text className=' font-poppinsSB'>Attendance</Text>
      <Text className=' font-poppinsSB text-teal-700 text-sm '>See more</Text>
      </Pressable>

      <View className=' w-full mb-3 py-2 px-2 h-56 justify-between items-center flex-row bg-gray-200 rounded-2xl '>
     
      </View>

      {/* Bills and Payments */}
      <Pressable className=' mt-4 flex-row justify-between items-center'>
      <Text className=' font-poppinsSB'>Bills and Payments</Text>
      <Text className=' font-poppinsSB text-teal-700  text-sm'>See more</Text>
      </Pressable>
<View className=' w-full mb-56 py-2 px-2 h-56 justify-between flex-row bg-gray-200 rounded-2xl '>
</View>
      
    </View>
    </ScrollView>
    </View>
  )
}

export default id

const styles = StyleSheet.create({})