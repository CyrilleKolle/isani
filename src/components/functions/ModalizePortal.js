import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";

function ModalizePortal({ placeholder, }) {
  const [selectTab, setSelectTab] = useState("");
  const setTab = (tab) => {
    setSelectTab(tab);
  };

  return <SafeAreaView style={styles.componentContainerStyle}></SafeAreaView>;
}
export default CharityList;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  introContainer: {
    opacity: 0.5,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  introText: {
    justifyContent: "space-around",
  },
  textAuthor: {
    flexDirection: "column",
    marginTop: 3,
    justifyContent: "flex-end",
  },
  componentContainerStyle: {
    flex: 1,
    backgroundColor: "rgb(235,235,235)",
  },

  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: Platform.OS === "iOS" ? 20 : 0,
  },

  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    // height: 44,
  },

  header_style: {
    width: "100%",
    height: 45,
    backgroundColor: "#020621",
    alignItems: "center",
    justifyContent: "center",
  },
});
