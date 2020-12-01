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
      //navigation.navigate("SignUp");
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: "SignUp" },
            // {
            //   name: "Profile",
            //   params: { user: "jane" },
            // },
          ],
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

  return (
    <SafeAreaView style={styles.v_container}>
      <FlatList
        data={accountList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OptionsDetails");
            }}
            // onPress={handleNavigate}
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
        modeValue="contained"
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
