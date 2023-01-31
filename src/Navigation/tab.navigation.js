import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from '../utils/npm-helper/react-native-responsive-fontsize';
import {hp} from '../utils/dimensions';
import HomeScreen from '../Screens/Tab/Home';
import LiveClassScreen from '../Screens/Tab/LiveClass';
import DoubtsScreen from '../Screens/Tab/Doubts';

const Tab = createBottomTabNavigator();

function TabNavigation(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'red',
        tabBarInactiveBackgroundColor: 'green',
        tabBarLabelStyle: {
          fontSize: RFValue(12),
          fontFamily: 'GoogleSans-Regular',
          marginBottom: hp(10),
        },
        tabBarStyle: [
          {
            display: 'flex',
            height: Platform.OS === 'ios' ? hp(84) : hp(64),
            borderTopColor: 'gray',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          headerShown: false,
          // tabBarLabel: 'More',
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          // tabBarIcon: ({color}) => <HomeMoreSvgComponent />,
          tabBarIcon: ({color}) => (
            <View alignItems={'center'}>
              {/* icon here */}
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  marginTop: hp(2),
                }}>
                Dashboard
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
          // tabBarLabel: 'More',
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          // tabBarIcon: ({color}) => <HomeMoreSvgComponent />,
          tabBarIcon: ({color}) => (
            <View alignItems={'center'}>
              {/* icon here */}
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  marginTop: hp(2),
                }}>
                LiveClass
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
          // tabBarLabel: 'More',
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          // tabBarIcon: ({color}) => <HomeMoreSvgComponent />,
          tabBarIcon: ({color}) => (
            <View alignItems={'center'}>
              {/* icon here */}
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
