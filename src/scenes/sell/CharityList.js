import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
// import {Charities, Charity } from "../AllCategories/Charity";
import { Charities } from "../../components/Lists/Charity";

function CharityList({ navigation }) {
  console.log(Charities);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SellingForm");
      }}
    >
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>
          Great opportunities to help others seldom come, but small ones
          surround us everyday!
        </Text>
        <Text style={styles.textAuthor}>"Sally Koch"</Text>
      </View>
      <FlatList
        data={Charities}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}
export default CharityList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  introContainer: {
    opacity: 0.3,
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  introText: {
    justifyContent: "space-around",
  },
  textAuthor: {
    flexDirection: "column",
    marginTop: 3,
    justifyContent: "flex-end",
  },
});
