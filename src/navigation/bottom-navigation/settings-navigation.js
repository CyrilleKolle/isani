import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../../scenes/account/settings";
import SignIn from "../../components/user/signIn";
import SignUp from "../../components/user/signUp";
import AccountOptions from "../../scenes/account/accountOptions";
import OptionsDetails from "../../scenes/account/OptionsDetails";
import { Button } from "react-native";
import AuthScreenModal from "../../components/Modal/modalScenes/AuthModalScreen";
import Home from "../../scenes/home/home";
import TermsConditions from "../../scenes/account/termsConditions";

const Stack = createStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AccountOptions" component={AccountOptions} />
      <Stack.Screen name="OptionsDetails" component={OptionsDetails} />
      <Stack.Screen name="Modal" component={AuthScreenModal} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Terms" component={TermsConditions} />
    </Stack.Navigator>
  );
}
