import React, { useEffect } from "react";
import {
  Text,
  NativeBaseProvider,
  Button,
  Image,
  Pressable,
  HStack,
  VStack,
  Stack,
  View,
} from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Dimensions } from "react-native";

const Test = () => {
  const { height, width } = Dimensions.get("window");
  const style = width < 500 ? mobile : web;
  const req =
    width < 500
      ? require("../assets/hero_image_mobile.png")
      : require("../assets/hero_image_updated.png");

  return (
    <NativeBaseProvider>
      {/* <View flex={1}> */}
      <Image
        style={style.image}
        source={req}
        alt="Alternate Text"
        size={"full"}
      />
      <Image
        style={style.logo}
        position={"absolute"}
        source={require("../assets/logo_white.png")}
        alt="Alternate Text"
        // size={"xl"}
      />
      <Text
        fontFamily={"PoppinsSemiBold"}
        position={"absolute"}
        style={style.text}
      >
        The Simple Way
        <br />
        to Start Real Estate
        <br />
        Investing
      </Text>
      <Text
        fontFamily={"PoppinsMedium"}
        position={"absolute"}
        style={style.navText1}
      >
        How it works
      </Text>
      <Text
        fontFamily={"PoppinsMedium"}
        position={"absolute"}
        style={style.navText2}
      >
        Features
      </Text>
      <Text
        fontFamily={"PoppinsMedium"}
        position={"absolute"}
        style={style.navText3}
      >
        Pricing
      </Text>
      <Text
        fontFamily={"PoppinsMedium"}
        position={"absolute"}
        style={style.navText4}
      >
        Contact
      </Text>

      <Button
        position={"absolute"}
        style={style.button}
        variant="outline"
        size="sm"
        top={"68vh"}
      >
        <Text
          fontFamily={"HelveticaNeueLTStdBd"}
          fontWeight={"medium"}
          color={"#FFFFFF"}
          textAlign={"center"}
          fontSize={18}
        >
          Start Free Trial
        </Text>
      </Button>
      <Pressable top={"68vh"} left={"40vw"} position={"absolute"}>
        <AntDesign position={"absolute"} name="play" size={56} color="white" />
      </Pressable>

      <Text
        fontFamily={"HelveticaNeueLTStdBd"}
        style={style.watch}
        fontWeight={"medium"}
        position={"absolute"}
      >
        Watch Video
      </Text>
      {/* </View> */}
    </NativeBaseProvider>
  );
};

export default Test;

const web = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    opacity: 1,
  },
  logo: {
    top: "3vh",
    left: "14vw",
    width: 75,
    height: 100,
    opacity: 0.99,
  },
  text: {
    fontSize: 56,
    color: "#FFFFFF",
    top: "32vh",
    left: "14vw",
    textAlign: "left",
  },
  navText1: {
    top: "7vh",
    left: "50vw",
    color: "#FFFFFF",
  },
  navText2: {
    top: "7vh",
    left: "59vw",
    color: "#FFFFFF",
  },
  navText3: {
    top: "7vh",
    left: "66vw",
    color: "#FFFFFF",
  },
  navText4: {
    top: "7vh",
    left: "72vw",
    color: "#FFFFFF",
  },
  button: {
    left: "14vw",
    height: 60,
    width: 200,
    borderRadius: 30,
    borderWidth: 2,
  },

  watch: {
    fontSize: 18,
    color: "#FFFFFF",
    left: "46vw",
    top: "70vh",
  },
});

const mobile = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    opacity: 1,
  },
  logo: {
    top: 10,
    left: 14,
    width: 75,
    height: 70,
    opacity: 0.99,
  },
  text: {
    fontSize: 26,
    color: "#FFFFFF",
    top: "18%",
    left: 37,
    justifyContent: "center",
    textAlign: "left",
  },
  navText1: {
    top: 55,
    left: 765,
    color: "#FFFFFF",
  },
  navText2: {
    top: 55,
    left: 909,
    color: "#FFFFFF",
  },
  navText3: {
    top: 55,
    left: 1023,
    color: "#FFFFFF",
  },
  navText4: {
    top: 55,
    left: 1124,
    color: "#FFFFFF",
  },
  button: {
    top: "87%",
    left: "10%",
    height: 50,
    width: 160,
    borderRadius: 30,
    borderWidth: 2,
  },
  // design: {
  //   left: 436,
  // },
  watch: {
    fontWeight: "medium",
    fontSize: 14,
    color: "#FFFFFF",
    left: "56vw",
    top: "60vh",
  },
});
