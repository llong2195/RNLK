import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator(); 
import Profile from '../Screens/Profile/Index'
import Purchase  from '../Screens/ListCartUser/Index';


const screenOptionStyle={
    headerShown:false,
}
const OrderPurchase= ()=>{
    return(
      <Stack.Navigator >
          <Stack.Screen name="Profile" options={screenOptionStyle} component={Profile}/>
          <Stack.Screen name="Purchase" component={Purchase} />
      </Stack.Navigator>
    )
}

export default OrderPurchase