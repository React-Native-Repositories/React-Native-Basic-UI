import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AppIcon({name, ...otherProps}) {
  const iconName = name;
  Ionicons.loadFont()
  return <Ionicons name={iconName} {...otherProps} />;
}

export default AppIcon;
