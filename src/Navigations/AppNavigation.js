import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator(); 
import Index1 from '../Screens/About US/Index1'
import Index2 from '../Screens/About US/Index2'
import LoginStack from './LoginStack'


const screenOptionStyle={
    headerShown:false,
}
const AppNavigation= ()=>{
    return(
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="AboutUs1" component={Index1}/>
            <Stack.Screen name="LoginStack" component={LoginStack}/>
      </Stack.Navigator>
    )
}

export default AppNavigation