import {StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'native-base';
import LanguageSelector from '../../../../Language/selector';
import { AppThemeScreen } from '../../../../components';

export default function SettingsLanguageScreen() {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate('More');
  };
  return (
    <AppThemeScreen>
      <ScrollView style={styles.container}>
          <LanguageSelector />
      </ScrollView>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
