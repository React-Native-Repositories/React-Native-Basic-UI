import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gloablStyles} from '../../../Styles/global.styles';
import {AppThemeScreen} from '../../../components';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';

export default function SettingsScreen() {
  const {isThemeDark} = useThemeToggler();
  return (
    <AppThemeScreen>
      <View style={gloablStyles.container}>
        <Text style={{color: isThemeDark ? 'white' : 'black'}}>Settings Screen</Text>
      </View>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({});
