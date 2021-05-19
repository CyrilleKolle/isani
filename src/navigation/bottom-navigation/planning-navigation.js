import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Favorites from "../../scenes/favorites/Favorites";

const Stack = createStackNavigator();

export default function PlanningNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}
