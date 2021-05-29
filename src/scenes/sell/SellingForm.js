import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useForm, Controller, set } from "react-hook-form";
import { Charities } from "../../components/Lists/Charity";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageBackground from "../../../assets/imageBg.png";
import styled from "styled-components";
import { submitSaleForm } from "../../api/user/user";
import { categoriesList } from "../../components/Lists/categoriesList";
import uuid from "react-native-uuid";
import * as Location from "expo-location";
import { KeyboardAvoidingView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Tick = styled.View`
  text-align: right;
  align-self: flex-end;
`;
const Divider = styled.View`
  width: 600px;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #c0cac6;
  opacity: 0.2;
`;
const ImageHolder = styled.Image`
  width: 180px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
`;
const TextSelectContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 0.5px;
  border-radius: 5px;
  opacity: 0.8;
`;
export const SellingForm = () => {
  const navigation = useNavigation();
  const modalizeRef = useRef(null);
  const modalizeRefCharity = useRef(null);
  const [list, setList] = useState({});
  const [isImage, setIsImage] = useState("image1");
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCharity, setSelectedCharity] = useState();
  const [categoryItem, setCategoryItem] = useState();
  const [feedback, SetFeedback] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [price, setPrice] = useState();
  const [postId, setPostId] = useState();
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [charitySelectedBoolean, setCharitySelectedBoolean] = useState([]);
  const [categorySelectedBoolean, setcategorySelectedBoolean] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onOpenCharity = () => {
    modalizeRefCharity.current?.open();
  };
  useEffect(() => setList(Charities));
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setModalVisible(!modalVisible);
    if (!result.cancelled) {
      setImage(result.uri);
      switch (isImage) {
        case "image1":
          setImage1(result.uri);
          break;
        case "image2":
          setImage2(result.uri);
          break;
        case "image3":
          setImage3(result.uri);
          break;
        case "image4":
          setImage4(result.uri);
          break;
        default:
          break;
      }
    }
  };
  const openCamera = async () => {
    setModalVisible(!modalVisible);
    await Permissions.askAsync(Permissions.CAMERA);
    try {
      let result = await ImagePicker.launchCameraAsync({
        base64: true,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        switch (isImage) {
          case "image1":
            setImage1(result.uri);
            break;
          case "image2":
            setImage2(result.uri);
            break;
          case "image3":
            setImage3(result.uri);
            break;
          case "image4":
            setImage4(result.uri);
            break;
          default:
            break;
        }
      }
    } catch (E) {
      console.warn(E);
    }
  };

  const { handleSubmit, control, formState, setValue, reset } = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });
  const { isValid } = formState;
  function generateRandomId() {
    setPostId(() => {
      return Math.random() * 100;
    });
  }
  useEffect(() => {
    const interval = setTimeout(() => {
      generateRandomId();
    }, 1000);
    return () => clearTimeout(interval);
  }, []);

  const onSubmit = async () => {
    console.log("this is image 1: " + image1);
    const promise = await submitSaleForm(
      titleText,
      descriptionText,
      selectedCharity,
      categoryItem,
      price,
      image1,
      image2,
      image3,
      image4,
      image1,
      postId,
      city
    );
    switch (promise) {
      case "success":
        navigation.dispatch(
          CommonActions.reset({
            routes: [{ name: "BottomNav" }],
          })
        );
        break;
      case "error":
        console.log("error");
        break;
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          horizontal={true}
          style={{ height: 250, opacity: 0.9 }}
          showsHorizontalScrollIndicator={false}
        >
          <Controller
            control={control}
            name="image1"
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ onChange, value }) => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setIsImage("image1");
                }}
              >
                <ImageHolder
                  source={image1 ? { uri: image1 } : ImageBackground}
                  value={image1}
                />
              </TouchableOpacity>
            )}
          />
          <Controller
            control={control}
            name="image2"
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ onChange, value }) => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setIsImage("image2");
                }}
              >
                <ImageHolder
                  source={image2 ? { uri: image2 } : ImageBackground}
                  value={image2}
                />
              </TouchableOpacity>
            )}
          />
          <Controller
            control={control}
            name="image3"
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ onChange, value }) => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setIsImage("image3");
                }}
              >
                <ImageHolder
                  source={image3 ? { uri: image3 } : ImageBackground}
                  value={image3}
                />
              </TouchableOpacity>
            )}
          />
          <Controller
            control={control}
            name="image4"
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ onChange, value }) => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setIsImage("image4");
                }}
              >
                <ImageHolder
                  source={image4 ? { uri: image4 } : ImageBackground}
                  value={image4}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          onBackdropPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={openCamera}
              >
                <Text style={styles.textStyle}>Camera</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={pickImage}
              >
                <Text style={styles.textStyle}>Library</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                style={{ opacity: 0.5 }}
                label={"Title"}
                labelName={"Title"}
                mode={"outlined"}
                onBlur={onBlur}
                onChangeText={(value) => {
                  onChange(value);
                  setTitleText(value);
                }}
                value={value}
                required={true}
                autoCorrect={false}
              />
            </KeyboardAvoidingView>
          )}
          name="title"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                style={{ opacity: 0.5 }}
                mode={"outlined"}
                label={"Description"}
                labelName={"Description"}
                onBlur={onBlur}
                onChangeText={(value) => {
                  onChange(value);
                  setDescriptionText(value);
                }}
                value={value}
                numberOfLines={10}
                placeholder={"Description"}
                required={true}
                multiline={true}
                autoCorrect={false}
              />
            </KeyboardAvoidingView>
          )}
          name="description"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
            >
              <TextInput
                style={{ opacity: 0.5 }}
                mode={"outlined"}
                selectionColor="#ffc000"
                underlineColor="#ffc000"
                outlineColor="#ffc000"
                labelName={"Price"}
                label={"Price"}
                onBlur={onBlur}
                onChangeText={(value) => {
                  onChange(value);
                  setPrice(value);
                }}
                value={value}
                required={true}
                autoCorrect={false}
              />
            </KeyboardAvoidingView>
          )}
          name="price"
          rules={{ required: true }}
        />
        <View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TouchableOpacity onPress={onOpenCharity}>
                    <TextSelectContainer>
                      <Text style={styles.label}>
                        {selectedCharity ? selectedCharity : "Select Charity"}
                      </Text>
                      <Text style={styles.label}> {">"} </Text>
                    </TextSelectContainer>
                  </TouchableOpacity>
                  <Portal>
                    <Modalize
                      onChange={() => onChange(selectedCharity)}
                      ref={modalizeRefCharity}
                      adjustToContentHeight={true}
                      flatListProps={{
                        data: Charities,
                        renderItem: ({ item, index }) => {
                          value = item.title;
                          //console.log(item.index);

                          return (
                            <View style={styles.modalTextView}>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedCharity(item.title);
                                  charitySelectedBoolean[
                                    index
                                  ] = !charitySelectedBoolean[index];
                                  setCharitySelectedBoolean(
                                    charitySelectedBoolean
                                  );
                                  setRefresh(!refresh);
                                  setTimeout(
                                    () => modalizeRefCharity.current.close(),
                                    800
                                  );
                                }}
                              >
                                <View style={styles.modalInner}>
                                  <Text style={styles.modalText}>
                                    {item.title}
                                  </Text>
                                  {charitySelectedBoolean[index] && (
                                    <Tick>
                                      <MaterialCommunityIcons
                                        name={"check"}
                                        color={"green"}
                                        size={24}
                                      />
                                    </Tick>
                                  )}
                                </View>
                              </TouchableOpacity>
                            </View>
                          );
                        },
                        keyExtractor: (item) => item.title,
                        showsVerticalScrollIndicator: false,
                      }}
                      value={selectedCharity}
                    />
                  </Portal>
                </>
              )}
              name="charity"
              rules={{ required: true }}
            />
          </View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TouchableOpacity onPress={onOpen}>
                  <TextSelectContainer>
                    <Text style={styles.label}>
                      {categoryItem ? categoryItem : "select category"}
                    </Text>
                    <Text style={styles.label}> {">"} </Text>
                  </TextSelectContainer>
                </TouchableOpacity>
                <Portal>
                  <Modalize
                    onChange={() => onChange(categoryItem)}
                    ref={modalizeRef}
                    adjustToContentHeight={true}
                    flatListProps={{
                      data: categoriesList,
                      renderItem: ({ item, index }) => {
                        value = item.title;
                        return (
                          <View style={styles.modalTextView}>
                            <TouchableOpacity
                              onPress={() => {
                                setCategoryItem(item.title);
                                categorySelectedBoolean[
                                  index
                                ] = !categorySelectedBoolean[index];
                                setcategorySelectedBoolean(
                                  categorySelectedBoolean
                                );
                                setRefresh(!refresh);
                                setTimeout(
                                  () => modalizeRef.current.close(),
                                  800
                                );
                              }}
                            >
                              <View style={styles.modalInner}>
                                <Text style={styles.modalText}>
                                  {item.title}
                                </Text>
                                {categorySelectedBoolean[index] && (
                                  <Tick>
                                    <MaterialCommunityIcons
                                      name={"check"}
                                      color={"green"}
                                      size={24}
                                    />
                                  </Tick>
                                )}
                              </View>
                            </TouchableOpacity>
                          </View>
                        );
                      },
                      keyExtractor: (item) => item.title,
                      showsVerticalScrollIndicator: false,
                    }}
                    value={categoryItem}
                  />
                </Portal>
              </>
            )}
            name="category"
            rules={{ required: true }}
          />
        </View>
        <ButtonContainer>
          <ResetButton>
            <Button
              compact={true}
              mode={"contained"}
              title="Reset"
              backgroundColor="#cc6666"
              color="#cc6666"
              icon="emoticon-devil-outline"
              onPress={() => {
                reset({
                  title: "Title",
                  description: "Description",
                  price: "Price",
                });
              }}
            >
              Reset
            </Button>
          </ResetButton>

          <SubmitButton>
            <Button
              compact={true}
              icon="emoticon-cool-outline"
              mode={"contained"}
              backgroundColor="#7aa998"
              color="#7aa998"
              title="Submit"
              onPress={() => {
                onSubmit();
              }}
              disabled={isValid}
            >
              Submit
            </Button>
          </SubmitButton>
        </ButtonContainer>
      </SafeAreaView>
    </ScrollView>
  );
};

const ResetButton = styled.View`
  margin-top: 40px;
  color: white;
  height: 40px;

  border-radius: 4px;
  width: 45%;
`;
const SubmitButton = styled.View`
  margin-top: 40px;
  color: white;
  height: 40px;
  border-radius: 4px;
  width: 45%;
`;

const styles = StyleSheet.create({
  label: {
    color: "#0e101c",
    margin: 5,
    marginLeft: 0,
    opacity: 0.7,
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#339933",
    borderRadius: 4,
    width: "45%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    opacity: 0.8,
  },
  textAreaContainer: {
    borderRadius: 10,
    borderColor: "#ec5990",
  },
  modalView: {
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 5,
    marginVertical: "auto",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginRight: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: 8,
    marginBottom: 8,
    textAlign: "left",
  },
  modalTextView: {
    margin: 12,
    marginVertical: "auto",
    paddingBottom: 5,
    paddingTop: 5,
  },
  centeredView: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default SellingForm;
