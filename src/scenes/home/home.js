import React, { useContext, useState, useResults } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import SearchBar from "../../components/SearchBars/searchBar";
import Fashion from "./Fashion";
import GridCategories from "./GridCategories";

export default function Home({ navigation }) {
  const [term, setTerm] = useState("");

  return (
    // <SafeAreaView>
    //<View style={styles.main}>
    <View style={styles.container}>
      {/* <Text>home</Text> */}
      <SafeAreaView>
        <SearchBar
          term={term}
          //onTermChange={(newTerm) => setTerm(newTerm)}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
          // onTermSubmit={searchApi}
        />
      
      
      </SafeAreaView>
      <ScrollView>
        <ScrollView horizontal={true}>
          <Fashion />
        </ScrollView>
        <GridCategories />
      </ScrollView>
    </View>

    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    // justifyContent: 'center',
    // alignItems: "center",
  },
  products: {
    backgroundColor: "#f5f1f5",
    marginTop: 400,
  },
  fashion: {
    position: "absolute",
  },
});
