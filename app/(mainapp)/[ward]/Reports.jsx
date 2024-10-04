import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Reports = () => {
  const {StudentName} = useLocalSearchParams()
  return (
    <View>
      <Text>Reports{StudentName}</Text>
    </View>
  )
}

export default Reports

const styles = StyleSheet.create({})