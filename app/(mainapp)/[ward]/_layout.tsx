import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, useLocalSearchParams,  } from 'expo-router'
import {FontAwesome, MaterialIcons} from '@expo/vector-icons'

export default function _layout() {
  const ward = useLocalSearchParams()
  return (
 <Tabs screenOptions={{ tabBarActiveTintColor:"teal", headerShown: false}}>
<Tabs.Screen name='Home' options={{tabBarLabel:"Home",tabBarLabelStyle:{fontFamily:"poppins"}, title:"Home",tabBarIcon:({color})=>(<FontAwesome name='home' color={color} size={20}/>)}} initialParams={ward}/>
  <Tabs.Screen name='Stats' options={{tabBarLabel:"Stats",tabBarLabelStyle:{fontFamily:"poppins"}, title:"Stats", tabBarIcon:({color})=>(<MaterialIcons name='stacked-bar-chart' color={color} size={20}/>)}} initialParams={ward}/>
  <Tabs.Screen name='Bills' options={{tabBarLabel:"Bills",tabBarLabelStyle:{fontFamily:"poppins"}, title:"Bills",tabBarIcon:({color})=>(<MaterialIcons name='money-off-csred' color={color} size={20}/>)}} initialParams={ward}/>
  <Tabs.Screen name='Reports' options={{tabBarLabel:"Report",tabBarLabelStyle:{fontFamily:"poppins"}, title:"Reports",tabBarIcon:({color})=>(<MaterialIcons name='report' color={color} size={20}/>)}} initialParams={ward}/>
 </Tabs>
  )
}