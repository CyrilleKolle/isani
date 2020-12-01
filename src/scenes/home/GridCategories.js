import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import art from "../../../assets/art.jpg";
import accessories from "../../../assets/accessories.jpg";
import beauty from "../../../assets/beauty.jpg";
import books from "../../../assets/books.jpg";
import computers from "../../../assets/computers.jpg";
import construction from "../../../assets/construction.jpg";
import jewelries from "../../../assets/jewelries.jpg";
import music from "../../../assets/music.png";
import phones from "../../../assets/phones.jpg";
import shoes from "../../../assets/shoes.jpg";
import sports from "../../../assets/sports.jpg";
import vehicles from "../../../assets/vehicles.jpg";
import appliances from "../../../assets/appliances.jpg";
import others from "../../../assets/others.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


// const Div = styled.View`
//   color: ${(props) => props.color};
// `;

export default function Example(props) {
  const [items, setItems] = useState([
    { name: "Art", code: "#1abc9c", image: art },
    { name: "Accessories", code: "#2ecc71", image: accessories },
    { name: "Beauty", code: "#3498db", image: beauty },
    { name: "Books", code: "#9b59b6", image: books },
    { name: "Computers", code: "#34495e", image: computers },
    { name: "Construction", code: "#16a085", image: construction },
    { name: "Jewelries", code: "#27ae60", image: jewelries },
    { name: "Music", code: "#2980b9", image: music },
    { name: "Phones", code: "#8e44ad", image: phones },
    { name: "Shoes", code: "#2c3e50", image: shoes },
    { name: "Sports", code: "#f1c40f", image: sports },
    { name: "Vehicles", code: "#e67e22", image: vehicles },
    { name: "Appliances", code: "#e74c3c", image: appliances },
    { name: "Others", code: "#e74c3c", image: others },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <ImageBackground
          source={item.image}
          style={{
            flex: 1,
            width: 200,
            height: 200,
            alignSelf: "stretch",
            resizeMode: "contain",
            padding: wp("5%"),
          }}
        >
          <View style={[styles.itemContainer]}>
          
              <Text style={styles.itemName}>{item.name}</Text>
         

            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        </ImageBackground>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,

    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});
