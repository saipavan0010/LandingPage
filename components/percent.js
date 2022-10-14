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

const Percent = () => {
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <Image
          style={styles.image}
          source={require("../assets/hero_image_updated.png")}
          alt="Alternate Text"
          size={"full"}
        />
        <Image
          style={styles.logo}
          position={"absolute"}
          source={require("../assets/logo_white.png")}
          alt="Alternate Text"
          size={"xl"}
        />
        <Text
          fontFamily={"PoppinsSemiBold"}
          position={"absolute"}
          style={styles.text}
        >
          The Simple Way
          <br />
          to Start Real Estate
          <br />
          Investing
        </Text>
        <HStack
          width={600}
          //   backgroundColor={"black"}
          position={"absolute"}
          marginLeft="auto"
          style={styles.stackk}
        >
          <Stack width={110}>
            <Text fontFamily={"PoppinsMedium"} style={styles.navText1}>
              How it works
            </Text>
          </Stack>
          <Text fontFamily={"PoppinsMedium"} style={styles.navText2}>
            Features
          </Text>
          <Text fontFamily={"PoppinsMedium"} style={styles.navText3}>
            Pricing
          </Text>
          <Text fontFamily={"PoppinsMedium"} style={styles.navText4}>
            Contact
          </Text>
        </HStack>
        {/* <HStack top={576} position={"absolute"}> */}
        <Button
          position={"absolute"}
          style={styles.button}
          variant="outline"
          size="sm"
          top={576}
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
        <Pressable top={576} left={436} position={"absolute"}>
          <AntDesign
            position={"absolute"}
            name="play"
            size={56}
            color="white"
          />
        </Pressable>
        {/* </HStack> */}
        <Text
          fontFamily={"HelveticaNeueLTStdBd"}
          style={styles.watch}
          fontWeight={"medium"}
          fontSize={18}
          position={"absolute"}
        >
          Watch Video
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default Percent;

const styles = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    opacity: 1,
  },
  logo: {
    top: "2%",
    left: "13%",
    width: 75,
    height: 100,
    opacity: 0.99,
  },
  text: {
    fontSize: 56,
    color: "#FFFFFF",
    top: "31%",
    left: 205,
    textAlign: "left",
  },
  stackk: {
    top: "7%",
    left: "53%",
  },
  navText1: {
    // top: 55,
    // left: "53%"
    marginRight: "5%",
    // marginRight: "10%",
    color: "#FFFFFF",
  },
  navText2: {
    // top: 55,
    // left: "30%",
    marginRight: "5%",
    color: "#FFFFFF",
  },
  navText3: {
    // top: 55,
    // left: "70%",
    marginRight: "5%",

    color: "#FFFFFF",
  },
  navText4: {
    // top: 55,
    // left: 1124,
    color: "#FFFFFF",
  },
  button: {
    left: 205,
    height: 60,
    width: 200,
    borderRadius: 30,
    borderWidth: 2,
  },
  // design: {
  //   left: 436,
  // },
  watch: {
    fontSize: 18,
    color: "#FFFFFF",
    left: 516,
    top: 595,
  },
});
