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
import { checkUser } from "../../api/user/user";
import { accountList } from "../../components/Lists/accountList";
import AButton from "../../components/GuideInput/AButton";
import * as firebase from "firebase";

export default function Settings({ navigation }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    userAuthenticated();
  }, []);

  const userAuthenticated = async () => {
    const signedIn = await checkUser();
    if (!signedIn) {
      //setUser(true);
      navigation.navigate("SignUp");
    }
    console.log(signedIn);
  };
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate("SignUp");
    } catch (e) {
      console.log("error logging out" + e);
    }
  };

  return (
    <SafeAreaView style={styles.v_container}>
      <FlatList
        data={accountList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OptionsDetails");
            }}
          >
            <View style={styles.container}>
              <View style={styles.roww}>
                <Text style={styles.row_title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
      />
      <AButton
        title="Sign Out"
        modeValue="text"
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={handleSignOut}
      />
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
    //color: colors.weather_text_color,
    textAlignVertical: "top",
    includeFontPadding: false,
    flex: 0,
    //fontSize: values.font_place_size,
    //fontFamily: values.font_body,
  },
  navButtonText: {
    fontSize: 10,
  },
});
