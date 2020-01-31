import React from 'react';
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';
import Navigation from './src/screens';
import { theme } from './theme';

export default function App() {
  return (
    <UtilityThemeProvider theme={theme}>
        <Navigation/>
    </UtilityThemeProvider>
  );
}


