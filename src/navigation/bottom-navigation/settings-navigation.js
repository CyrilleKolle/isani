import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../../scenes/account/settings";
import Messages from "../../scenes/account/Messages";
import ProfileInformation from "../../scenes/account/ProfileInformation";
import TermsConditions from "../../scenes/account/termsConditions";
import AccountSettings from "../../scenes/account/AccountSettings";
import FAQ from "../../scenes/account/FAQ";
import CustomerService from "../../scenes/account/CustomerService";
import Reviews from "../../scenes/account/Reviews";

const Stack = createStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Settings Page" component={Settings} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="ProfileInformation" component={ProfileInformation} />

      <Stack.Screen name="Terms" component={TermsConditions} />
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="CustomerService" component={CustomerService} />
      <Stack.Screen name="Reviews" component={Reviews} />
    </Stack.Navigator>
  );
}
