import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import SearchBar from "../../components/SearchBars/searchBar";
import GridCategories from "./GridCategories";

export default function Home({ navigation }) {
  const [term, setTerm] = useState("");

  const searchData = (searchText) => {
    setTerm(searchText);
    let filteredDataa = items.filter(function(item) {
      return item.name.includes(searchText);
    });
    setFilteredData(filteredDataa);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchBar />
      </SafeAreaView>
      <GridCategories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  products: {
    marginTop: 400,
  },
  fashion: {
    position: "absolute",
  },
});
