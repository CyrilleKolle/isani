import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function Reviews({ route, navigation }) {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Reviews</Text>
      <Text>{item.title}</Text>
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
