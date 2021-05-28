import React, { useState, useEffect, useRef, useCallback } from "react";
import Modal from "react-native-modal";
import {
  StyleSheet,
  Platform,
  Text,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Paragraph, Title, Button } from "react-native-paper";

function TextForm() {
  const navigation = useNavigation();
  const router = useRoute();
  const creditCardRef = useRef();
  const [visible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [completeText, setCompleteText] = useState("");

  const handleSubmit = useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      setIsComplete(!isComplete);
      setIsVisible(!visible);
      console.log("ERROR: ", error);
      console.log("CARD DATA: ", data);
    }
  }, []);

  return (
    <>
      <SafeAreaView style={{ marginTop: 20 }}>
        <Modal
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
          <Title style={{ marginTop: 20 }}>Terms of Use</Title>
          <Button
            onPress={() => {
              setIsVisible(!visible);
            }}
          >
            seen...
          </Button>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            vestibulum ultricies augue, at rhoncus dolor eleifend suscipit.
            Maecenas tristique nec nibh non sodales. Integer ultrices risus a
            quam consectetur euismod. Nam egestas tortor nec commodo porttitor.
            Praesent nibh neque, rutrum at ultrices quis, iaculis lacinia sem.
            Maecenas eget risus vehicula, pharetra enim ac, pulvinar metus.
            Donec fermentum interdum ante, eget volutpat elit. Nulla at
            pellentesque diam, nec egestas magna. Cras porttitor nibh eu tellus
            posuere gravida. Donec eget eleifend diam. Cras blandit elit dui,
            sed tempus nibh pretium at. Aliquam a hendrerit augue, id convallis
            risus. Etiam vel aliquet felis. Ut elementum leo suscipit odio
            dictum rutrum. Pellentesque ac arcu et mauris pretium rutrum nec id
            risus. Curabitur sit amet semper magna. Sed auctor aliquam lobortis.
            Mauris eleifend consequat nisi hendrerit tincidunt. Suspendisse
            potenti. Pellentesque aliquam lobortis tincidunt. Nunc fringilla,
            enim et porttitor tristique, tortor est dignissim ante, ac lobortis
            nisi justo id mi. Aenean eget convallis erat, in vulputate sapien.
            Nunc mi magna, pulvinar dapibus est vel, pharetra porta tellus.
            Morbi tincidunt mauris non massa pretium, vitae vehicula libero
            tincidunt. Praesent vel iaculis ipsum. Pellentesque at eros
            vehicula, euismod ex non, consectetur enim. Praesent blandit
            malesuada elit, ut elementum dui rhoncus vitae. Suspendisse
            condimentum facilisis mi, ac rutrum nisi lacinia non. Sed rutrum
            egestas purus vel sodales. Integer feugiat leo quis magna interdum
            suscipit. Donec id pulvinar nunc. Pellentesque mollis eu quam ac
            viverra. Nunc ut quam dolor. Nam id diam aliquet, convallis metus
            ac, vulputate nisi. Ut iaculis blandit purus et porta. In nulla
            dolor, condimentum sit amet dictum sed, feugiat id sapien. Nam
            pulvinar augue in est vulputate pulvinar. Vivamus enim libero,
            vestibulum non hendrerit eu, efficitur in mi. Proin dapibus nisi non
            tempus pretium. Vestibulum nec suscipit magna, vel suscipit enim.
            Pellentesque risus ipsum, accumsan sit amet risus et, faucibus
            ullamcorper eros. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. In sit amet ex vitae
            velit faucibus tempor. In dolor lectus, suscipit ut fringilla sit
            amet, pellentesque quis lectus. Nam volutpat arcu ex, id suscipit
            diam congue ut. Proin id est eget risus lobortis ultrices vel a
            lacus. Nam auctor quis enim vel tempor. Sed a arcu purus. Nullam
            viverra facilisis nulla, quis laoreet mi tristique at. Nam
            tincidunt, dui vel fermentum fermentum, diam dolor lacinia nisi, eu
            suscipit sapien dui auctor lorem. Cras ut metus non odio luctus
            finibus. Vivamus a ligula ac sapien feugiat consectetur. Morbi
            luctus nisl in lacus aliquet rhoncus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Integer mattis libero velit, sit amet
            rutrum dolor interdum bibendum. Nulla est mauris, cursus quis ex ut,
            tincidunt commodo augue. Integer nisi ex, vulputate at fermentum
            sed, vehicula consequat diam. Integer vitae auctor ante. Sed ut diam
            sed arcu mollis hendrerit. Etiam vulputate ligula sit amet erat
            dictum, sit amet aliquam dolor semper. Suspendisse tristique
            eleifend purus, non fermentum sem efficitur eu. Quisque turpis arcu,
            luctus in aliquet in, dapibus in nunc. Nunc sodales, velit at
            tincidunt euismod, elit mi ultrices enim, a laoreet purus neque eu
            tortor. Maecenas ut mauris nec sem dignissim auctor. Aenean sed
            commodo nibh, at consequat tortor. Etiam non ornare nulla.
          </Paragraph>
        </Modal>
      </SafeAreaView>
    </>
  );
}
export default TextForm;

const styles = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  centeredView: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
  buttonView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: Dimensions.get("window").width / 1.5,
  },
  textView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
});
