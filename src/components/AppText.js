import React from 'react';
import {Text} from 'react-native';

function AppText({
  children,
  fontSize = 'sm',
  fontFamily = 'GoogleSans-Regular',
  // style = {},
  color,
  ...otherProps
}) {
  return (
    <Text
      fontSize={fontSize}
      // color={cl}
      {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
