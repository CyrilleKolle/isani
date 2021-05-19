import React, { useEffect, useRef } from "react";
import { StyleSheet, Dimensions, Text } from "react-native";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";

const { width, height } = Dimensions.get("screen");

export default function TextForm({ value }) {
  return (
    <>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginBottom: 10,
    width: width,
    height: height,
  },
  viewContainer: {
      
  },
});
