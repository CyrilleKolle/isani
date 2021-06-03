import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Button } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import Firebase from "../../api/api";
import { checkUser } from "../../api/user/user";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import ColorLoader from "../../components/Loader/ColorLoader";
import Header from "./Header";
import ListingHeader from "./ListingHeader";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { handleSaveFavorite } from "../../api/user/user";
import Toast from "react-native-root-toast";
import PayForm from "../../components/functions/PayForm";
import Share from "../../components/functions/Share";
import UserView from "../../components/functions/UserView";

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
  justify-content: space-between;
  flex-direction: row;
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

export default function Listings() {
  const navigation = useNavigation();
  const router = useRoute();
  const [data, setData] = useState([{}]);
  const [userId, setUserId] = useState();
  const [userAvailaible, setUserAvailable] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [favoriteList, setFavoriteList] = useState([{}]);
  const [addToCart, setAddTocart] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [showPayForm, setShowPayForm] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const userAuthenticated = async () => {
    const signedIn = await checkUser();
    if (signedIn) {
      const Id = Firebase.auth().currentUser.uid;
      const c = Firebase.auth().currentUser;
      setUserId(Id);
      setUserAvailable(signedIn);
      setCurrentUser(c);
    }
  };

  useEffect(() => {
    userAuthenticated();
  }, []);

  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      const listingData = Firebase.database().ref("listings/");
      listingData.once("value", function(snapshot) {
        if (snapshot.val() !== null) {
          if (isMounted) {
            const list = Object.values(snapshot.val());
            setData(list);
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

  const openDetails = (data) => {
    console.log("open details");
    navigation.navigate("ListingDetails", {
      data: data,
    });
  };

  const handleRemoveFavorite = (itemId) => {
    var remRef = Firebase.database().ref("listings/" + userId);
    remRef.on("child_added", (data) => {
      var key = data.val();
      console.log(key);
      if (itemId === data.val().id) {
        remRef.set(null);
      }
    });
  };
  const handleFavorite = async (item) => {
    console.log(favoriteList);
    const promise = await handleSaveFavorite(item);
    console.log(promise);
    switch (promise) {
      case "success":
        <Toast
          duration={Toast.durations.SHORT}
          position={Toast.positions.CENTER}
          shadow={true}
          animation={true}
          delay={0}
          visible={true}
        >
          saved to favorites
        </Toast>;
        break;

      case "error":
        <Toast
          duration={Toast.durations.SHORT}
          position={Toast.positions.CENTER}
          shadow={true}
          animation={true}
          delay={2}
          visible={true}
        >
          error adding to favorites
        </Toast>;
        break;
    }
  };

  const renderItem = ({ item, index }) => (
    <>
      <Animated.View key={index} style={[styles.itemContainer]}>
        <TouchableOpacity key={index} onPress={() => openDetails(item)}>
          <Image
            source={{ uri: item.image1 }}
            style={{ width: "100%", height: 180, borderRadius: 5 }}
          />
          <ItemTextContainer>
            <TopInfo>
              <View>
                <ItemText>{item.title}</ItemText>
                <ItemText numberOfLines={2}>{item.description}</ItemText>
                <ItemText numberOfLines={1}>{item.charity}</ItemText>
              </View>
              <View>
                <LocationAndFavorite>
                  <TouchableOpacity
                    disabled={!userAvailaible}
                    onPress={() => {
                      favorite[index + 1] = !favorite[index + 1];
                      setFavorite(favorite);
                      if (favorite[index + 1]) {
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
                      {!favorite[index + 1] && (
                        <MaterialCommunityIcons
                          name={favorite[index + 1] ? "heart" : "heart-outline"}
                          color={favorite[index + 1] ? "red" : "gray"}
                          size={24}
                        />
                      )}
                    </Heart>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
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
                  </TouchableOpacity> */}
                </LocationAndFavorite>
                <Location>
                  <View style={{ alignItems: "flex-end" }}>
                    <MaterialCommunityIcons name="map-marker" size={15} />
                  </View>
                  <ItemLocation style={{ alignItems: "flex-end" }}>
                    gothenburg
                  </ItemLocation>
                </Location>
              </View>
            </TopInfo>
            <ItemPriceView>
              <TouchableOpacity
                disabled={!userAvailaible}
                onPress={() => {
                  setShowPayForm(!showPayForm);
                  handleRemoveFavorite(item.id);
                }}
              >
                <ItemPriceText>{item.price} kr</ItemPriceText>
              </TouchableOpacity>

              <Button
                disabled={!userAvailaible}
                style={{
                  paddingRight: 6,
                  paddingLeft: 6,
                  paddingBottom: "auto",
                  paddingTop: "auto",
                }}
                mode={"contained"}
                title=" Buy "
                backgroundColor="#f4a201"
                color="#f4a201"
                onPress={() => {
                  setShowPayForm(!showPayForm);
                  handleRemoveFavorite(item.id);
                }}
              >
                Buy
              </Button>

              <Share message={`check out ${item.title} from isani app`} />
            </ItemPriceView>
          </ItemTextContainer>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
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

  return (
    <>
      {loading ? (
        <Indicator>
          <ColorLoader />
        </Indicator>
      ) : router.params === undefined ? (
        data.length === 0 ? (
          <View style={styles.container}>
            <Text>No content available at this moment</Text>
          </View>
        ) : (
          <>
            <View style={styles.container}>
              <FlatList
                initialNumToRender={3}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<ListingHeader />}
                data={
                  router.params === undefined
                    ? data
                    : data.filter(
                        (content) =>
                          content.category === router.params.item.name
                      )
                }
                keyExtractor={(item, index) => item.id}
                renderItem={renderItem}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              />
            </View>
          </>
        )
      ) : data.filter((a) => a.category === router.params.item.name).length ===
        0 ? (
        <View style={styles.container}>
          <Text>
            {router.params.item.name} is currently empty. Check again later
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <FlatList
              initialNumToRender={3}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Header />}
              data={
                router.params.item === undefined
                  ? data
                  : data.filter(
                      (content) => content.category === router.params.item.name
                    )
              }
              keyExtractor={(item, index) => item.id}
              renderItem={renderItem}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              numColumns={1}
            />
          </View>
        </>
      )}
      {!userAvailaible && <UserView />}

      {showPayForm && <PayForm />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: "column",
    margin: 10,

    flexGrow: 2,
    alignContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 245, 0.8)",
    borderBottomWidth: 0.2,
  },
});
