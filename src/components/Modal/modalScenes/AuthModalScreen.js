import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";

function AuthScreenModal({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [signIn, setSignIn] = useState(true);

  useEffect((visible) => setVisible(visible));

  console.log("this is the modal screen")
  function handleToggle() {
    setVisible((wasOpened) => !wasOpened);
    navigation.goBack();
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}
      >
        <View
          style={{
            height: "50%",
            marginTop: "auto",
            backgroundColor: "blue",
          }}
        >
          <View style={styles.footer}>
            <Text style={styles.headerText}>This is Half Modal</Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setVisible(!visible);
              //navigation.goBack()
            }}
          >
            <Text style={styles.addButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setvisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
}
export default AuthScreenModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98B3B7",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 18,
    padding: 26,
  },
  noteHeader: {
    backgroundColor: "#42f5aa",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: "#ddd",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "black",
    padding: 20,
    backgroundColor: "#ddd",
    borderTopWidth: 2,
    borderTopColor: "#ddd",
  },

  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#98B3B7",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
