import { StyleSheet, Text, View,Pressable,Image,ScrollView, KeyboardAvoidingView, TextInput  } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"
import {StatusBar} from 'expo-status-bar'
import PhoneInput from "react-native-phone-number-input"

import { router } from 'expo-router'
import CountryInput from '@/components/CountryInput'
const Phonenumber = () => {
  
  const phoneInput = useRef<PhoneInput>(null)
  const [value, setValue] = useState("")
  const [formattedValue, setFormattedValue] = useState("");
  return (
    <SafeAreaView className=' bg-slate-100'>
      <StatusBar style='dark'/>
      <ScrollView automaticallyAdjustKeyboardInsets showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView behavior='position' >
        <View style={{height:hp(100)}} >
      <View style={{height:hp(100),width:wp(90)}} className='   items-center justify-center mx-auto'>
        {/* image view  must rem to put border*/}
        <View className='   mt-12  h-[40%] w-full items-center justify-center'>
          <Image source={require('../../assets/images/verify.png')} className='h-[22rem] w-96 ' resizeMode='cover'/>
        </View>
        {/* Text view  this is wer i took out boarder*/}
        <View className=' h-[15%]   mt-2  w-full'>
          <Text className=' text-center font-poppinsB text-2xl mb-2 mt-2 text-light'>Registration</Text>
          <Text className=' text-center font-poppins text-md text-light '>Enter your phone number to verify your account</Text>
        </View>
        {/* inputBox View  this is where i took out border*/}
        <View className=' h-[40%]   w-full'>     
          <View className=' w-full h-56 bg-white mt-4 rounded-2xl justify-evenly relative items-center'>
          <View className=' border-2 border-purple-800 flex flex-row  bg-yellow-200 h-16 items-center w-[90%]'>
              <View className='w-[25%] flex flex-row gap-2 h-full items-center justify-center'>
              <Text className='font-poppins'>fff</Text>
              <Text className='font-poppins'>+233</Text>
              </View>
              
              <View className='w-[100%] bg-slate-100 border-2 border-green-400 h-full  justify-center'>
              <TextInput className='h-full  font-poppins text-lg pl-2 pr-2'/>
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

 {/* <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="GH"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            // withDarkTheme
          textInputStyle = {{fontFamily: 'poppins'}}
          codeTextStyle={{fontFamily:'poppins'}}
        
            // autoFocus
          /> */}
          