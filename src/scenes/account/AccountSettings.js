import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { checkUser } from "../../api/user/user";
import { accountList } from "../../components/Lists/accountList";
import AButton from "../../components/GuideInput/AButton";
import * as firebase from "firebase";
import TermsContext from "../../components/Context/accountContext/TermsContext";

export default function AccountSettings({ navigation }) {
  return (
    <SafeAreaView style={styles.v_container}>
      <Text>Account details</Text>
      <Text>{navigation.titleParams}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  v_container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
