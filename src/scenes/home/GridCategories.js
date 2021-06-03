import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, SafeAreaView } from "react-native";
import { homePageCategoryList } from "../../components/Lists/homePageCategoryList";
import Fashion from "./Fashion";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

export default function Example() {
  const navigation = useNavigation();
  const [showContent, setShowContent] = useState(true);

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
        data={homePageCategoryList}
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
