import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/Stack/Login';
import TabNavigation from './tab.navigation';

const Stack = createStackNavigator();
function StackNavigation(props) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      detachInactiveScreens={false}
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'normal',
          color: '#fff',
          headerShown: false,
        },
      }}>
      <Stack.Screen
        name="Main"
        component={TabNavigation}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
