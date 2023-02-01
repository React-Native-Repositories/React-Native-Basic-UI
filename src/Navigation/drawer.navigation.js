import {StyleSheet, View} from 'react-native';
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
import {AppIcon} from '../components';
import CustomDrawer from './drawer/custom.drawer';

const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#3b4b82',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#2e343d',
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
        component={BooksScreen}
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
