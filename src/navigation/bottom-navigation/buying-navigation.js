import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Buying from "../../scenes/buy/buying";

const Stack = createStackNavigator();

export default function BuyingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buying" component={Buying} />
    </Stack.Navigator>
  );
}
