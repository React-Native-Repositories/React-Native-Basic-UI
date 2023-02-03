import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gloablStyles} from '../../../Styles/global.styles';
import {AppThemeScreen} from '../../../components';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import AppHeader from '../../../components/AppHeader';
import { getValue } from '../../../utils/lodash';
import { StatusBar } from 'native-base';

export default function HomeScreen(props) {
  const {isThemeDark} = useThemeToggler();
  return (
    <AppThemeScreen>
      <AppHeader headerName="Home" {...props} />
      <View style={gloablStyles.container}>
        <Text style={{color: isThemeDark ? 'white' : 'black'}}>
          Home Screen
        </Text>
      </View>
    </AppThemeScreen>
  );
}
