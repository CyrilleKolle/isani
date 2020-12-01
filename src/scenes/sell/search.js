import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import AButton from "../../components/GuideInput/AButton";
import { Icon } from "react-native-elements";

function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="error-outline" color="#3ce53c" size={50} />
      </View>
      <Text style={styles.text}>
        Proceeds from the sale of your items will be donated to an NGO
        of your choices. 
      </Text>
      <AButton
        title="Continue ->"
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
    color: "#3ce53c",
  },
  icon:{
    paddingBottom:60
  },
  text:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    fontWeight:"bold",
    alignSelf:"center",
    alignItems:"center"
    
  }
});
export default Search;
