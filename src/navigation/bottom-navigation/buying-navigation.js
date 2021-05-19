import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listings from "../../scenes/buy/Listings";
import ListingDetails from "../../scenes/buy/ListingDetails";

const Stack = createStackNavigator();

export default function BuyingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listings" component={Listings} />
      <Stack.Screen name="ListingDetails" component={ListingDetails} />
    </Stack.Navigator>
  );
}
