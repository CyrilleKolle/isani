import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text>Messages here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
