import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Buying() {
  return (
    <View style={styles.container}>
      <Text>Buying</Text>
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
