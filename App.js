/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  /* -------------------------------------------------------------------------- */
  /*                                    Log Section                             */
  /* -------------------------------------------------------------------------- */
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  LogBox.ignoreLogs(['NativeBase: The contrast ratio of']);
  LogBox.ignoreAllLogs(true);
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <SafeAreaProvider>
      <Text>Careerwill</Text>
    </SafeAreaProvider>
  );
}
export default App;
const styles = StyleSheet.create({});
