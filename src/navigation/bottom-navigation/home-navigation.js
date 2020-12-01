import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../scenes/home/home";
import FemaleCategory from "../../components/AllCategories/FemaleCategory";
import MaleCategory from "../../components/AllCategories/MaleCategory";
import KidCategory from "../../components/AllCategories/KidsCategory";
import Fashion from "../../scenes/home/Fashion";
import Categories from "../../components/AllCategories/Categories";
import Category from "../../scenes/home/categoryDetails/Category";
import Details from "../../scenes/home/categoryDetails/Detail";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Female" component={FemaleCategory} />
      <Stack.Screen name="Kids" component={KidCategory} />
      <Stack.Screen name="Male" component={MaleCategory} />
      <Stack.Screen name="Fashion" component={Fashion} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
}
