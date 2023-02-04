import {StyleSheet} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
// import CreateHeader from './Header';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'native-base';
import LanguageSelector from '../../../../Language/selector';
import { AppThemeScreen } from '../../../../components';

// import Animated, {
//   Easing,
//   FadeInDown,
//   FadeOut,
//   Layout,
// } from 'react-native-reanimated';

export default function SettingsLanguageScreen() {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate('More');
  };
  return (
    <AppThemeScreen>
      {/* <CreateHeader
        leftHeader={t('headers:language')}
        close={true}
        handleClose={handleClose}
      /> */}
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
