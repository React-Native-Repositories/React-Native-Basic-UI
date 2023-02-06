import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import {gloablStyles} from '../../../Styles/global.styles';
import { AppThemeScreen } from '../../../components';

export default function TabThree() {
  const {isThemeDark} = useThemeToggler();
  return (
    <AppThemeScreen>
    <View style={gloablStyles.container}>
      <Text style={{color: isThemeDark ? 'white' : 'black'}}>Fixed Top Tab Bar Three</Text>
    </View>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({});
