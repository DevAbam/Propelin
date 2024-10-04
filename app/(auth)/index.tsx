import { StyleSheet, Text, View,Pressable,Image,ScrollView, KeyboardAvoidingView, TextInput  } from 'react-native'
import React, {  useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"
import {StatusBar} from 'expo-status-bar'


import { router } from 'expo-router'
const Phonenumber = () => {
  
  
  const [value, setValue] = useState("")
  const [formattedValue, setFormattedValue] = useState("");
  return (
    <SafeAreaView className=' bg-slate-100'>
      <StatusBar style='dark'/>
      <ScrollView automaticallyAdjustKeyboardInsets showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView behavior='position' >
        <View style={{height:hp(100)}} >
      <View style={{height:hp(100),width:wp(90)}} className='mx-auto'>
        {/* image view */}
        <View className='   mt-10  mb-4 w-full items-center justify-center'>
          <Image source={require('../../assets/images/verify.png')} style={{height:hp(45), width:wp(100)}} resizeMode='cover'/>
        </View>
        {/* Text view  */}
        <View className='  mb-6 w-full'>
          <Text className=' text-center font-poppinsB text-2xl mb-2 mt-2 text-light'>Sign Up</Text>
          <Text className=' text-center font-poppins text-md text-light '>Enter your phone number to verify your account</Text>
        </View>
        {/* inputBox View */}
        <View className='    w-full'>     
          <View className=' w-full h-56 bg-white   rounded-2xl justify-evenly relative items-center'>
             {/* <CountryInput/> */}
             <View className=' flex flex-row h-16 items-center w-[90%] rounded-xl'>
            <View className='w-[25%]  flex flex-row gap-2 h-full items-center justify-center'>
            <Image source={require("../../assets/images/ghana.png")} style={{height:25, width:20}} resizeMode='cover'/>
            <Text className='font-poppins'>+233</Text>
            </View>
            <View  className='w-[75%]   bg-[#f5f5f5]  h-full  justify-center rounded-xl'>
            <TextInput  className='h-full  font-poppins text-lg pl-2 pr-2 text-primary tracking-wider' keyboardType='phone-pad' style={{letterSpacing:5}}/>
            </View>
          </View>
                <Pressable className=' w-[80%] mx-auto h-16 rounded-2xl   bg-primary  items-center justify-center' onPress={()=>{router.push("/(auth)/Otp")}}><Text className='text-white font-poppinsSB text-xl' >Authenticate</Text></Pressable>
          </View>
        </View>
      </View>
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
    )
}

export default Phonenumber

const styles = StyleSheet.create({})

