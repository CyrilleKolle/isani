import React from "react";
import BottomTabNavigator from "./bottom-tab-navigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
