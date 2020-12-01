import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";
import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

export default function GuideButton({ title, modeValue, ...rest }) {
  return (
    <Button
      mode={modeValue}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: width / 1.5,
    height: height / 15,
    backgroundColor: "#98DDB5",
  },
});
