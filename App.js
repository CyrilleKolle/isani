import React from "react";
import AppNavigator from "./src/navigation/app-navigator";
import { Host } from "react-native-portalize";
import { StatusBar } from "react-native";
import NetInformation from "./src/components/Network/NetInformation";
import { RootSiblingParent } from "react-native-root-siblings";
export default function App() {
  return (
    <>
      <RootSiblingParent>
        <Host>
          <NetInformation />
          <StatusBar backgroundColor="black" />
          <AppNavigator />
        </Host>
      </RootSiblingParent>
    </>
  );
}
