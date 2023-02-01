import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {AppIcon} from '../../components';
import { RFValue } from '../../utils/npm-helper/react-native-responsive-fontsize';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'lightGray'}}>
        <ImageBackground
          source={require('../../Assets/Images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              backgroundColor: '#ccc',
            }}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: 'GoogleSans-Medium',
              marginBottom: 5,
            }}>
            John Doe
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'GoogleSans-Regular',
                marginRight: 5,
              }}>
              jd@gmail.com
            </Text>
            {/* <AppIcon name="mail" size={14} color="#ccc" /> */}
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{padding: RFValue(10), borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppIcon name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: 'GoogleSans-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppIcon name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: 'GoogleSans-Medium',
                marginLeft: RFValue(20),
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
