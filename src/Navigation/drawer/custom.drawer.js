import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import useThemeToggler from '../../Theme/hooks/useThemeToggler';
import {colors} from '../../Theme/colors';
import {AppText} from '../../components';

const CustomDrawer = props => {
  const {isThemeDark} = useThemeToggler();

  return (
    <View style={{flex: 1,backgroundColor:isThemeDark ? colors.dark.sidebar : 'white'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: isThemeDark
            ? colors.dark.sidebar
            : colors.light.sidebar,
        }}>
        <Pressable
          style={{
            padding: 20,
            borderColor: isThemeDark ? colors.dark.sidebar : 'white',
            borderWidth: 0.5,
            borderBottomColor: isThemeDark ? 'white' : colors.light.primaryColorLight,
          }}
          onPress={() => props.navigation.navigate('MyProfile')}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              backgroundColor: '#516195',
            }}
          />
          <AppText
            style={{
              color: isThemeDark ? 'white' : 'black',
              fontSize: 18,
              fontFamily: 'GoogleSans-Medium',
              marginBottom: 5,
            }}>
            John Doe
          </AppText>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: isThemeDark ? 'white' : 'black',
                fontFamily: 'GoogleSans-Regular',
                marginRight: 5,
              }}>
              jd@gmail.com
            </Text>
          </View>
        </Pressable>
        <View
          style={{
            flex: 1,
            backgroundColor: isThemeDark
              ? colors.dark.sidebar
              : colors.light.sidebar,
            paddingTop: 10,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
