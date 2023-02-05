import {View, Pressable} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigation from './tab.navigation';
import FAQScreen from '../Screens/Drawer/FAQ';
import ReferScreen from '../Screens/Drawer/Refer';
import {AppIcon} from '../components';
import CustomDrawer from './drawer/custom.drawer';
import {RFValue} from '../utils/npm-helper/react-native-responsive-fontsize';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import ToggleDarkMode from '../components/ToggleDarkMode';
import useThemeToggler from '../Theme/hooks/useThemeToggler';
import {colors} from '../Theme/colors';
import StackNavigation from './stack.navigation';
import {hp} from '../utils/dimensions';
import AnimatedPressable from '../components/AppAnimatedPressable';
import SettingsStackNavigation from './drawer/stack-settings';
import {useTranslation} from 'react-i18next';
import LanguageScreen from '../Screens/Drawer/Language';
import DropdownScreen from '../Screens/Drawer/Dropdowns';
import AnimationsScreen from '../Screens/Drawer/Animations';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props) {
  const navigation = useNavigation();
  const {isThemeDark} = useThemeToggler();
  const {t, i18n} = useTranslation();
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
          fontFamily: 'GoogleSans-Regular',
          fontSize: RFValue(16),
        },
        drawerContentContainerStyle: {
          drawerBackgroundColor: '#2e343d',
        },
        headerLeft: () => (
          <View style={{marginLeft: hp(20)}}>
            <AnimatedPressable
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <AppIcon name={'menu'} size={hp(26)} color="white" />
            </AnimatedPressable>
          </View>
        ),
        headerRight: () => (
          <Pressable>
            <ToggleDarkMode />
          </Pressable>
        ),
        headerStyle: {
          backgroundColor: '#516195', //Set Header color
          height: 70,
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'GoogleSans-Regular',
          fontSize: 14,
        },
      }}>
      <Drawer.Screen
        name="Tabs"
        options={{
          headerShown: false,
          headerLeftLabelVisible: true,
          drawerLabel: t('common:tabs'),
          drawerIcon: ({color}) => (
            <AppIcon name="home" size={hp(22)} color={color} />
          ),
        }}
        component={TabNavigation}
      />
      <Drawer.Screen
        name="MyProfile"
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: true,
          label: t('common:profile'),
          drawerIcon: ({color}) => (
            <AppIcon name="person" size={hp(22)} color={color} />
          ),
        }}
        component={StackNavigation}
      />
      <Drawer.Screen
        name="Dropdowns"
        options={{
          headerShown: true,
          drawerLabel: t('common:custom_dropdown'),
          drawerIcon: ({color}) => (
            <AppIcon name="book" size={hp(22)} color={color} />
          ),
        }}
        component={DropdownScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          drawerLabel: t('common:faq'),
          drawerIcon: ({color}) => (
            <AppIcon name="reorder-four-outline" size={hp(22)} color={color} />
          ),
        }}
        name="FAQ"
        component={FAQScreen}
      />

      <Drawer.Screen
        name="Refer"
        options={{
          headerShown: true,
          drawerLabel: t('common:share'),
          drawerIcon: ({color}) => (
            <AppIcon name="share-social-outline" size={hp(22)} color={color} />
          ),
        }}
        component={ReferScreen}
      />
      <Drawer.Screen
        name="Animations"
        options={{
          headerShown: true,
          drawerLabel: t('common:animations'),
          drawerIcon: ({color}) => (
            <AppIcon name="bonfire-outline" size={hp(22)} color={color} />
          ),
        }}
        component={AnimationsScreen}
      />
      <Drawer.Screen
        name="Language"
        options={{
          headerShown: true,
          drawerLabel: t('common:language'),
          drawerIcon: ({color}) => (
            <AppIcon name="language-outline" size={hp(22)} color={color} />
          ),
        }}
        component={LanguageScreen}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          headerShown: false,
          drawerLabel: t('common:settings') + ' ' + '(Stack Nav)',
          drawerIcon: ({color}) => (
            <AppIcon name="settings-outline" size={22} color={color} />
          ),
        }}
        component={SettingsStackNavigation}
      />
    </Drawer.Navigator>
  );
}
