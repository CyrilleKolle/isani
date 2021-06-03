import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Categories from "../../components/AllCategories/Categories";
import Male from "../../../assets/Male.jpg";
import Female from "../../../assets/Female.jpg";
import Kids from "../../../assets/Kids.jpg";

export default function Fashion(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView style={styles.scrollView} horizontal={true}>
          <Categories
            imageUri={Female}
            titleFirst="Women"
            titleSecond="Fashion"
            subTitle="Women Clothes!"
            screenProps="Super"
            {...props}
          />

          <Categories
            imageUri={Male}
            titleFirst="Men"
            titleSecond="Fashion"
            subTitle="Pure. Old Fashioned."
            {...props}
          />

          <Categories
            imageUri={Kids}
            titleFirst="Kids"
            titleSecond="Fashion"
            subTitle="For the smallest."
            {...props}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 42,
  },
});
