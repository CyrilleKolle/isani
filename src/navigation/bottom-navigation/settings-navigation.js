import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../../scenes/account/settings";
import SignIn from "../../components/user/signIn";
import SignUp from "../../components/user/signUp";
import Messages from "../../scenes/account/Messages";
import ProfileInformation from "../../scenes/account/ProfileInformation";
import { Button } from "react-native";
import AuthScreenModal from "../../components/Modal/modalScenes/AuthModalScreen";
import Home from "../../scenes/home/home";
import TermsConditions from "../../scenes/account/termsConditions";
import AccountSettings from "../../scenes/account/AccountSettings";
import FAQ from "../../scenes/account/FAQ";
import CustomerService from "../../scenes/account/CustomerService";
import Reviews from "../../scenes/account/Reviews";
const Stack = createStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings Page" component={Settings} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="ProfileInformation" component={ProfileInformation} />
      <Stack.Screen name="Modal" component={AuthScreenModal} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Terms" component={TermsConditions} />
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="CustomerService" component={CustomerService} />
      <Stack.Screen name="Reviews" component={Reviews} />
    </Stack.Navigator>
  );
}
