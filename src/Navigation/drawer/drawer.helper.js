import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppIcon, AppText} from '../../components';
import {hp} from '../../utils/dimensions';
import {getValue} from '../../utils/lodash';
import {RFValue} from '../../utils/npm-helper/react-native-responsive-fontsize';

export default function DrawerHelper(props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => props.navigation.navigate(getValue(props, `route`, ''))}>
        <AppIcon name={getValue(props, `icon`, '')} size={hp(18)} />
        <AppText style={styles.text}>{getValue(props, `title`, '')}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: RFValue(10),
    borderWidth:0.5,
    borderColor:'white',
    borderBottomColor:'red'
  },
  text:{
    marginLeft:RFValue(10)
  }
});
