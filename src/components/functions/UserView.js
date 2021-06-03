import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function UserView() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const box1AnimationValue = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const show = setTimeout(() => {
      setVisible(true);
    }, 500);
    const animate = setTimeout(() => {
      Animated.spring(box1AnimationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 1000);
    return () => {
      clearTimeout(show);
      clearTimeout(animate);
    };
  }, [isFocused]);
  return (
    <>
      {visible && (
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Animated.View
            style={{
              ...styles.container,
              transform: [
                {
                  translateY: box1AnimationValue.interpolate({
                    inputRange: [0.01, 1],
                    outputRange: [0, -80],
                  }),
                },
              ],
            }}
          >
            <Text>Hello! sign in to continue shopping!</Text>
          </Animated.View>
        </TouchableOpacity>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fe8019",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.05,
    width: Dimensions.get("window").width * 0.8,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 15,
  },
});
