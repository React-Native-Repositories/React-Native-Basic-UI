import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/Stack/Login';
import MyProfile from '../Screens/Stack/MyProfile';
import useThemeToggler from '../Theme/hooks/useThemeToggler';
import {colors} from '../Theme/colors';

const Stack = createStackNavigator();
function StackNavigation(props) {
  const {isThemeDark} = useThemeToggler();

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
          headerTitleStyle: {fontFamily: 'GoogleSans-Regular'},
          headerTitleStyle: {
            fontSize: 16,
          },
          label: 'My Profile',
        }}
        component={MyProfile}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
