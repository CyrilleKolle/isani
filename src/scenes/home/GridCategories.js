import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
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
import Fashion from "./Fashion";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

export default function Example() {
  const navigation = useNavigation();
  const [showContent, setShowContent] = useState(true);
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

  const Images = styled.Image`
    flex: 1;
    width: 100%;
    height: 300px;
    border-radius: 10px;
  `;

  const ItemSeperator = styled.View`
    width: 10px;
    background-color: gray;
  `;
  const ItemContainer = styled.TouchableOpacity`
    flex: 1;
    margin-right: 10px;
    margin-left: 10px;
    flex-direction: column;
    border-width: 2px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: white;
  `;
  const ItemDescription = styled.View`
    height: 100px;
    border-radius: 10px;
  `;
  const ItemTitle = styled.Text`
    padding-top: 10px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
    padding-left: 10px;
  `;

  const ActivtyLoader = styled.View`
    height: 300px;
    width: 100%;
    justify-content: center;
  `;

  useEffect(() => {
    setInterval(() => setShowContent(false), 100);
  }, []);

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Fashion />
          </>
        }
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeperator />}
        data={items}
        numColumns={2}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item, index }) => (
          <>
            <ItemContainer
              onPress={() =>
                navigation.navigate("Listings", {
                  item: item,
                })
              }
            >
              {showContent ? (
                <ActivtyLoader>
                  <ActivityIndicator />
                </ActivtyLoader>
              ) : (
                <Images source={item.image} key={item.name} />
              )}

              <ItemDescription>
                <ItemTitle>{item.name}</ItemTitle>
              </ItemDescription>
            </ItemContainer>
          </>
        )}
      />
    </>
  );
}
