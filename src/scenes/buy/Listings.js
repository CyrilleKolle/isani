import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Firebase from "../../api/api";
import { checkUser } from "../../api/user/user";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import ColorLoader from "../../components/Loader/ColorLoader";
import Header from "./Header";
import ListingHeader from "./ListingHeader";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
`;
const ItemPriceView = styled.View`
  width: 100%;
  align-content: center;
  margin-bottom: 28px;
`;
const ItemPriceText = styled.Text`
  font-size: 26px;
  color: red;
  font-weight: 700;
  align-self: center;
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
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
`;
const Heart = styled.View`
  text-align: right;
  align-self: flex-end;
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
  const [refreshing, setRefreshing] = useState(false);
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({ inputRange, outputRange });
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([{}]);

  const userAuthenticated = async () => {
    const signedIn = await checkUser();
    if (signedIn) {
      const Id = Firebase.auth().currentUser.uid;
      setUserId(Id);
    }
  };
  useEffect(() => {
    setLoading(true);
  }, []);
  useEffect(() => {
    userAuthenticated();
  }, []);

  const handleRetrieveData = () => {
    const listingData = Firebase.database().ref("listings/");
    listingData.once("value", function(snapshot) {
      if (snapshot.val() !== null) {
        const list = Object.values(snapshot.val());
        setData(list);
      } else {
        setData([]);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRetrieveData();
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [refreshing]);

  const openDetails = (data) => {
    console.log("open details");
    navigation.navigate("ListingDetails", {
      data: data,
    });
  };

  const onPressIn = (index) => {
    index &&
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
  };
  const onPressOut = (index) => {
    index &&
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
  };
  const handleFavorite = (item, index) => {
    data.find((index1, item1) => {
      data[index1] = index;
      // if (!favorite) {
      setFavoriteList((favoriteList) => Object.keys(favoriteList), item1);
      setFavorite(!favorite);
      // } else {
      //   favoriteList.splice(index, 1);
      //   setFavoriteList(favoriteList);
      //   setFavorite(!favorite);

      //}

      console.log(!favorite);
      console.log(favoriteList);
    });
  };
  const renderItem = ({ item, index }) => (
    <>
      <Animated.View key={index} style={[styles.itemContainer]}>
        <TouchableOpacity
          key={index}
          onPress={() => openDetails(item)}
          onPressIn={() => onPressIn(index)}
          onPressOut={() => onPressOut(index)}
        >
          <Image
            source={{ uri: item.image2 }}
            style={{ width: "100%", height: 180, borderRadius: 5 }}
          />
          <ItemTextContainer>
            <TopInfo>
              <View>
                <ItemText>{item.title}</ItemText>
                <ItemText numberOfLines={1}>{item.description}</ItemText>
                <ItemText numberOfLines={1}>{item.charity}</ItemText>
              </View>
              <View>
                <LocationAndFavorite>
                  <Location>
                    <View style={{ alignItems: "flex-end" }}>
                      <MaterialCommunityIcons name="map-marker" size={15} />
                    </View>
                    <ItemText style={{ alignItems: "flex-end" }}>
                      gothenburg
                    </ItemText>
                  </Location>
                  <TouchableOpacity onPress={() => handleFavorite(item, index)}>
                    <Heart>
                      <MaterialCommunityIcons
                        name={favorite ? "heart" : "heart-outline"}
                        color={favorite ? "red" : "gray"}
                        size={30}
                      />
                    </Heart>
                  </TouchableOpacity>
                </LocationAndFavorite>
              </View>
            </TopInfo>
            <ItemPriceView>
              <ItemPriceText>{item.price} kr</ItemPriceText>
            </ItemPriceView>
          </ItemTextContainer>
        </TouchableOpacity>
      </Animated.View>
    </>
  );

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };
  useEffect(() => onRefresh, []);
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: "column",
    margin: 10,

    height: Dimensions.get("window").height / 3,
    flexGrow: 2,
    alignContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 245, 0.8)",
    borderBottomWidth: 0.2,
  },
});
