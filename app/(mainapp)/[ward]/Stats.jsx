import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Stats = () => {
  const {StudentName} = useLocalSearchParams()
  return (
    <View>
      <Text>Stats {StudentName}</Text>
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({})