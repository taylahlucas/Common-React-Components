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
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Main from './src/screens/Main.native';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Main />
    </SafeAreaView>
  );
}

export default App;
