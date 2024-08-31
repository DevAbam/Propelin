import { StyleSheet, Text, View,Pressable,Image,KeyboardAvoidingView, ScrollView, Platform  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Ionicons}from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"
import {OtpInput, OtpInputRef} from 'react-native-otp-entry'


import { router } from 'expo-router'
const Otp = () => {
  const otpinput = useRef<OtpInputRef | null>(null)
  const [otpValue, setOtpValue]= useState<number | null>(null)
  const[isOtpError, setIsOtpError]= useState(false)
const handleVerify = ()=>{
  if(otpValue === 1234){
    router.navigate('/(mainapp)')
  }else{
    setIsOtpError(true)
    otpinput.current?.clear()
  }
}
  return (
    <SafeAreaView className=' bg-slate-100'>
      <StatusBar style='dark'/>
        <ScrollView automaticallyAdjustKeyboardInsets showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView behavior='position' >
      
        <View style={{height:hp(100)}} >
      <Pressable onPress={()=>{router.navigate('/(auth)')}} className='ml-[5%] mt-4 h-14 w-14 rounded-full bg-primary items-center justify-center'>
        <Ionicons name='chevron-back' size={20} color={"white"} />
      </Pressable>
      <View style={{height:hp(100),width:wp(90)}} className='   items-center justify-center mx-auto'>
        {/* image view  must rem to put border*/}
      
      <View className='   mt-4  w-full items-center justify-center'>
          <Image source={require('../../assets/images/OTPnn.png')} className='h-80 w-80 ' resizeMode='cover'/>
        </View>
        {/* Text view  this is wer i took out boarder*/}
        <View className='    mt-2  w-full'>
          <Text className=' text-center font-poppinsB text-2xl mb-2 mt-2 text-light'>Sign Up</Text>
          <Text className=' text-center font-poppins text-md text-light '>Enter the 4 digits code sent to your mobile number</Text>
        </View>
        
        {/* inputBox View  this is where i took out border*/}
        

        <View className=' h-[40%]   w-full'>    
          
          <View className=' w-full h-56 bg-white mt-4 rounded-2xl justify-evenly  items-center'>
           <OtpInput
              numberOfDigits={4}
              focusColor="green"
              focusStickBlinkingDuration={500}
              autoFocus={false}
              ref={otpinput}
              onFilled={(text) => setOtpValue(parseInt(text))}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              theme={{
                containerStyle: {width: '80%'},
                pinCodeContainerStyle: {width: 50},
                pinCodeTextStyle:{color: "#37B4C3", fontFamily: "poppins"},
                focusedPinCodeContainerStyle:{borderColor: "#37b4c3"},
                focusStickStyle:{backgroundColor: "#37b4c3"}
              }}
            />
              
            <Pressable className=' w-[80%] mx-auto h-16 rounded-2xl   bg-primary  items-center justify-center' onPress={handleVerify}><Text className='text-white font-poppinsSB text-xl' >Verify</Text></Pressable>
          </View>
             
        </View>
      </View>
      </View>
        </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Otp

const styles = StyleSheet.create({})