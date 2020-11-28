import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../scenes/sell/search";
import SellingForm from "../../scenes/sell/SellingForm";
import CharityList from "../../scenes/sell/CharityList";

const Stack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sell" component={Search} />
      <Stack.Screen name="SellingForm" component={SellingForm} />
      <Stack.Screen name="CharityList" component={CharityList} />
    </Stack.Navigator>
  );
}
