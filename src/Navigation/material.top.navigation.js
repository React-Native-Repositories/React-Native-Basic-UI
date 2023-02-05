import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabOne from '../Screens/TopNavTab/TabOne';
import TabThree from '../Screens/TopNavTab/TabThree';
import TabTwo from '../Screens/TopNavTab/TabTwo';
import {colors} from '../Theme/colors';
import useThemeToggler from '../Theme/hooks/useThemeToggler';

const Tab = createMaterialTopTabNavigator();

export default function MaterialTopNavbar() {
  const {isThemeDark} = useThemeToggler();
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.common.red,
          height: 2,
        },
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
