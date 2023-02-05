import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from '../utils/npm-helper/react-native-responsive-fontsize';
import {hp} from '../utils/dimensions';
import HomeScreen from '../Screens/Tab/Home';
import {AppIcon} from '../components';
import {colors} from '../Theme/colors';
import {useTranslation} from 'react-i18next';
import DynamicTabsScreen from '../Screens/Tab/DynamicTabs';
import FixedTabsScreen from '../Screens/Tab/FixedTabs';

const Tab = createBottomTabNavigator();
function TabNavigation(props) {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveBackgroundColor: '#3b4b82',
        tabBarInactiveBackgroundColor: '#3e4e87e3',
        tabBarLabelStyle: {
          fontSize: RFValue(12),
          fontFamily: 'GoogleSans-Regular',
          marginBottom: hp(10),
        },
        tabBarStyle: [
          {
            display: 'flex',
            height: hp(64),
            borderTopColor: 'gray',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarItemStyle: {
            // borderTopRightRadius:20,
            // borderBottomRightRadius:20,
            // marginRight:5
          },
          tabBarIcon: ({focused, color}) => (
            <View alignItems={'center'}>
              <AppIcon
                name={!focused ? 'home-outline' : 'home'}
                size={hp(22)}
                color={color}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  marginTop: hp(2),
                }}>
                {t('common:home')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FixedTabs"
        component={FixedTabsScreen}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          headerTitle: 'Fixed Tabs',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colors.light.primaryColorLight,
          },
          //--------------------------------- custom tab styles ------------------------//
          // tabBarItemStyle: {
          //   backgroundColor: colors.common.red,
          //   position: 'absolute',
          //   bottom: 0,
          //   top: -2,
          //   width: hp(68),
          //   height: hp(68),
          //   borderRadius: hp(34),
          //   zIndex: 8,
          //   left: (Dimensions.get('window').width / 2) - 34,
          //   borderColor: colors.light.background,
          //   borderWidth: 4,
          // },
          tabBarIcon: ({focused, color}) => (
            <View style={{justifyContent: 'center'}}>
              <AppIcon
                name={!focused ? 'list-outline' : 'list-circle'}
                size={hp(22)}
                color={color}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  alignSelf: 'center',
                }}>
                {t('common:fixed_tabs')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DynamicTabs"
        component={DynamicTabsScreen}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          headerTitle: 'Dynamic Tabs',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colors.light.primaryColorLight,
          },
          tabBarIcon: ({focused, color}) => (
            <View alignItems={'center'}>
              <AppIcon
                name={!focused ? 'copy-outline' : 'copy'}
                size={hp(22)}
                color={color}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  marginTop: hp(2),
                }}>
                {t('common:dynamic_tabs')}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
const styles = StyleSheet.create({});
