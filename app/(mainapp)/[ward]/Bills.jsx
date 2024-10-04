import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Bills = () => {
  const {StudentName} = useLocalSearchParams()
  return (
    <View>
      <Text>Bills {StudentName}</Text>
    </View>
  )
}

export default Bills

const styles = StyleSheet.create({})