import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import { colors } from '../Theme/colors';
import useThemeToggler from '../Theme/hooks/useThemeToggler';

function AppThemeScreen({children, style = {}}) {
  const {isThemeDark} = useThemeToggler();
  return (
    <SafeAreaView
      style={[styles.screen, style,
      {
        backgroundColor: isThemeDark
          ? colors.dark.background
          : colors.white,
      }
       ]}>
      <View
        style={[
          styles.content,
          {
            backgroundColor: isThemeDark
              ? colors.dark.background
              : colors.white,
          },
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default AppThemeScreen;
