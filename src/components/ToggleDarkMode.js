import React from 'react';
import {Pressable} from 'react-native';
import {colorModeManager} from '../Theme';
import AppIcon from './AppIcon';
import {hp} from '../utils/dimensions';
import useThemeToggler from '../Theme/hooks/useThemeToggler';

function ToggleDarkMode() {
  const {isThemeDark, toggleTheme, iconName} = useThemeToggler();
  const isDarkModeSupported = true;

  const handleToggleTheme = async () => {
    if (isDarkModeSupported) {
      const theme = await colorModeManager.get();
      let mode = theme === 'light' ? 'dark' : 'light';
      await colorModeManager.set(mode);
      toggleTheme();
    }
  };

  return (
    <Pressable onPress={handleToggleTheme} unstable_pressDelay={0} style={{marginRight:10}}>
      <AppIcon
        name={iconName}
        size={hp(25)}
        color={isThemeDark ? 'white' : 'white'}
      />
    </Pressable>
  );
}

export default ToggleDarkMode;
