import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import SearchBar from "../../components/SearchBars/searchBar";
import GridCategories from "./GridCategories";

export default function Home({ navigation }) {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchBar
          term={term}
          // onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
      </SafeAreaView>
      <GridCategories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  products: {
    backgroundColor: "#f5f1f5",
    marginTop: 400,
  },
  fashion: {
    position: "absolute",
  },
});
