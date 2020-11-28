import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SignIn from "../../components/user/signIn";
import SignUp from "../../components/user/signUp";

function AuthNavigator() {
  const [signIn, setSignIn] = useState(true);

  return (
    <>
      {signIn ? (
        <SignIn setSignIn={setSignIn} />
      ) : (
        <SignUp setSignIn={setSignIn} />
      )}
    </>
  );
}
export default AuthNavigator;
