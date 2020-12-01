import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { accountList } from "../../components/Lists/accountList";
export default function AccountOptions({ navigation }) {
  console.log(navigation);

  return (
    <View style={styles.container}>
      <FlatList
        data={accountList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OptionsDetails");
            }}
            style={{ margin: 20 }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
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
});
