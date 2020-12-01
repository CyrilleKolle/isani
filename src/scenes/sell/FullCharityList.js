import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Charities } from "../../components/Lists/Charity";

function FullCharityList({ navigation }) {
  const [list, setList] = useState({});

  useEffect(() => setList(Charities));

  const handleFlatlistSeperator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  };
  const handleListHeader = () => {
    var Sticky_header_View = (
      <View style={styles.header_style}>
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 22 }}>
          {" "}
          BENEFICIARIES{" "}
        </Text>
      </View>
    );

    return Sticky_header_View;
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SellingForm");
      }}
    >
      <View
      //style={styles.contentContainerStyle}
      >
        <Text
          style={styles.FlatList_Item}
          //style={styles.buttonContainerStyle}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={list}
        ItemSeparatorComponent={handleFlatlistSeperator}
        ListHeaderComponent={handleListHeader}
        stickyHeaderIndices={[0]}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}
export default FullCharityList;

const styles = StyleSheet.create({
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
    height: 44,
  },

  header_style: {
    width: "100%",
    height: 45,
    backgroundColor: "#020621",
    alignItems: "center",
    justifyContent: "center",
  },
});
