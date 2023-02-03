import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from '../utils/npm-helper/react-native-responsive-fontsize';
import {hp, wp} from '../utils/dimensions';
import HomeScreen from '../Screens/Tab/Home';
import LiveClassScreen from '../Screens/Tab/LiveClass';
import DoubtsScreen from '../Screens/Tab/Doubts';
import {AppIcon} from '../components';
import {colors} from '../Theme/colors';

const Tab = createBottomTabNavigator();
function TabNavigation(props) {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveBackgroundColor: '#3b4b82',
        tabBarInactiveBackgroundColor: '#516195',
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
              <AppIcon name="home" size={22} color={color} />
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  marginTop: hp(2),
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LiveClass"
        component={LiveClassScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarItemStyle: {
            backgroundColor: colors.common.red,
            position: 'absolute',
            bottom: 0,
            width: hp(62),
            height: hp(62),
            borderRadius: hp(31),
            zIndex: 8,
            left: hp(145),
          },
          tabBarIcon: ({focused, color}) => (
            <View alignItems={'center'}>
              <AppIcon
                name={!focused ? 'play' : 'videocam'}
                size={22}
                color={color}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  marginTop: hp(2),
                }}>
                Live
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Doubts"
        component={DoubtsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarItemStyle: {
            // borderTopStartRadius:20,
            // borderBottomLeftRadius:20,
            // marginLeft:5
          },
          tabBarIcon: ({focused, color}) => (
            <View alignItems={'center'}>
              <AppIcon name="help-circle" size={22} color={color} />
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  marginTop: hp(2),
                }}>
                Doubts
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
