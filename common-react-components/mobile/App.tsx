/**
 * Sample React Native App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator.native';
import Home from './src/screens/Home.native';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
