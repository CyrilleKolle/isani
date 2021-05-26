import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Animated,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../api/api";
import { checkUser } from "../../api/user/user";
import styled from "styled-components";
import ColorLoader from "../../components/Loader/ColorLoader";
import ListingHeader from "../buy/ListingHeader";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PayForm from "../../components/functions/PayForm";

const ItemTextContainer = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const ItemText = styled.Text`
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 500;
  opacity: 0.6;
  flex-wrap: wrap;
  max-width: 200px;
`;
const ItemLocation = styled.Text`
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 500;
  opacity: 0.6;
`;
const ItemPriceView = styled.View`
  align-content: center;
`;
const ItemPriceText = styled.Text`
  font-size: 20px;
  color: red;
  font-weight: 700;
  align-self: center;
  border-width: 0.5px;
  padding: 10px;
  border-radius: 8px;
`;
const Indicator = styled.View`
  align-content: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
`;
const LocationAndFavorite = styled.View`
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;
const Location = styled.View`
  margin-top: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
`;
const Heart = styled.View`
  text-align: right;
  align-self: flex-end;
  margin-bottom: 5px;
`;

const TopInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export default function Favorites() {
  const navigation = useNavigation();
  const router = useRoute();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([{}]);
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [favoriteList, setFavoriteList] = useState([{}]);
  const [cartArray, setCartArray] = useState([]);
  const [addToCart, setAddTocart] = useState([]);
  const [showPayForm, setShowPayForm] = useState(false);

  const userAuthenticated = async () => {
    const signedIn = await checkUser();
    if (signedIn) {
      const Id = Firebase.auth().currentUser.uid;
      setUserId(Id);
      console.log(userId);
    }
  };

  useEffect(() => {
    userAuthenticated();
  }, []);
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = () => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      onRefresh();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      const listingData = Firebase.database().ref("favorites/" + userId);
      listingData.once("value", function(snapshot) {
        if (snapshot.val() !== null) {
          if (isMounted) {
            const list = Object.values(snapshot.val());
            setData(list);
            console.log(data);
          }
        } else {
          setData([]);
        }
        setLoading(false);
      });
    }, 100);
    return () => {
      clearInterval(interval);
      isMounted = false;
    };
  }, [refreshing]);

  const handleRemoveFavorite = () => {};
  const openDetails = (data) => {
    console.log("open details");
    navigation.navigate("ListingDetails", {
      data: data,
    });
  };

  const renderItem = ({ item, index }) => (
    <>
      <Animated.View key={index} style={[styles.itemContainer]}>
        <TouchableOpacity key={index} onPress={() => openDetails(item)}>
          <Image
            source={{ uri: item.image1 }}
            style={{
              width: "100%",
              height: 180,
              borderRadius: 5,
            }}
          />
          <ItemTextContainer>
            <TopInfo>
              <View>
                <ItemText>{item.title}</ItemText>
                <ItemText numberOfLines={3}>{item.description}</ItemText>
                <ItemText numberOfLines={1}>{item.charity}</ItemText>
              </View>
              <View>
                <LocationAndFavorite>
                  <TouchableOpacity
                    onPress={() => {
                      favorite[index] = !favorite[index];
                      setFavorite(favorite);
                      if (favorite[index]) {
                        setFavoriteList((favoriteList) => [
                          ...favoriteList,
                          item,
                        ]);
                        handleFavorite(favoriteList);
                      } else {
                        return;
                      }
                    }}
                  >
                    <Heart>
                      {!favorite[index] && (
                        <MaterialCommunityIcons
                          name={!favorite[index] ? "heart" : "heart-outline"}
                          color={!favorite[index] ? "red" : "gray"}
                          size={24}
                        />
                      )}
                    </Heart>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      addToCart[index] = !addToCart[index];
                      setAddTocart(addToCart);
                      console.log(addToCart);
                      if (addToCart) {
                        setCartArray((cartArray) => [...cartArray, item]);
                      } else {
                        cartArray.splice(index, 0);
                        setCartArray((cartArray) => [...cartArray, item]);
                      }
                      console.log(cartArray);
                    }}
                  >
                    <Heart>
                      <MaterialCommunityIcons
                        name={!addToCart[index] ? "cart-plus" : "cart-minus"}
                        size={24}
                      />
                    </Heart>
                  </TouchableOpacity>
                </LocationAndFavorite>
                <Location>
                  <View
                    style={{
                      alignItems: "flex-end",
                    }}
                  >
                    <MaterialCommunityIcons name="map-marker" size={15} />
                  </View>
                  <ItemLocation
                    style={{
                      alignItems: "flex-end",
                    }}
                  >
                    gothenburg
                  </ItemLocation>
                </Location>
              </View>
            </TopInfo>
            <ItemPriceView>
              <TouchableOpacity
                onPress={() => {
                  setShowPayForm(!showPayForm);
                  console.log(showPayForm);
                }}
              >
                <ItemPriceText>{item.price} kr</ItemPriceText>
              </TouchableOpacity>
            </ItemPriceView>
          </ItemTextContainer>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
  return (
    <>
      {loading ? (
        <Indicator>
          <ColorLoader />
        </Indicator>
      ) : data.length === 0 ? (
        <View style={styles.container}>
          <Text>No content available at this moment</Text>
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<ListingHeader />}
              data={data}
              keyExtractor={(item, index) => item.title}
              renderItem={renderItem}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </View>
        </>
      )}
      {showPayForm && <PayForm />}
    </>
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
