import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsLanguageScreen from '../../../Screens/Drawer/Settings/language';
import SettingsScreen from '../../../Screens/Drawer/Settings';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import AnimatedPressable from '../../../components/AppAnimatedPressable';
import {View} from 'native-base';
import {hp} from '../../../utils/dimensions';
import {AppIcon} from '../../../components';
import {RFValue} from '../../../utils/npm-helper/react-native-responsive-fontsize';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {colors} from '../../../Theme/colors';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();
function SettingsStackNavigation(props) {
  const {isThemeDark} = useThemeToggler();
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.light.primaryColorLight,
          height: 70,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'normal',
          color: '#fff',
          headerShown: false,
        },
      }}>
      <Stack.Screen
        name="Settings"
        options={{
          headerShown: true,
          headerBackTitleVisible: true,
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTitle: t('common:settings'),
          headerLeft: () => (
            <View style={{marginLeft: hp(20)}}>
              <AnimatedPressable
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <AppIcon name={'menu'} size={RFValue(22)} color="white" />
              </AnimatedPressable>
            </View>
          ),
        }}
        component={SettingsScreen}
      />
      <Stack.Screen
        name="SettingsLanguage"
        options={{
          headerShown: true,
          headerBackTitleVisible: true,
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTitle: t('common:language'),
        }}
        component={SettingsLanguageScreen}
      />
    </Stack.Navigator>
  );
}

export default SettingsStackNavigation;
