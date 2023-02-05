import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyProfile from '../Screens/Stack/MyProfile';
import useThemeToggler from '../Theme/hooks/useThemeToggler';
import {colors} from '../Theme/colors';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();
function StackNavigation(props) {
  const {isThemeDark} = useThemeToggler();
  const {t, i18n} = useTranslation();

  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: isThemeDark
            ? colors.light.primaryColorLight
            : 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'normal',
          color: '#fff',
          headerShown: false,
        },
      }}>
      <Stack.Screen
        name="MyProfile"
        options={{
          headerShown: false,
          headerBackTitleVisible: true,
          headerTitleAlign:'center',
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTitle: t('common:profile'),
        }}
        component={MyProfile}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
