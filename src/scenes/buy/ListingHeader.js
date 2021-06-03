import React, { useContext } from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import styled from "styled-components";
import { useRoute } from "@react-navigation/native";
import logo from "../../../assets/logo.png";

const TitleText = styled.Text`
  font-size: 30px;
  font-weight: 900;
  margin-left: 10px;
`;
export default function ListingHeader() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TitleText>Hello</TitleText>
      <Image
        style={styles.image}
        height={Dimensions.get("window").height / 10}
        width={100}
        source={logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: Dimensions.get("window").height / 10,
    width: Dimensions.get("window").width * 0.9,
    marginTop: 10,
    flexDirection: "row",
  },
  title: {},
  image: {
    borderRadius: 400,
  },
});
