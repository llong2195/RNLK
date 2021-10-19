import React,{Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Screens/Home/Index';
import ProductList from '../Screens/ProductList/Index';
import ProductDetail from '../Screens/ProductDetail/Index';
import Comment from '../Screens/Comment/Index';
const Stack = createStackNavigator(); 

const screenOptionStyle={
    headerShown:false,
}
const HomeNavigation= ()=>{
    return(
      <Stack.Navigator >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="ProductList" component={ProductList}/>
          <Stack.Screen name="ProductDetail" component={ProductDetail}/>
          <Stack.Screen name="Comment" component={Comment}/>
      </Stack.Navigator>
    )
}

export default HomeNavigation