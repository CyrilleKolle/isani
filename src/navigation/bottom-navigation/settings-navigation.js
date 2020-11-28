import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../../scenes/profile/settings";
import SignIn from "../../components/user/signIn";
import SignUp from "../../components/user/signUp";
import AccountOptions from "../../scenes/profile/accountOptions";
import OptionsDetails from "../../scenes/profile/OptionsDetails";
// import AuthModal from "../../components/Modal/modalStack/AuthModal"
import AuthScreenModal from "../../components/Modal/modalScenes/AuthModalScreen";
import Home from "../../scenes/home/home";

const Stack = createStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AccountOptions" component={AccountOptions} />
      <Stack.Screen name="OptionsDetails" component={OptionsDetails} />
      <Stack.Screen name="Modal" component={AuthScreenModal} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
