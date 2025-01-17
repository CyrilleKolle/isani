import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { SliderBox } from "react-native-image-slider-box";
import { List, Paragraph, Divider, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import UserView from "../../components/functions/UserView";
import { checkUser } from "../../api/user/user";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import PayForm from "../../components/functions/PayForm";

const PriceContent = styled.View`
  background-color: #fe8019;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 15px;
  margin-top: -50px;
`;
export default function ListingDetails() {
  const navigation = useNavigation();
  const [showPayForm, setShowPayForm] = useState(false);
  const route = useRoute();
  const [data, setNewData] = useState();
  const [userAvailaible, setUserAvailable] = useState();
  useEffect(() => {
    setNewData(route.params.data);
  });
  const userAuthenticated = async () => {
    const signedIn = await checkUser();
    if (signedIn) {
      setUserAvailable(signedIn);
    }
  };

  useEffect(() => {
    userAuthenticated();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <SliderBox
          images={[
            route.params.data.image1,
            route.params.data.image2,
            route.params.data.image3,
            route.params.data.image4,
          ]}
          sliderBoxHeight={Dimensions.get("window").height / 2.5}
          dotColor="#1BA1F3"
          circleLoop={true}
          imageLoadingColor={"blue"}
          resizeMethod={"resize"}
          imageLoadingColor="#2196F3"
        />

        <List.Section style={styles.category}>
          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Category{"  "}</Text>
            <Text style={styles.categoryTitle}>
              {route.params.data.category}
            </Text>
          </View>
        </List.Section>

        <List.Section style={styles.title}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Title</Text>
            <Text style={styles.titleTitle}>{route.params.data.title}</Text>
          </View>
        </List.Section>

        <List.Section style={styles.description}>
          <Text style={styles.titleText}>Details</Text>
          <View style={styles.detailsItemsView}>
            <Text>{route.params.data.description}</Text>
          </View>
          <Divider style={styles.divider1} />

          <View style={styles.detailsItemsView}>
            <Text style={styles.titleText}>Price:</Text>
            <Text>{route.params.data.price} kr</Text>
          </View>
        </List.Section>
      </ScrollView>
      {!userAvailaible && <UserView />}

      {userAvailaible && (
        <PriceContent>
          <Button
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
              //handleRemoveFavorite(item.id);
            }}
          >
            Buy
          </Button>
        </PriceContent>
      )}
      {showPayForm && <PayForm />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  slideImage: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,

    marginLeft: 5,
  },
  title: {
    justifyContent: "flex-end",
    // marginLeft: 20,
  },
  scrollContainer: {
    margin: 10,
    borderRadius: 10,
  },
  category: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.2,
  },
  title: {
    marginBottom: 10,
    marginTop: 0,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    justifyContent: "space-between",
  },
  description: {
    marginTop: 0,
    padding: 15,
    // backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  categoryText: {
    // position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-start",
    opacity: 0.4,
    fontWeight: "600",
  },
  categoryTitle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    fontWeight: "600",

    // position: "right",
  },
  categoryView: {
    height: Dimensions.get("screen").width / 9,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    padding: 10,
    margin: 10,
  },
  titleView: {
    height: Dimensions.get("screen").width / 9,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    padding: 10,
    margin: 10,
  },
  titleText: {
    // position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-start",
    opacity: 0.4,
    fontWeight: "600",
  },
  titleTitle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    fontWeight: "600",
    // position: "right",
  },
  detailsItemsView: {
    // width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    flexGrow: 1,
    paddingTop: 10,
  },
  detailsItemText: {
    opacity: 0.5,
    color: "blue",
  },
  divider1: {
    height: 2,
    marginBottom: 10,
  },
  descriptionView: {
    marginTop: 20,
    marginBottom: 20,
  },
  descriptionText: {
    marginTop: 20,
    marginBottom: 20,
    opacity: 0.5,
    color: "blue",
  },
  descriptionMessage: {
    fontSize: 18,
    marginLeft: 10,
    letterSpacing: 2,
  },
});
