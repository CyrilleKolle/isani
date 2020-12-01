import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
// import { Title } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import AInput from "../GuideInput/AInput";
import AButton from "../GuideInput/AButton";
import { signIn } from "../../api/user/user";

function SignIn({ navigation, setSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, SetFeedback] = useState("");

  const handleSignIn = async () => {
    const promise = await signIn(email, password);
    console.log("this is sign in" + promise);
    switch (promise) {
      case "success":
        // navigation.navigate("Settings");
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: "Settings" },
              // {
              //   name: "Profile",
              //   params: { user: "jane" },
              // },
            ],
          })
        );
        break;
      case "inuse":
        SetFeedback("The chosen e-mail is already in use");
        //navigation.navigate("Modal");

        break;
      case "invalid":
        SetFeedback("invalid-email");
        //navigation.navigate("Modal");

        break;
      case "error":
        SetFeedback("That email address is invalid!");
        // navigation.navigate("Modal");

        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.feedback}>
        <Text>{feedback}</Text>
      </View>
      <View style={styles.container}>
        {/* <Title style={styles.titleText}>Welcome to Chat app</Title> */}
        <AInput
          labelName="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <AInput
          labelName="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <AButton
          title="Login"
          modeValue="contained"
          labelStyle={styles.loginButtonLabel}
          onPress={handleSignIn}
        />
        <AButton
          title="New user?"
          modeValue="text"
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
}
export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
  feedback: {
    marginTop: 50,
    color: "red",
  },
});
