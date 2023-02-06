import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {gloablStyles} from '../../../Styles/global.styles';
import {AppThemeScreen} from '../../../components';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import HorizontalScrollMenu from '../../../Common/HorizontalScroll';
import {colors} from '../../../Theme/colors';

export default function DynamicTabsScreen() {
  const {isThemeDark} = useThemeToggler();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const NavigationTabs = [
    {
      id: 0,
      name: 'Tab1',
    },
    {
      id: 1,
      name: 'Tab2',
    },
    {
      id: 2,
      name: 'Tab3',
    },
    {
      id: 3,
      name: 'Tab4',
    },
    {
      id: 4,
      name: 'Tab5',
    },
    {
      id: 5,
      name: 'Tab6',
    },
  ];

  const onPress = route => {
    setSelectedIndex(route.id);
  };
  return (
    <AppThemeScreen>
      <HorizontalScrollMenu
        items={NavigationTabs}
        onPress={onPress}
        selected={selectedIndex}
        itemWidth={80}
        scrollAreaStyle={{height: 50}}
        activeBackgroundColor={colors.light.primaryColorLight}
        activeTextColor={'#fff'}
      />
      <View style={gloablStyles.container}>
        <Text style={{color: isThemeDark ? 'white' : 'black'}}>
          Horizontal Scroll Dynamic Tab {selectedIndex + 1}
        </Text>
      </View>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({});
