import { View, Text } from 'react-native'
import * as React from 'react'
import { useRootNavigationState, useRouter, useSegments } from 'expo-router'

 export const AuthContext = React.createContext()


const U = {
  Name:"Mr.Frank Agbetiame",
  ward:[
    {
      StudentName:"James Ankrah",
      Gender:"Male",
      Class:"Basic 5",
      Id:'0011224033',
      Initials:"J A",
      InitialsBg:"#2dd4bf", //teal-400
      BasicBg:"#ccfbf1", //teal-100
      BasicTextColor:"#0f766e",//700
      GenderBg:"#f3e8ff",//purple-100
      GenderTextColor:"#7e22ce"//purple-700
    },
    {
    StudentName:"Stella Naa",
    Gender:"Female",
    Class:"Basic 3",
    Id:'0011229023',
    Initials:"S N",
    InitialsBg:"#f472b6", 
    BasicBg:"#ccfbf1" ,
    BasicTextColor:"#0f766e",
    GenderBg:"#f3e8ff",
    GenderTextColor:"#7e22ce"
    },
    {
      StudentName:"Bright Delali",
      Gender:"Male",
      Class:"Basic 6",
      Id:'0011224011',
      Initials:"J A",
      InitialsBg:"#facc15", 
      BasicBg:"#ccfbf1" ,
      BasicTextColor:"#0f766e",
      GenderBg:"#f3e8ff",
      GenderTextColor:"#7e22ce"
    }
  ]
}

export default function AuthProvider({children}) {
    const rootsegment = useSegments()[0] 
    const router = useRouter()
    const [user,setUser] = React.useState("")
  
    React.useEffect(()=>{
      if(user === null)return
      if(user == "" && rootsegment !== "(auth)"){
        router.replace("/(auth)")
      }else if(user && rootsegment !== "(mainapp)"){
        router.replace("/(mainapp)")
      }
    },[user,rootsegment])

  return (
    <AuthContext.Provider value={{
      user,
      signIn:()=>{setUser(U)},
      signOut:()=>{
        setUser("")
        
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}