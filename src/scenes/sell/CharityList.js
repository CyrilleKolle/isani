import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FullCharityList from "./FullCharityList";
import FavoriteList from "./FavoriteList";
function CharityList({ navigation }) {
  const [selectTab, setSelectTab] = useState("");
  const setTab = (tab) => {
    setSelectTab(tab);
  };

  const selectedTab = () => {
    switch (selectTab) {
      case "A":
        return <FullCharityList />;
      case "B":
        return <FavoriteList />;
      case "C":
        return <Slider />;
      default:
        return <Slider />;
    }
  };
  return (
    <SafeAreaView style={styles.componentContainerStyle}>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>
          Great opportunities to help others seldom come, but small ones
          surround us everyday!
        </Text>
        <Text style={styles.textAuthor}>"Sally Koch"</Text>
      </View>

      <View>
        <View style={styles.gridContainer}>
          <View>
            <TouchableOpacity onPress={() => setTab("C")}>
              <Text>Home</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => setTab("A")}>
              <Text>NGOs</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => setTab("B")}>
              <Text>Favorites</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingBottom: 10, marginBottom: 10 }}>
          {selectedTab()}
        </View>
      </View>
    </SafeAreaView>
  );
}
export default CharityList;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  introContainer: {
    opacity: 0.5,
    marginTop: 20,
    marginBottom: 30,
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
  componentContainerStyle: {
    flex: 1,
    backgroundColor: "rgb(235,235,235)",
  },

  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: Platform.OS === "iOS" ? 20 : 0,
  },

  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    // height: 44,
  },

  header_style: {
    width: "100%",
    height: 45,
    backgroundColor: "#020621",
    alignItems: "center",
    justifyContent: "center",
  },
});
