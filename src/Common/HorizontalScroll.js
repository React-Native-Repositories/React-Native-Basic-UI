import React, {useState, useEffect, useRef} from 'react';
import {Dimensions} from 'react-native';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {hp} from '../utils/dimensions';

const screenWidth = Dimensions.get('window').width;

const HorizontalScrollMenu = ({
  items,
  onPress,
  upperCase = false,
  textStyle,
  buttonStyle,
  activeTextColor = '#ffffff',
  activeBackgroundColor = '#000000',
  selected = 0,
  scrollAreaStyle,
  keyboardShouldPersistTaps = 'always',
  itemWidth = 100,
}) => {
  const [index, setIndex] = useState(selected);
  const [cords, setCords] = useState();

  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (selected != index) {
      setIndex(selected);
      scrollToPosition();
    }

    if (selected) {
      setIndex(selected);
      scrollToPosition();
    }
  }, [selected]);

  const scrollToDefaultIndex = () => {
    let x = itemWidth * selected;
    if (scrollViewRef.current !== null) {
      scrollViewRef.current.scrollTo({
        x: x,
        y: 0,
        animated: true,
      });
    }
  };

  const scrollToPosition = () => {
    let x = itemWidth * selected;
    if (cords !== undefined && scrollViewRef.current !== null) {
      scrollViewRef.current.scrollTo({
        x: x,
        y: 0,
        animated: true,
      });
    }
  };

  const onLayoutScrollView = event => {
    const layout = event.nativeEvent.layout;

    setTimeout(scrollToDefaultIndex, 0);
    setCords(layout);
  };

  const centerPadding = screenWidth / 2 - itemWidth / 2;

  return (
    <View style={[scrollAreaStyle, styles.scrollAreaStyle]}>
      <ScrollView
        ref={scrollViewRef}
        bounces={true}
        horizontal={true}
        pagingEnabled={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          {
            // paddingHorizontal: centerPadding
            paddingHorizontal: hp(10),
          },
        ]}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
        {items.map((route, i) => (
          <Pressable
            style={[
              styles.tabItem,
              {width: itemWidth},
              index === route.id && styles.tabItemFocused,
              buttonStyle ? buttonStyle : styles.buttonStyles,
              index === route.id && activeBackgroundColor
                ? {backgroundColor: activeBackgroundColor}
                : false,
            ]}
            key={(route.id ? route.id : i).toString()}
            onPress={() => {
              scrollToPosition();
              return onPress(route);
            }}
            onLayout={onLayoutScrollView}>
            <Text
              style={[
                textStyle ? textStyle : styles.tabItemText,
                index == route.id && styles.tabItemTextFocused,
                index == route.id && activeTextColor
                  ? {color: activeTextColor}
                  : false,
              ]}>
              {upperCase ? route.name.toUpperCase() : route.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    borderRadius: 10,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  tabItemText: {
    color: '#8C8C8C',
  },
  tabItemFocused: {
    borderWidth: 0,
  },
  tabItemTextFocused: {
    color: '#FFFFFF',
  },
  buttonStyles: {
    marginRight: 10,
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollAreaStyle: {
    height: 50,
  },
});

export default HorizontalScrollMenu;
