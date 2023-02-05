import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppThemeScreen} from '../../../../components';
import {gloablStyles} from '../../../../Styles/global.styles';
import useThemeToggler from '../../../../Theme/hooks/useThemeToggler';

export default function SettingsDetailScreen() {
  const navigation = useNavigation();
  const {isThemeDark} = useThemeToggler();

  return (
    <AppThemeScreen>
      <View style={gloablStyles.container}>
        <Text style={{color: isThemeDark ? 'white' : 'black'}}>
          Settings Detail Screen
        </Text>
      </View>
    </AppThemeScreen>
  );
}
