import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Categories(props) {
  //const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const { imageUri, titleFirst, titleSecond, subTitle } = props;

  function handleDimensin() {
    const { imageUri } = props;
    setHeight(Image.resolveAssetSource(imageUri).height);
    setWidth(Image.resolveAssetSource(imageUri).width);
  }
  useEffect(() => {
    handleDimensin();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("Listings", {
            item: {
              name: titleFirst,
            },
          })
        }
        style={{
          height: height,
        }}
      >
        <ImageBackground
          source={imageUri}
          style={{
            flex: 1,
            width: 250,
            height: 250,
            alignSelf: "stretch",
            resizeMode: "contain",
            padding: 5,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flex: 2,
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "500",
              }}
            >
              {titleFirst}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "500",
              }}
            >
              {titleSecond}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#46c17e",
                fontWeight: "500",
              }}
            >
              {subTitle}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    borderRadius: 20,
  },
  name: {
    color: "#5a647d",
    fontWeight: "bold",
    fontSize: 30,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: "#c1c4cd",
  },
});
