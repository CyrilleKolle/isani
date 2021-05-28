import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { accountList } from "../../components/Lists/accountList";
import AButton from "../../components/GuideInput/AButton";
import * as firebase from "firebase";
import TermsContext from "../../components/Context/accountContext/TermsContext";

export default function Settings({ navigation }) {
  const [user, setUser] = useState(false);

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: "BottomNav" }],
        })
      );
    } catch (e) {
      console.log("error logging out" + e);
    }
  };
  const location = useContext(TermsContext);
  console.log(location);

  const handleNavigate = () => {
    accountList.map((nav) =>
      location === nav.title ? navigation.navigate("Terms") : null
    );
  };
  const openDetails = (item) => {
    navigation.navigate(item.targetScreen, {
      item,
    });
  };

  return (
    <SafeAreaView style={styles.v_container}>
      <FlatList
        data={accountList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openDetails(item)}>
            <View style={styles.container}>
              <View style={styles.roww}>
                <Text style={styles.row_title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
      />
      <View style={styles.bcontainer}>
        <AButton
          text="Sign Out"
          modeValue="Outlined"
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => handleSignOut()}
          style={{ borderRadius: 10 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bcontainer: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  v_container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  roww: {
    elevation: 1,
    borderRadius: 5,
    backgroundColor: "#e9e9e9",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
  },
  row_title: {
    textAlignVertical: "top",
fontWeight: 'bold',
    flex: 1,

  },
  navButtonText: {
    fontSize: 14,
  },
});
