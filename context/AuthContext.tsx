import { View, Text } from 'react-native'
import * as React from 'react'
import { useRootNavigationState, useRouter, useSegments } from 'expo-router'
// I am just assuming i have a user 
type ContextType ={
  user:string | null ,
  signIn: ()=>void
  signOut: ()=>void
}
const AuthContext = React.createContext<ContextType | null>(null)

export const useAuth = ()=>{
  return React.useContext(AuthContext)
}

export default function AuthProvider({children}:React.PropsWithChildren) {
    const rootsegment = useSegments()[0] 
    const router = useRouter()
    const [user,setUser] = React.useState<string |   null>(null)
 
 

    React.useEffect(()=>{
      if(user === null)return
      if(!user && rootsegment !== "(auth)"){
        router.replace("/(auth)")
      }else if(user && rootsegment !== "(mainapp)"){
        router.replace("/(mainapp)")
      }
    },[user,rootsegment])
  return (
    <AuthContext.Provider value={{
      user,
      signIn:()=>{setUser("Lord")},
      signOut:()=>{setUser("")}
    }}>
      {children}
    </AuthContext.Provider>
  )
}