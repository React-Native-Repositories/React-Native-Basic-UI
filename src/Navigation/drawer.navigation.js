import {StyleSheet, View, TouchableOpacity} from 'react-native';
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
import SettingsScreen from '../Screens/Drawer/Settings';
import {AppIcon} from '../components';
import CustomDrawer from './drawer/custom.drawer';
import {RFValue} from '../utils/npm-helper/react-native-responsive-fontsize';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import ToggleDarkMode from '../components/ToggleDarkMode';
import MyProfile from '../Screens/Stack/MyProfile';
import useThemeToggler from '../Theme/hooks/useThemeToggler';
import {colors} from '../Theme/colors';
import StackNavigation from './stack.navigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props) {
  const navigation = useNavigation();
  const {isThemeDark} = useThemeToggler();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#3b4b82',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: isThemeDark
          ? colors.common.secondaryWhite
          : '#2e343d',
        headerTitleStyle: {
          color: 'white',
        },
        drawerContentContainerStyle: {
          drawerBackgroundColor: '#2e343d',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <AppIcon
              name={'menu'}
              size={RFValue(22)}
              color="white"
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            {/* <AppIcon
              name={'sunny-sharp'}
              size={RFValue(22)}
              color="white"
              style={{marginRight: 10}}
            /> */}
            <ToggleDarkMode />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#516195', //Set Header color
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'GoogleSans-Regular',
          fontSize: 14,
        },
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: true,
          headerLeftLabelVisible: true,
          drawerIcon: ({color}) => (
            <AppIcon name="home" size={22} color={color} />
          ),
        }}
        component={TabNavigation}
      />
       <Drawer.Screen
        name="MyProfile"
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
          label: 'My Profile',
          drawerIcon: ({color}) => (
            <AppIcon name="person" size={22} color={color} />
          ),
        }}
        component={StackNavigation}
      />
      <Drawer.Screen
        name="EBooks"
        options={{
          headerShown: true,
          drawerLabel: 'E-Books',
          drawerIcon: ({color}) => (
            <AppIcon name="book" size={22} color={color} />
          ),
        }}
        component={EbooksScreen}
      />
      <Drawer.Screen
        name="TestSeries"
        options={{
          headerShown: true,
          drawerLabel: 'Test Series',
          drawerIcon: ({color}) => (
            <AppIcon name="create" size={22} color={color} />
          ),
        }}
        component={TestSeriesScreen}
      />
      <Drawer.Screen
        name="MyOrders"
        options={{
          headerShown: true,
          drawerLabel: 'My Orders',
          drawerIcon: ({color}) => (
            <AppIcon name="cart" size={22} color={color} />
          ),
        }}
        component={MyOrdersScreen}
      />
      <Drawer.Screen
        name="Books"
        options={{
          headerShown: true,
          drawerLabel: 'Books',
          drawerIcon: ({color}) => (
            <AppIcon name="book-outline" size={22} color={color} />
          ),
        }}
        component={StackNavigation}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          drawerLabel: 'FAQ',
          drawerIcon: ({color}) => (
            <AppIcon name="reorder-four-outline" size={22} color={color} />
          ),
        }}
        name="FAQ"
        component={FAQScreen}
      />
      <Drawer.Screen
        name="PrivacyPloicy"
        options={{
          headerShown: true,

          drawerLabel: 'Privacy Ploicy',
          drawerIcon: ({color}) => (
            <AppIcon name="alert-circle" size={22} color={color} />
          ),
        }}
        component={PrivacyPolicyScreen}
      />
      <Drawer.Screen
        name="Help"
        options={{
          headerShown: true,

          drawerLabel: 'Call Us / Helpline',
          drawerIcon: ({color}) => (
            <AppIcon name="people-circle" size={22} color={color} />
          ),
        }}
        component={HelpScreen}
      />
      <Drawer.Screen
        name="Refer"
        options={{
          headerShown: true,

          drawerLabel: 'Tell a Friend',
          drawerIcon: ({color}) => (
            <AppIcon name="share-social-outline" size={22} color={color} />
          ),
        }}
        component={ReferScreen}
      />
     
      <Drawer.Screen
        name="Settings"
        options={{
          headerShown: true,
          drawerLabel: 'Settings',
          drawerIcon: ({color}) => (
            <AppIcon name="settings-outline" size={22} color={color} />
          ),
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
