import React, { useContext, useState, useResults } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Categories from "../../components/AllCategories/Categories";
import Male from "../../../assets/Male.jpg";
import Female from "../../../assets/Female.jpg";
import Kids from "../../../assets/Kids.jpg";
import Constants from "expo-constants";
export default function Fashion({ navigation }) {
  const [term, setTerm] = useState("");

  return (
    // <SafeAreaView>
    //<View style={styles.main}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={true}>
        {/* <GuideButton
                modeValue='contained'
                title='Add Room'
                onPress={() => props.navigation.navigate('AddRoom')}
            /> */}

        <View>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Female")}
          > */}
            <Categories
              imageUri={Female}
              titleFirst="Womens"
              titleSecond="Fashion"
              subTitle="Women Clothes!"
              screenProps="Super"

              // {...this.props}
            />
         {/* / </TouchableOpacity> */}
        </View>

        <Categories
          imageUri={Male}
          titleFirst="Mens"
          titleSecond="Fashion"
          subTitle="Pure. Old Fashioned."
          // {...this.props}
        />

        <Categories
          imageUri={Kids}
          titleFirst="Kids"
          titleSecond="Fashion"
          subTitle="For the smallest."
          // {...this.props}
        />
      </ScrollView>
    </SafeAreaView>
    // //{" "}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
