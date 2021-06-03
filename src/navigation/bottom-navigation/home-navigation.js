import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../scenes/home/home";
import Fashion from "../../scenes/home/Fashion";
import Categories from "../../components/AllCategories/Categories";
import Listings from "../../scenes/buy/Listings";
import ListingDetails from "../../scenes/buy/ListingDetails";
import SellingForm from "../../scenes/sell/SellingForm";
const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Fashion" component={Fashion} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Listings" component={Listings} />
      <Stack.Screen name="ListingDetails" component={ListingDetails} />
      <Stack.Screen name="SellingForm" component={SellingForm} />
    </Stack.Navigator>
  );
}
