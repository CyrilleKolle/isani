import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../../components/user/signIn";
import SignUp from "../../components/user/signUp";

const Stack = createStackNavigator();

export default function AuthenticationNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
