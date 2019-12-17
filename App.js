import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UtilityThemeProvider } from 'react-native-design-utility';
 
import { theme } from './theme';

export default function App() {
  return (
    <UtilityThemeProvider theme={theme}>
    <View style={styles.container}>
      <Text>Wassup</Text>
      <Text>Sell this</Text>
    </View>
    </UtilityThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
