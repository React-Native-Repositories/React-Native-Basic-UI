import React from 'react';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// native base
import {extendTheme} from 'native-base';
import { colors } from './colors';

export const NativeBaseTheme = extendTheme({
  colors: colors,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

export const colorModeManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async value => {
    try {
      await AsyncStorage.setItem('@color-mode', value);
    } catch (e) {}
  },
};

// navigation
export const NavigationDefaultTheme = DefaultTheme;
export const NavigationDarkTheme = DarkTheme;

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
