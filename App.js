/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://dribbble.com/shots/5726952-Bingo-App-UI-Kit/attachments/11021810?mode=media
 *
 * @format
 * @flow strict-local
 */
import {LogBox, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigation from './src/Navigation/drawer.navigation';
import {
  colorModeManager,
  NativeBaseTheme,
  PreferencesContext,
} from './src/Theme';
import {NativeBaseProvider} from 'native-base';
function App() {
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
      <NativeBaseProvider
        theme={NativeBaseTheme}
        colorModeManager={colorModeManager}>
        <PreferencesContext.Provider value={preferences}>
          <DrawerNavigation />
        </PreferencesContext.Provider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
export default App;
const styles = StyleSheet.create({});
