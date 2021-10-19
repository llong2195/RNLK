import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screens/Profile/Index";
import HomeNavigation from "./HomeNavigation";
import SearchNavigation from "./SearchNavigation";
import Cart from "../Screens/Cart/Index";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import OrderPurchase  from "./CartNavigation";

const Tab = createMaterialBottomTabNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const ContainerTab = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="Home"
      activeColor="#e93434"
      inactiveColor="black"
      barStyle={{ backgroundColor: "#ccc" }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchNavigation"
        component={SearchNavigation}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartNavigation"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigation"
        component={OrderPurchase}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ContainerTab;
