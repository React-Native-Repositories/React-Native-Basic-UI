import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppIcon, AppText} from '../../components';
import {hp} from '../../utils/dimensions';
import {getValue} from '../../utils/lodash';

export default function DrawerHelper(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(getValue(props, `route`, ''))}>
        <AppIcon name={getValue(props, `icon`, '')} size={hp(18)} />
        <AppText>{getValue(props, `title`, '')}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
