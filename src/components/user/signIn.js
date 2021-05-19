import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Title } from "react-native-paper";
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
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: "BottomNav" }],
          })
        );
        break;
      case "inuse":
        SetFeedback("The chosen e-mail is already in use");
        break;
      case "invalid":
        SetFeedback("invalid-email");
        break;
      case "error":
        SetFeedback("That email address is invalid!");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.feedback}>
        <Text>{feedback}</Text>
      </View>
      <View style={styles.container}>
        <Title style={styles.titleText}>welcome to isani</Title>
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
          size="large"
          backgroundColor="filled"
          text="Login"
          modeValue="contained"
          onPress={() => handleSignIn()}
        />
        <AButton
          text="New user?"
          size="large"
          modeValue="text"
          uppercase={false}
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
    backgroundColor: "#98DDB5",
    color: "#f5f5f5",
  },

  feedback: {
    marginTop: 50,
    color: "red",
  },
});
