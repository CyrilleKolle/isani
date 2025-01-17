import React from "react";
import ImageSlider from "react-native-image-slider";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import KidImage from "../../../assets/Kids.jpg";

function DefaultView() {
  const images = [KidImage, KidImage, KidImage, KidImage];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.contentText}>Content 1</Text>
      </View>
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={100}
        images={images}
        customButtons={(position, move) => (
          <View style={styles.buttons}>
            {images.map((image, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  underlayColor="#ccc"
                  onPress={() => move(index)}
                  style={styles.button}
                >
                  <Text style={position === index && styles.buttonSelected}>
                    {index + 1}
                  </Text>
                </TouchableHighlight>
              );
            })}
          </View>
        )}
      />
      <View style={styles.content2}>
        <Text style={styles.contentText}>Content 2</Text>
      </View>
    </SafeAreaView>
  );
}
export default DefaultView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  slider: { backgroundColor: "#000", height: 350 },
  content1: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  content2: {
    width: "100%",
    height: 100,
    marginTop: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: { color: "#fff" },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSelected: {
    opacity: 1,
    color: "red",
  },
  customSlide: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  customImage: {
    width: 100,
    height: 100,
  },
});
