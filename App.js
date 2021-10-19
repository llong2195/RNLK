import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/Navigations/LoginStack'
import {Provider} from 'react-redux';
import store from './src/Components/Stores/Index'
import AppNavigation from './src/Navigations/AppNavigation'


const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store = {store}>
      <NavigationContainer >
        <AppNavigation/>
      </NavigationContainer>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab:{
    backgroundColor: 'red',
    marginTop:20,
  }
});
export default App;
