import { Button, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View ,Animated} from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import {StatusBar} from "expo-status-bar"
import RBSheet from "@nonam4/react-native-bottom-sheet";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import WardCard from '@/components/WardCard';
import { router } from 'expo-router';
import {ParentWards} from "../../constants/mockupWardData"
import { AuthContext } from '@/context/AuthContext';


const index = () => {
  const refRBSheet = useRef<RBSheet | null>(null);
  const User = useContext(AuthContext)
  const [wardList,setWardList] = useState(User.user.ward)
  

  
 
useEffect(()=>{
  refRBSheet.current?.open()
},[])
  return (
    <SafeAreaView>
      <StatusBar style='dark'/>
      <View style={{height:hp(27)}} className='rounded-xl bg-teal-700 p-3 w-[95%] mx-auto mt-2'>
     <View className='w-[95%] mx-auto'>
     <View className='flex-row items-center justify-between '>
      <View className='flex-col'>
      <Text className='text-xl text-white font-poppins'>Good Day </Text>
      <Text className='text-2xl text-white font-poppinsSB'>Mr.Frank Agbetiame </Text>
      </View>
      <View className='h-16 w-16 bg-purple-400 rounded-full items-center justify-center'><Text className='text-white text-xl font-poppinsB'>FA</Text></View>
      </View>
      <View className=' mt-4 h-[0.05rem] w-full bg-purple-400 '></View>
      <Text className='mt-5 mb-3 font-poppins text-white/80 text-xl'>Ward Selection</Text>
      <Text className=' font-poppins text-white/50'>Dear Parent Kindly select your ward to view details</Text>
     </View>
      </View>
      <ScrollView style={{height:hp(70)}} className='bg-gray-50 mt-5'>
        <View className='w-[90%] mx-auto mt-3 '>
        {
      
         wardList.map((ward)=>{
          // console.log(ward)
          return (
          <TouchableOpacity key={ward.Id}  onPress={()=>{router.push({pathname: "/(mainapp)/[ward]", params:ward })}}className='h-[11.5rem]  mb-5 rounded-lg bg-white'>
            <WardCard 
             StudentName={ward.StudentName} 
             Gender={ward.Gender} 
             Class={ward.Class} 
             Id={ward.Id} 
             Initials={ward.Initials} 
             InitialsBg={ward.InitialsBg} 
             BasicBg={ward.BasicBg} 
             BasicTextColor={ward.BasicTextColor} 
             GenderBg={ward.GenderBg} 
             GenderTextColor={ward.GenderTextColor} 
             />
             </TouchableOpacity>
          )
         })
        }
        </View  >
      </ScrollView>
    </SafeAreaView>
    )
}
export default index

const styles = StyleSheet.create({})