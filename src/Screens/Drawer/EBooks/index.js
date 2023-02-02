import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gloablStyles} from '../../../Styles/global.styles';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import {AppThemeScreen} from '../../../components';

export default function EbooksScreen() {
  const {isThemeDark} = useThemeToggler();
  return (
    <AppThemeScreen>
      <View style={gloablStyles.container}>
        <Text style={{color: isThemeDark ? 'white' : 'black'}}>
          Ebooks Screen
        </Text>
      </View>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({});
