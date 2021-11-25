import React from 'react';
import { StyleSheet } from 'react-native';
import MainNavigationContainer from './Navigator/MainNavigationContainer';

export default function App() {
  return <MainNavigationContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
