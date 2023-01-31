import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
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

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: true,
          headerLeftLabelVisible: true,
          drawerLabel: 'Home',
        }}
        component={TabNavigation}
      />
      <Drawer.Screen
        name="EBooks"
        options={{
          drawerLabel: 'E-Books',
        }}
        component={EbooksScreen}
      />
      <Drawer.Screen
        name="TestSeries"
        options={{
          drawerLabel: 'Test Series',
        }}
        component={TestSeriesScreen}
      />
      <Drawer.Screen
        name="MyOrders"
        options={{
          drawerLabel: 'My Orders',
        }}
        component={MyOrdersScreen}
      />
      <Drawer.Screen
        name="Books"
        options={{
          drawerLabel: 'Books',
        }}
        component={BooksScreen}
      />
      <Drawer.Screen
        options={{
          drawerLabel: 'FAQ',
        }}
        name="FAQ"
        component={FAQScreen}
      />
      <Drawer.Screen
        name="PrivacyPloicy"
        options={{
          drawerLabel: 'Privacy Ploicy',
        }}
        component={PrivacyPolicyScreen}
      />
      <Drawer.Screen
        name="Refer"
        options={{
          drawerLabel: 'Refer / Share App',
        }}
        component={ReferScreen}
      />
      <Drawer.Screen
        name="Help"
        options={{
          drawerLabel: 'Call Us / Helpline',
        }}
        component={HelpScreen}
      />
      <Drawer.Screen
        name="MyProfile"
        options={{
          drawerLabel: 'My Profile',
        }}
        component={MyProfile}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: 'Settings',
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
