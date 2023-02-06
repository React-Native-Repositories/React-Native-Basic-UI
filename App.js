/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://dribbble.com/shots/5726952-Bingo-App-UI-Kit/attachments/11021810?mode=media
 * https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
 * https://github.dev/itzpradip/react-navigation-v6-mix
 * https://github.com/NyashaNziramasanga/react-native-horizontal-scroll-menu
 * @format
 * @flow strict-local
 */
import {LogBox} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DrawerNavigation from './src/Navigation/drawer.navigation';
import {
  colorModeManager,
  NativeBaseTheme,
  PreferencesContext,
} from './src/Theme';
import {NativeBaseProvider} from 'native-base';
import {colors} from './src/Theme/colors';
import {StatusBar} from 'rn-status-bar';
import './src/Language/DCSLocalize';

function App(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    getData();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                    Log Section                             */
  /* -------------------------------------------------------------------------- */
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  LogBox.ignoreLogs(['NativeBase: The contrast ratio of']);
  LogBox.ignoreAllLogs(true);
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  /* -------------------------------------------------------------------------- */
  /*                                  Theme Section                             */
  /* -------------------------------------------------------------------------- */
  const [isThemeDark, setIsThemeDark] = React.useState();
  const getData = async () => {
    const theme = await colorModeManager.get();
    setIsThemeDark(theme === 'dark' ? true : false);
  };
  const toggleTheme = React.useCallback(async () => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.light.primaryColorLight}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <NativeBaseProvider
          theme={NativeBaseTheme}
          colorModeManager={colorModeManager}>
          <PreferencesContext.Provider value={preferences}>
            <DrawerNavigation />
          </PreferencesContext.Provider>
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;
