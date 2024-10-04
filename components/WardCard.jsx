import { Pressable, Text,  TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'



const WardCard = ({StudentName,Id,BasicBg,BasicTextColor,GenderBg,GenderTextColor,Initials,InitialsBg,Class,Gender}) => {
  const schoolName = "Crown Family Preparatory school"
  const shortname = schoolName.slice(0,24)
  

  return (
      <View  className='  w-[85%] mx-auto '>
      <View className=' flex flex-row items-center   mt-4 gap-10'>
        <View style={{backgroundColor:InitialsBg}} className={`h-16 rounded-full w-16  items-center justify-center`}><Text className='text-white font-poppins text-xl'>{Initials}</Text></View>
        <View>
        <Text className='text-xl mb-2  text-center text-neutral-600 font-poppins '>{StudentName}</Text>
      <View className='flex-row gap-2'>
      <View style={{backgroundColor:BasicBg}} className={`px-2  w-20 items-center justify-center rounded-md`}>
          <Text style={{color:BasicTextColor}} className={` font-poppins`}>{Class}</Text>
          </View>
        <View style={{backgroundColor:GenderBg}} className={`px-2  w-20 items-center justify-center rounded-md`}>
          <Text style={{color: GenderTextColor}} className={` font-poppins`}>{Gender}</Text>
          </View>
      </View>
        </View>
      </View>
      {/* school and index number */}
    <View className=' mt-3 '>
      <View>
      <View className='flex flex-row items-center gap-4'>
            <Ionicons  name='school-outline' color={"teal"} size={22}/>
            <Text className=' font-poppins text-slate-700 text-lg'>{`${shortname} ${'...'}`} </Text>
          </View>
          <View className='flex flex-row items-center gap-4'>
            <MaterialIcons name='perm-identity' color={"teal"} size={22}/>
            <Text className=' font-poppins text-slate-700 text-lg'>{Id} </Text>
          </View>
      </View>
        
      </View>
      <View className='items-end mb-2'>
        <Ionicons name='arrow-forward' color={"black"} size={18}/>
      </View>
        </View>
    //  </TouchableOpacity>
  )
}

export default WardCard
