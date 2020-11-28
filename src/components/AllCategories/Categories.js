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
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
import AButton from "../GuideInput/AButton";
// import AInput from "../components/AInput";
// import backgroundImage from "../../assets/backgroundImage.jpg";

function Categories(props) {
  //const { width } = Dimensions.get("window");
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const { imageUri, titleFirst, titleSecond, subTitle } = props;

  function handleDimensin() {
    // const { imageUri } = props;
    // setHeight(Image.resolveAssetSource(imageUri).height);
    // setWidth(Image.resolveAssetSource(imageUri).width);
  }
  useEffect(() => {
    handleDimensin();
  }, []);
  return (
    
    <View style={styles.container}>
      {/* <AButton
        title={props.titleFirst}
        modeValue="text"
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() =>
          props.navigation.navigate("")
        }
      /> */}
      <ImageBackground
        source={imageUri}
        style={{
          flex: 1,
          width: 250,
          height: 250,
          alignSelf: "stretch",
          resizeMode: "contain",
          padding: 5,
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
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
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
