import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AButton = ({
  text,
  onPress,
  type = "filled",
  bordered = false,
  size = "large",
}) => {
  const buttonHeight = height * 0.06;
  const large = width / 1.5;
  const small = width / 2;
  const btnSize = size === "large" ? large : small;
  const btnBgColor = type === "filled" ? "#3f51b5" : "red";
  const btnTextColor = type === "filled" ? "#ffffff" : "#6371c2";
  const btnBorderRadius = bordered ? 30 : 5;

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius,
    marginBottom: 10,
    // height: buttonHeight,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 8,
    // fontFamily: "Quicksand-Medium",
  };

  const border = type === "outlined" && {
    borderColor: "#e7e7e7",
    borderWidth: 2,
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AButton;
