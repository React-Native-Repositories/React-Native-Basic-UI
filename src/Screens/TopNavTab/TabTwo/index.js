import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import {gloablStyles} from '../../../Styles/global.styles';

export default function TabTwo() {
  const {isThemeDark} = useThemeToggler();
  return (
    <View style={gloablStyles.container}>
      <Text style={{color: isThemeDark ? 'white' : 'black'}}>Fixed Top Tab Bar Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
