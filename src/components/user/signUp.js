import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Title, IconButton } from "react-native-paper";
import AInput from "../GuideInput/AInput";
import AButton from "../GuideInput/AButton";
import { signUp } from "../../api/user/user";
import AuthModalScreen from "../Modal/modalScenes/AuthModalScreen";

function SignUp({ navigation, setSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, SetFeedback] = useState("");

  const handleSignUp = async () => {
    const promise = await signUp(email, password);
    console.log(promise);
    switch (promise) {
      case "success":
        navigation.navigate("Settings");
        break;
      case "inuse":
        SetFeedback("The chosen e-mail is already in use");
        //navigation.navigate("Modal");
        <AuthModalScreen />;
        break;
      case "invalid":
        SetFeedback("invalid-email");
        //navigation.navigate("Modal");
        <AuthModalScreen />;
        break;
      case "error":
        SetFeedback("That email address is invalid!");
        // navigation.navigate("Modal");
        <AuthScreenModal />;
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.feedback}>
        <Text>{feedback}</Text>
      </View>

      <View style={styles.container}>
        <Title style={styles.titleText}>Register to chat</Title>
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
          title="Signup"
          modeValue="contained"
          labelStyle={styles.loginButtonLabel}
          onPress={handleSignUp}
        />
        {/* <AButton
        icon="keyboard-backspace"
        size={30}
        style={styles.navButton}
        color="#6646ee"
        onPress={() => navigation.navigate("SignIn")}
        //onPress={() => setSignIn(true)}
      /> */}
        <AButton
          title="Sign in instead"
          modeValue="text"
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate("SignIn")}
        />
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
