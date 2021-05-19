import React from "react";
import AppNavigator from "./src/navigation/app-navigator";
import { Host } from "react-native-portalize";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <Host>
        <StatusBar backgroundColor="black" />
        <AppNavigator />
      </Host>
    </>
  );
}
