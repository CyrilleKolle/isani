import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Title, IconButton } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import AInput from "../GuideInput/AInput";
import AButton from "../GuideInput/AButton";
import { signUp } from "../../api/user/user";
import TextInput from "../GuideInput/TextInput";
import TextForm from "../GuideInput/TextForm";

function SignUp({ navigation, setSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, SetFeedback] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSignUp = async () => {
    const promise = await signUp(email, password);
    console.log(promise);
    switch (promise) {
      case "success":
        navigation.dispatch(
          CommonActions.reset({
            routes: [{ name: "BottomNav" }],
          })
        );
        break;
      case "inuse":
        SetFeedback("The chosen e-mail is already in use");
        break;
      case "invalid":
        SetFeedback("The email address is invalid!");
        break;
      case "error":
        SetFeedback("Error creating email!");
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
        <TextInput
          onPress={() => {
            setTerms(true);
          }}
          labelName="By siging up you agree to isani terms of conditions"
        />
        <AButton
          text="Signup"
          size="large"
          modeValue="contained"
          labelStyle={styles.loginButtonLabel}
          onPress={() => handleSignUp()}
        />
        <AButton
          text="Sign in instead"
          size="large"
          modeValue="text"
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate("SignIn")}
        />
        {terms && <TextForm />}
      </View>
    </View>
  );
}
export default SignUp;

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
    color: "#f5f5f5",
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
  feedback: {
    marginTop: 50,
    color: "red",
  },
});
