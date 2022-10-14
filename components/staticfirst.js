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
  Link,
  Box,
  Hidden,
} from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Dimensions } from "react-native";

const Example = () => {
  const gotoHowitwork = () =>
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });

  const gotofeatures = () =>
    window.scrollTo({
      top: 3800,
      behavior: "smooth",
    });

  const gotoPricing = () =>
    window.scrollTo({
      top: 4915,
      behavior: "smooth",
    });

  const gotocontacts = () =>
    window.scrollTo({
      top: 6040,
      behavior: "smooth",
    });
  return (
    <>
      <Hidden only={["base", "sm", "md"]}>
        <View flex={1} zIndex="999">
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
          <Text
            fontFamily={"PoppinsMedium"}
            position={"absolute"}
            style={styles.navText1}
            onClick={gotoHowitwork}
          >
            How it works
          </Text>
          <Text
            fontFamily={"PoppinsMedium"}
            position={"absolute"}
            style={styles.navText2}
            onClick={gotofeatures}
          >
            Features
          </Text>
          <Text
            fontFamily={"PoppinsMedium"}
            position={"absolute"}
            style={styles.navText3}
            onClick={gotoPricing}
          >
            Pricing
          </Text>
          <Text
            fontFamily={"PoppinsMedium"}
            position={"absolute"}
            style={styles.navText4}
            onClick={gotocontacts}
          >
            Contact
          </Text>

          <Button
            position={"absolute"}
            style={styles.button}
            variant="outline"
            size="sm"
            top={576}
          >
            <Link href="https://web.shadow.properties/" isExternal>
              <Text
                fontFamily={"HelveticaNeueLTStdBd"}
                fontWeight={"medium"}
                color={"#FFFFFF"}
                textAlign={"center"}
                fontSize={18}
              >
                Start Free Trial
              </Text>
            </Link>
          </Button>

          <Pressable top={576} left={436} position={"absolute"}>
            <Link href="https://web.shadow.properties/" isExternal>
              <AntDesign
                position={"absolute"}
                name="play"
                size={56}
                color="white"
              />
            </Link>
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
      </Hidden>
    </>
  );
};

export default Example;

const styles = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    opacity: 1,
  },
  logo: {
    top: 15,
    left: 205,
    width: 75,
    height: 100,
    opacity: 0.99,
  },
  text: {
    fontSize: 56,
    color: "#FFFFFF",
    top: 235,
    left: 205,
    textAlign: "left",
  },
  navText1: {
    fontWeight: "md",
    top: 55,
    left: 765,
    color: "#FFFFFF",
  },
  navText2: {
    fontWeight: "md",

    top: 55,
    left: 909,
    color: "#FFFFFF",
  },
  navText3: {
    fontWeight: "md",

    top: 55,
    left: 1023,
    color: "#FFFFFF",
  },
  navText4: {
    fontWeight: "md",

    top: 55,
    left: 1124,
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
    top: 590,
  },
});
