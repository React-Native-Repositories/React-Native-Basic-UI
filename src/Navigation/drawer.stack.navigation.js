import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BooksScreen from '../Screens/Drawer/Books';
import EbooksScreen from '../Screens/Drawer/EBooks';
import MyOrdersScreen from '../Screens/Drawer/MyOrders';
import TestSeriesScreen from '../Screens/Drawer/TestSeries';
import TabNavigation from './tab.navigation';
import FAQScreen from '../Screens/Drawer/FAQ';
import PrivacyPolicyScreen from '../Screens/Drawer/PrivacyPolicy';
import ReferScreen from '../Screens/Drawer/Refer';
import HelpScreen from '../Screens/Drawer/Help';
import MyProfile from '../Screens/Drawer/MyProfile';
import SettingsScreen from '../Screens/Drawer/Settings';

const Stack = createStackNavigator();
function DrawerStackNavigation(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        options={{
          label: 'Home',
        }}
        component={TabNavigation}
      />
      <Stack.Screen
        name="EBooks"
        options={{
          label: 'E-Books',
        }}
        component={EbooksScreen}
      />
      <Stack.Screen
        name="TestSeries"
        options={{
          label: 'Test Series',
        }}
        component={TestSeriesScreen}
      />
      <Stack.Screen
        name="MyOrders"
        options={{
          label: 'My Orders',
        }}
        component={MyOrdersScreen}
      />
      <Stack.Screen
        name="Books"
        options={{
          label: 'Books',
        }}
        component={BooksScreen}
      />
      <Stack.Screen
        options={{
          label: 'FAQ',
        }}
        name="FAQ"
        component={FAQScreen}
      />
      <Stack.Screen
        name="PrivacyPloicy"
        options={{
          label: 'Privacy Ploicy',
        }}
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name="Refer"
        options={{
          label: 'Refer / Share App',
        }}
        component={ReferScreen}
      />
      <Stack.Screen
        name="Help"
        options={{
          label: 'Call Us / Helpline',
        }}
        component={HelpScreen}
      />
      <Stack.Screen
        name="MyProfile"
        options={{
          label: 'My Profile',
        }}
        component={MyProfile}
      />
      <Stack.Screen
        name="Settings"
        options={{
          label: 'Settings',
        }}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}

export default DrawerStackNavigation;
