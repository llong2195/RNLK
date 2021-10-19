import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Search from '../Screens/Search/Index';
import SearchProduct from '../Screens/SearchProduct/Index';
import ProductDetail from '../Screens/ProductDetail/Index';
import Comment from '../Screens/Comment/Index';
const Stack = createStackNavigator(); 

const screenOptionStyle={
    headerShown:false,
}
const SearchNavigation= ()=>{
    return(
      <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Search" component={Search}/>
          <Stack.Screen name="SearchProduct" component={SearchProduct}/>
          <Stack.Screen name="ProductDetail" component={ProductDetail}/>
          <Stack.Screen name="Comment" component={Comment}/>
      </Stack.Navigator>
    )
}

export default SearchNavigation