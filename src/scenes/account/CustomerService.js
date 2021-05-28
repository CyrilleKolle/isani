import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function CustomerService({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Customer Services</Text>
    </SafeAreaView>
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
