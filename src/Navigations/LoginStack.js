import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../Screens/Login/Index';
const Stack = createStackNavigator(); 
import ContainerTab from './ContainerTab'
import Register  from '../Screens/Register/Index';
import Order from  '../Screens/Order/Index';
import Success from  '../Screens/Success/Index';

const screenOptionStyle={
    headerShown:false,
}
const LoginStack= ()=>{
    return(
      <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="ContainerTab" component={ContainerTab}/>
          <Stack.Screen name="Order" component={Order}/>
          <Stack.Screen name="Success" component={Success}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    )
}

export default LoginStack