import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import DottedLoader from "../Loader/DottedLoader";
import { Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { Paragraph, Title, Button } from "react-native-paper";
import { CharitiesSlider } from "../../components/Lists/homePageCharity";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Charities } from "../Lists/Charity";

export default function ImageSequenceSlider() {
  const navigation = useNavigation();
  const SliderWidth = Dimensions.get("window").width;
  const SliderHeight = Dimensions.get("window").height * 0.1;
  const [activeIndex, setActivateIndex] = useState(0);
  const [visible, setIsVisible] = useState(false);
  const carouselRef = React.createRef();
  const onPressCarousel = (index) => {
    carouselRef.current.snapToItem(index);
  };
  
  const renderItem = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            onPressCarousel(index);
            setIsVisible(!visible);
          }}
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            width: Dimensions.get("window").width,
          }}
        >
          <Image
            style={{
              flex: 1,
              height: SliderHeight,
              resizeMode: "center",
              width: SliderWidth,
            }}
            resizeMethod="scale"
            source={item.image}
            height={SliderHeight}
            width={"100%"}
            resizeMode="center"
            style={{ aspectRatio: 4, borderRadius: 5 }}
          />
        </TouchableOpacity>
        <SafeAreaView style={{ marginTop: 20 }}>
          <Modal
            style={styles.centeredView}
            onModalHide={() => {
              setIsVisible(visible);
            }}
            transparent={false}
            presentationStyle={"formSheet"}
            coverScreen={false}
            animationType={"slide"}
            visible={visible}
            onRequestClose={() => {
              setIsVisible(!visible);
            }}
            onBackdropPress={() => {
              setIsVisible(!visible);
            }}
            animationOut="slideOutUp"
          >
            <>
              <Button onPress={() => setIsVisible(!visible)} compact={true}>
                <Feather name="arrow-down" size={24} />
              </Button>
              <FlatList
                data={Charities}
                initialNumToRender={6}
                maxToRenderPerBatch={5}
                removeClippedSubviews={true}
                keyExtractor={(item) => item.title}
                renderItem={({ item, index }) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("SellingForm", {
                          charity: item.title,
                        });
                        setIsVisible(!visible);
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <Title>{item.title}</Title>
                        <Paragraph>{item.value}</Paragraph>
                      </View>
                    </TouchableOpacity>
                    <View
                      style={{
                        height: 0.5,
                        borderWidth: 0.5,
                        backgroundColor: "#bcbcbc",
                        opacity: 0.2,
                        marginTop: 30,
                        marginBottom: 10,
                      }}
                    />
                  </>
                )}
              />
            </>
          </Modal>
        </SafeAreaView>
      </>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        height: Dimensions.get("window").height * 0.1,
        marginLeft: 10,
        marginRight: 10,
        width: Dimensions.get("window").width,
      }}
    >
      {CharitiesSlider.length === 0 ? (
        <DottedLoader />
      ) : (
        <Carousel
          layout={"default"}
          ref={carouselRef}
          data={CharitiesSlider}
          sliderHeight={SliderHeight}
          sliderWidth={SliderWidth}
          itemWidth={SliderWidth}
          itemHeight={SliderHeight}
          renderItem={renderItem}
          useScrollView={false}
          onSnapToItem={(index) => setActivateIndex(index)}
          activeSlideAlignment="center"
          autoplay={true}
          loop={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  introContainer: {
    opacity: 0.5,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  introText: {
    justifyContent: "space-around",
  },
  textAuthor: {
    flexDirection: "column",
    marginTop: 3,
    justifyContent: "flex-end",
  },
  componentContainerStyle: {
    flex: 1,
    backgroundColor: "rgb(235,235,235)",
  },

  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: Platform.OS === "iOS" ? 20 : 0,
  },

  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    // height: 44,
  },

  header_style: {
    width: "100%",
    height: 45,
    backgroundColor: "#020621",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 3,
  },
});
