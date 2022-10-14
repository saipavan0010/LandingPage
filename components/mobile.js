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
  Spacer,
} from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Dimensions } from "react-native";

const Mobile = () => {
  const { height, width } = Dimensions.get("window");
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <Image
          //style={mobile.image}
          source={require("../assets/hero_image_mobile.png")}
          //   styles={{ width: 30 * vw, height: vh(100) }}
          alt="Alternate Text"
          size={"full"}
        />
        <Image
          style={mobile.logo}
          position={"absolute"}
          height={height}
          width={width}
          source={require("../assets/logo_white.png")}
          alt="Alternate Text"
        />
        <View top={"18%"} alignSelf={"center"} position={"absolute"}>
          <Text
            fontFamily={"PoppinsSemiBold"}
            // position={"absolute"}
            //   textAlign="center"
            // justifyItems="center"
            textAlign="center"
            style={mobile.text}
          >
            {`The Simple Way \n to Start Real Estate \n Investing`}
          </Text>
        </View>
        <Text
          fontFamily={"PoppinsMedium"}
          position={"absolute"}
          style={mobile.navText1}
        >
          How it works
        </Text>
        <Text
          fontFamily={"PoppinsMedium"}
          position={"absolute"}
          style={mobile.navText2}
        >
          Features
        </Text>
        <Text
          fontFamily={"PoppinsMedium"}
          position={"absolute"}
          style={mobile.navText3}
        >
          Pricing
        </Text>
        <Text
          fontFamily={"PoppinsMedium"}
          position={"absolute"}
          style={mobile.navText4}
        >
          Contact
        </Text>
        <HStack top={"87%"} left={"7%"} position={"absolute"}>
          <Stack>
            <Button
              position={"absolute"}
              style={mobile.button}
              variant="outline"
              marginRight={"1%"}
              width={10}
              //   size="2"
              //   top={"87%"}
            >
              <Text
                fontFamily={"HelveticaNeueLTStdBd"}
                fontWeight={"medium"}
                color={"#FFFFFF"}
                textAlign={"center"}
                fontSize={14}
              >
                Start Free Trial
              </Text>
            </Button>
          </Stack>
          <Stack top={"86.5%"} left={"67%"} position={"absolute"}>
            <Pressable marginLeft={"400%"}>
              <AntDesign
                // position={"absolute"}

                name="play"
                size={47}
                color="white"
              />
            </Pressable>
          </Stack>
          {/* <Stack position={"absolute"} marginRight={"10%"}>
            <Text
              fontFamily={"HelveticaNeueLTStdBd"}
              style={mobile.watch}
              fontWeight={"medium"}
            >
              Watch Video
            </Text>
          </Stack> */}
          <Stack
            // bg={"black"}
            w={100}
            position={"absolute"}
            top={3.5}
            left={"250"}
          >
            <Text
              fontSize={"14"}
              fontFamily={"HelveticaNeueLTStdBd"}
              color={"#FFFFFF"}
            >
              Watch Video
            </Text>
          </Stack>
        </HStack>
      </View>
    </NativeBaseProvider>
  );
};

export default Mobile;

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

    left: 37,
    justifyContent: "center",
    // textAlign: "left",
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
    // left: "10%",
    marginRight: "2%",

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
    // left: "80%",
    top: "87%",
    // marginRight: "2%",
  },
});
