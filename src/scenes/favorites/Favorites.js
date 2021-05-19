import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Planning() {
  return (
    <View style={styles.container}>
      <Text>Favourites</Text>
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
