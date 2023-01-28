import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import App from './App'

export default function Main() {
  return (
   <NavigationContainer>
       <App />
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})