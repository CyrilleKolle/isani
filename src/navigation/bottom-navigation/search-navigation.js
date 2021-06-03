import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../scenes/sell/search";
import SellingForm from "../../scenes/sell/SellingForm";
import CharityList from "../../scenes/sell/CharityList";
import FullCharityList from "../../scenes/sell/FullCharityList";
import FavoriteList from "../../scenes/sell/FavoriteList";
import ImageSequenceSlider from "../../components/functions/ImageSequenceSlider";
const Stack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SellingForm" component={SellingForm} />
      <Stack.Screen name="Sell" component={Search} />
      <Stack.Screen name="CharityList" component={CharityList} />
      <Stack.Screen name="FullCharityList" component={FullCharityList} />
      <Stack.Screen name="FavoriteList" component={FavoriteList} />
      <Stack.Screen
        name="ImageSequenceSlider"
        component={ImageSequenceSlider}
      />
    </Stack.Navigator>
  );
}
