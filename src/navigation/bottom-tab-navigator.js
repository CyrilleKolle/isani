import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BuyingNavigator from "../navigation/bottom-navigation/buying-navigation";
import HomeNavigator from "../navigation/bottom-navigation/home-navigation";
import PlanningNavigator from "../navigation/bottom-navigation/planning-navigation";
import SearchNavigator from "../navigation/bottom-navigation/search-navigation";
import SettingsNavigator from "../navigation/bottom-navigation/settings-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={HomeNavigator}
        name="Home"
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "shop",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
        component={BuyingNavigator}
        name="Buying"
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Sell",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={size} />
          ),
        }}
        component={SearchNavigator}
        name="Search"
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="thumb-up" color={color} size={size} />
          ),
        }}
        component={PlanningNavigator}
        name="Planning"
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={SettingsNavigator}
        name="Settings"
      />
    </BottomTab.Navigator>
  );
}
