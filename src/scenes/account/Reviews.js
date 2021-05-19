import React from "react";
import { Text, SafeAreaView } from "react-native";

export default function Reviews({ route, navigation }) {
  const { item } = route.params;
  return (
    <SafeAreaView>
      <Text>Reviews</Text>
      <Text>{item.title}</Text>
    </SafeAreaView>
  );
}
