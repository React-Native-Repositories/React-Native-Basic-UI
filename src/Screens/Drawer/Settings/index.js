import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppText, AppThemeScreen} from '../../../components';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import {RFValue} from '../../../utils/npm-helper/react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

export default function SettingsScreen() {
  const {isThemeDark} = useThemeToggler();
  const navigation = useNavigation();
  return (
    <AppThemeScreen>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsDetail')}>
          <AppText  style={{color: isThemeDark ? 'white' : 'black'}}>Detail Screen</AppText>
        </TouchableOpacity>
      </View>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    // backgroundColor:'red',
    marginTop: 30,
  },
  text: {
    fontSize: RFValue(14),
  },
});
