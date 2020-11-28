import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Planning from "../../scenes/favorites/planning";

const Stack = createStackNavigator();

export default function PlanningNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Planning" component={Planning} />
    </Stack.Navigator>
  );
}
