import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../scenes/home/home";
import Fashion from "../../scenes/home/Fashion";
import Categories from "../../components/AllCategories/Categories";
import Category from "../../scenes/home/categoryDetails/Category";
import Details from "../../scenes/home/categoryDetails/Detail";
import Listings from "../../scenes/buy/Listings";
import ListingDetails from "../../scenes/buy/ListingDetails";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Fashion" component={Fashion} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Detail" component={Details} />
      <Stack.Screen name="Listings" component={Listings} />
      <Stack.Screen name="ListingDetails" component={ListingDetails} />
    </Stack.Navigator>
  );
}
