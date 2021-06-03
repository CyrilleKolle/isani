import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function AccountSettings() {
  return (
    <SafeAreaView style={styles.v_container}>
      <Text>Account details</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  v_container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  roww: {
    elevation: 1,
    borderRadius: 5,
    backgroundColor: "#e3e3e3",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 0,
  },
  row_title: {
    textAlignVertical: "top",
    includeFontPadding: false,
    flex: 0,
  },
  navButtonText: {
    fontSize: 10,
  },
});
