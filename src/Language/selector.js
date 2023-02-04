// https://medium.com/@dineshrrajput/multilanguage-support-in-react-native-a2cdc6e5c445
import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {hp} from '../utils/dimensions';
import {AppText} from '../components';
import {RFValue} from '../utils/npm-helper/react-native-responsive-fontsize';
import useThemeToggler from '../Theme/hooks/useThemeToggler';
import { colors } from '../Theme/colors';
const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'hn', label: 'हिन्दी'},
];
const LanguageSelector = () => {
  const {isThemeDark} = useThemeToggler();
  const {i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;
  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };
  return (
    <View style={styles.container}>
      {LANGUAGES.map(language => {
        const selectedLanguage = language.code === selectedLanguageCode;
        return (
          <Pressable
            key={language.code}
            style={styles.buttonContainer}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}
            unstable_pressDelay={0}
            >
            <AppText
              style={[selectedLanguage ? styles.selectedText : styles.text]}>
              {language.label}
            </AppText>
            <View
              style={[
                styles.border,
                {
                  borderColor: isThemeDark
                    ? 'red'
                    : '#00000029',
                },
              ]}
            />
          </Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // paddingTop: 60,
    paddingHorizontal: hp(30),
    marginTop: hp(28),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#444',
    fontSize: 28,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: RFValue(12),
    color: colors.light.primaryColorLight,
    paddingVertical: 4,
  },
  selectedText: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: '#1A73E8',
    paddingVertical: 4,
  },
  border: {
    marginTop: hp(10),
    borderWidth: 0.5,
    // borderColor: '#00000029',
  },
});
export default LanguageSelector;
