import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from '../../../scenes/profile/settings'
import AuthScreenModal from '../modalScenes/AuthModalScreen'
function AuthModal() {



const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "transparent" },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: "clamp",
            }),
          },
        }),
      }}
      mode="modal"
    >
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
      <Stack.Screen name="Modal" component={AuthScreenModal} />
    </Stack.Navigator>
  );
}
export default AuthModal;
