import React, { useState, useEffect, useRef, useCallback } from "react";
import Modal from "react-native-modal";
import CreditCard from "react-native-credit-card-form-ui";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  View,
  Text,
  Dimensions,
} from "react-native";
import { checkUser } from "../../api/user/user";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import CompleteLoader from "../../components/Loader/CompleteLoader";

function PayForm() {
  const navigation = useNavigation();
  const router = useRoute();
  const creditCardRef = useRef();
  const [visible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [completeText, setCompleteText] = useState("");

  const handleSubmit = useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      setIsComplete(!isComplete);
      setIsVisible(!visible);
      console.log("ERROR: ", error);
      console.log("CARD DATA: ", data);
      setTimeout(() => {
        navigation.navigate("Listings");
      }, 500);
    }
  }, []);

  return (
    <>
      <Modal
        transparent={false}
        presentationStyle={"formSheet"}
        coverScreen={false}
        style={styles.centeredView}
        animationType={"slide"}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        onBackdropPress={() => {
          setIsVisible(!visible);
        }}
        animationOut="slideOutUp"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={20}
          style={styles.centeredView}
        >
          <CreditCard ref={creditCardRef} />
          <View style={styles.buttonView}>
            <Button
              title="Cancel"
              onPress={() => {
                setIsVisible(!visible);
              }}
            />
            <Button title="Pay" onPress={handleSubmit} />
          </View>
        </KeyboardAvoidingView>
      </Modal>
      {isComplete && (
        <Modal
          transparent={false}
          presentationStyle={"formSheet"}
          coverScreen={false}
          style={styles.centeredView}
          animationType={"slide"}
          visible={isComplete}
          onRequestClose={() => {
            setTimeout(() => {
              setIsComplete(!isComplete);
            }, 100);
          }}
          onShow={() => {
            setTimeout(() => {
              setCompleteText("Thanks for shopping on isani");
            }, 1500);
            setTimeout(() => {
              setIsComplete(!isComplete);
            }, 3500);
          }}
          onBackdropPress={() => {
            setIsVisible(!isComplete);
          }}
          animationOut="slideOutUp"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={20}
            style={styles.centeredView}
          >
            <CompleteLoader />
            <View style={styles.textView}>
              <Text>{completeText}</Text>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      )}
    </>
  );
}
export default PayForm;

const styles = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  centeredView: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
  buttonView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: Dimensions.get("window").width / 1.5,
  },
  textView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
});
