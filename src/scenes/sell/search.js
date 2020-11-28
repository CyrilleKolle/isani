import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import AButton from "../../components/GuideInput/AButton";

function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Proceeds from the sale of your items will be donated to an organisation
        of your choices. click on continue to choose an organisation
      </Text>
      <AButton
        title="Continue"
        modeValue="Contained"
        uppercase={false}
        labelStyle={styles.continue}
        onPress={() => navigation.navigate("CharityList")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  continue: {
    fontSize: 22,
  },
});
export default Search;
