import React from 'react';
import {Animated} from 'react-native';
import {Pressable} from 'native-base';
import useThemeToggler from '../Theme/hooks/useThemeToggler';
import {hp} from '../utils/dimensions';

const AnimatedPressable = props => {
  const {isThemeDark} = useThemeToggler();
  const animation = new Animated.Value(0);
  const fadeIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const bg = animation.interpolate(
    isThemeDark
      ? {
          inputRange: [0, 1],
          outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.1)'],
        }
      : {
          inputRange: [0, 1],
          outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.1)'],
        },
  );
  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      onPress={props.onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      // delayPressIn={0}
      unstable_pressDelay={0}>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          // top: -hp(7),
          // left: -hp(8),
          // top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          // justifyContent:'center',
          // alignSelf:'center',
          zIndex: 2,
          backgroundColor: bg,
          height: hp(40),
          width: hp(40),
          borderRadius: hp(20),
        }}
      />
      {/* <View {...props}> */}
      {props.children}
      {/* </View> */}
    </Pressable>
  );
};

export default AnimatedPressable;
