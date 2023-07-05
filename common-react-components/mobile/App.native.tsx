/**
 * Sample React Native App
 *
 * @format
 */

import React from 'react';
// import {
//   useColorScheme,
// } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator.native';


function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   flex: 1,
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  // };

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
