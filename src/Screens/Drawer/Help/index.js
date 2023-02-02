import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gloablStyles } from '../../../Styles/global.styles'
import { AppThemeScreen } from '../../../components'
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
export default function HelpScreen() {
  const {isThemeDark} = useThemeToggler();
  return (
    <AppThemeScreen>
    <View style={gloablStyles.container}>
      <Text style={{color: isThemeDark ? 'white' : 'black'}}>Help Screen</Text>
    </View>
    </AppThemeScreen>
  )
}

const styles = StyleSheet.create({})