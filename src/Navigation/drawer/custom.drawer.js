import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import useThemeToggler from '../../Theme/hooks/useThemeToggler';
import {colors} from '../../Theme/colors';
import {AppText} from '../../components';
import { RFValue } from '../../utils/npm-helper/react-native-responsive-fontsize';
import { hp } from '../../utils/dimensions';

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
            padding: RFValue(20),
            borderColor: isThemeDark ? colors.dark.sidebar : 'white',
            borderWidth: 0.5,
            borderBottomColor: isThemeDark ? 'white' : colors.common.gray,
          }}
          onPress={() => props.navigation.navigate('MyProfile')}>
          <View
            style={{
              height: hp(80),
              width: hp(80),
              borderRadius: hp(40),
              marginBottom: hp(10),
              backgroundColor: '#516195',
            }}
          />
          <AppText
            style={{
              color: isThemeDark ? 'white' : 'black',
              fontSize: RFValue(18),
              fontFamily: 'GoogleSans-Medium',
              marginBottom: hp(5),
            }}>
            John Doe
          </AppText>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: isThemeDark ? 'white' : 'black',
                fontFamily: 'GoogleSans-Regular',
                marginRight: hp(5),
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
            paddingTop: hp(10),
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
