// https://reactnavigation.org/docs/material-top-tab-navigator/#props

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabOne from '../Screens/TopNavTab/TabOne';
import TabThree from '../Screens/TopNavTab/TabThree';
import TabTwo from '../Screens/TopNavTab/TabTwo';
import {colors} from '../Theme/colors';

const Tab = createMaterialTopTabNavigator();

export default function MaterialTopNavbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.light.primaryColorLight,
          height: 2,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarActiveTintColor: colors.light.primaryColorLight,
        // tabBarLabelStyle:{
        //   color:colors.light.primaryColorLight,
        // }
      }}>
      <Tab.Screen
        name="TabOne"
        component={TabOne}
        options={{
          tabBarLabel: 'Tab One',
        }}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwo}
        options={{
          tabBarLabel: 'Tab Two',
        }}
      />
      <Tab.Screen
        name="TabThree"
        component={TabThree}
        options={{
          tabBarLabel: 'Tab Three',
        }}
      />
    </Tab.Navigator>
  );
}
