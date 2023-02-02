import React from 'react';
import {PreferencesContext} from '../index';

const useThemeToggler = () => {
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  const iconName = isThemeDark ? 'sunny-outline' : 'moon';

  return {
    toggleTheme,
    isThemeDark,
    iconName,
  };
};

export default useThemeToggler;
