import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  SafeAreaView,
  Header,
} from "react-native";
import TermsAndConditions from "./termsConditions";

export default function ProfileInformation(props) {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
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
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});
