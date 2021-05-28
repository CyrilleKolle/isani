import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Firebase from "../../api/api";
import { checkUser } from "../../api/user/user";
import { Title, IconButton } from "react-native-paper";
import AInput from "../../components/GuideInput/AInput";
import AButton from "../../components/GuideInput/AButton";
import { signUp } from "../../api/user/user";
import TextInput from "../../components/GuideInput/TextInput";
import TextForm from "../../components/GuideInput/TextForm";
import { Dimensions } from "react-native";
export default function ProfileInformation(props) {
  const [userId, setUserId] = useState();
  const [feedback, SetFeedback] = useState("");
  const [fullName, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [address, SetAddress] = useState("");
  const [firtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address_, SetAddress_] = useState("");

  const userAuthenticated = async () => {
    const signedIn = await checkUser();
    if (signedIn) {
      const Id = Firebase.auth().currentUser.email;
      setUserId(Id);
    }
  };

  useEffect(() => {
    userAuthenticated();
  }, []);

  const handleProfileUpdate = () => {
    var user = Firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: fullName,
      })
      .then(function() {
        SetFeedback("success");
      })
      .catch(function(error) {
        SetFeedback("Profile update failed");
      });
  };

  useEffect(() => {
    var user = Firebase.auth().currentUser;
    if (user != null) {
      setFirstName(user.displayName);
    }
  });
  return (
    <View style={styles.container}>
      {Firebase.auth().currentUser.displayName ? (
        <View>
          <Text>{firtName}, thank you for using isani.</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.feedback}>
            <Text>{feedback}</Text>
          </View>

          <View style={styles.container}>
            <Title style={styles.titleText}>
              Welcome <Text style={{ color: "blue" }}>{userId}</Text> please
              complete your profile
            </Title>
            <AInput
              labelName="Full name"
              value={fullName}
              autoCapitalize="none"
              onChangeText={(firstname) => setFirstname(firstname)}
            />
            <AInput
              labelName="Lastname"
              value={lastname}
              autoCapitalize="none"
              onChangeText={(lastname) => setlastname(lastname)}
            />
            <AInput
              labelName="Address"
              value={address}
              autoCapitalize="none"
              onChangeText={(address) => SetAddress(address)}
            />
            <AButton
              text="Complete"
              size="large"
              modeValue="contained"
              labelStyle={styles.loginButtonLabel}
              onPress={() => handleProfileUpdate()}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
  container_1: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    width: Dimensions.get("window").width / 1.5,
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
