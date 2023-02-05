import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gloablStyles} from '../../../Styles/global.styles';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';

export default function TabOne() {
  const {isThemeDark} = useThemeToggler();
  return (
    <View style={gloablStyles.container}>
      <Text style={{color: isThemeDark ? 'white' : 'black'}}>Fixed Top Tab Bar One</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
