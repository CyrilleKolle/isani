import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import Firebase from "../../api/api";
import ImageSequenceSlider from "../functions/ImageSequenceSlider";
const ItemTextContainer = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const ItemDescription = styled.View`
  border-radius: 10px;
  margin-bottom: 14px;
  flex-direction: row;
  justify-content: space-between;
`;
const ItemTitle = styled.Text`
  font-size: 18px;
  color: #000;
`;
const ItemCategory = styled.Text`
  font-size: 14px;
  opacity: 0.6;
`;
const ActivtyLoader = styled.View`
  height: 300px;
  width: 100%;
  justify-content: center;
`;
const ItemSeperator = styled.View`
  width: 10px;
  background-color: gray;
`;

const SearchBar = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const [filteredData, setFilteredData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [term, setTerm] = useState();
  const [data, setData] = useState([{}]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setShowContent(false), 100);
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
  return (
    <>
      <View style={{ marginBottom: 15, width: Dimensions.get("window").width }}>
        {}
        <ImageSequenceSlider />
        <Pressable
          onPress={() => {
            setVisible(!visible);
          }}
        >
          <Feather name="filter" style={styles.iconStyle} />
        </Pressable>
      </View>

      <Modal
        transparent={false}
        presentationStyle={"formSheet"}
        coverScreen={true}
        style={styles.centeredView}
        animationType={"slide"}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
        onBackdropPress={() => {
          setVisible(!visible);
        }}
        animationOut="slideOutUp"
      >
        <FlatList
          ListHeaderComponent={
            <>
              <View
                style={{
                  alignContent: "flex-end",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  right: 0,
                }}
              >
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                  <Feather style={{ textAlign: "right" }} name="x" size={24} />
                </TouchableOpacity>
              </View>
              <View style={styles.background2}>
                <Feather name="search" style={styles.iconStyle2} />
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.inputStyle2}
                  placeholder="search on isani categories"
                  value={term}
                  onChangeText={setTerm}
                />
              </View>
            </>
          }
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator />}
          data={
            term !== undefined
              ? data.filter((word) =>
                  word.title.toLowerCase().includes(term.toLowerCase())
                )
              : data
          }
          keyExtractor={(item, index) => item.title}
          renderItem={({ item, index }) => (
            <>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Listings");
                    setVisible(!visible);
                  }}
                >
                  {showContent ? (
                    <ActivtyLoader>
                      <ActivityIndicator />
                    </ActivtyLoader>
                  ) : (
                    <ItemDescription>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemCategory>{item.category}</ItemCategory>
                    </ItemDescription>
                  )}
                </TouchableOpacity>
              </View>
            </>
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 30,
    marginHorizontal: 15,
    marginVertical: -20,
    textAlign: "right",
  },
  iconStyle2: {
    fontSize: 30,
    marginHorizontal: 15,
    marginVertical: 10,
    textAlign: "right",
  },
  background: {
    marginTop: 10,
    alignContent: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    right: 0,
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  background2: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 20,
    marginHorizontal: "auto",
    marginVertical: "auto",
    flexDirection: "row",
    marginBottom: 10,
  },

  inputStyle: {
    fontSize: 20,
  },
  inputStyle2: {
    fontSize: 20,
  },
  searchList: {
    zIndex: 1000,
  },
  centeredView: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 3,
  },
  itemContainer: {
    flexDirection: "column",
    margin: 10,
    flexGrow: 2,
    alignContent: "center",
    borderRadius: 10,

    borderBottomWidth: 0.2,
  },
  image: {
    borderRadius: 400,
  },
});

export default SearchBar;
