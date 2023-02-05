import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppThemeScreen} from '../../../components';
import MaterialTopNavbar from '../../../Navigation/material.top.navigation';

export default function FixedTabsScreen() {
  return (
    <AppThemeScreen>
      <MaterialTopNavbar />
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({});
