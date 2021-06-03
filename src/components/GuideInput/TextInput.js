import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

export default function TextInput({ labelName, ...rest }) {
  return (
    <Text style={styles.input} numberOfLines={1} {...rest}>
      {labelName}
    </Text>
  );
}

const styles = StyleSheet.create({
  input: {
    width: width / 1.5,
    height: height / 15,
  },
});
