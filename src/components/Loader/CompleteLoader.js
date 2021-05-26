import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default class Completed extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          loop={false}
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../../assets/complete.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});