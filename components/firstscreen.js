import React, { useEffect } from "react";
import {
  Text,
  NativeBaseProvider,
  Button,
  Image,
  Pressable,
  HStack,
  HamburgerIcon,
  Hidden,
  VStack,
  Link,
  Stack,
  View,
  Spacer,
  Box,
} from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Menu } from "native-base";
import * as Font from "expo-font";
import { Dimensions } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const FirstMobile = () => {
  const { height, width } = Dimensions.get("window");
  const gotoHowitwork = () =>
    window.scrollTo({
      top: 730,
      behavior: "smooth",
    });

  const gotofeatures = () =>
    window.scrollTo({
      top: 2300,
      behavior: "smooth",
    });

  const gotoPricing = () =>
    window.scrollTo({
      top: 4615,
      behavior: "smooth",
    });

  const gotocontacts = () =>
    window.scrollTo({
      top: 5660,
      behavior: "smooth",
    });

  return (
    <Hidden from="800" to="1024">
      <View display={["true", "true", "true", "none"]}>
        <Image
          source={require("../assets/hero_image_mobile.png")}
          alt="Alternate Text"
          width={10 * vw}
          height={height}
        />
        <Image
          style={mobile.logo}
          position={"absolute"}
          source={require("../assets/logo_white.png")}
          alt="Alternate Text"
        />
        <View top={"20vh"} alignSelf={"center"} position={"absolute"}>
          <Text
            fontFamily={"PoppinsSemiBold"}
            textAlign="center"
            style={mobile.text}
          >
            {`The Simple Way \n to Start Real Estate \n Investing`}
          </Text>
        </View>

        <Box top={"4vh"} left={"83vw"} position={"absolute"}>
          <Menu
            closeOnSelect={true}
            // placement={"bottom"}
            borderRadius="20"
            style={{ width: vw(100) }}
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Feather name="menu" size={28} color="white" />
                </Pressable>
              );
            }}
          >
            <Menu.Item borderRadius={"15"}>
              <Text onClick={gotoHowitwork} fontFamily="PoppinsMedium">
                How it work
              </Text>
            </Menu.Item>
            <Menu.Item>
              <Text onClick={gotofeatures} fontFamily="PoppinsMedium">
                Features
              </Text>
            </Menu.Item>
            <Menu.Item>
              <Text onClick={gotoPricing} fontFamily="PoppinsMedium">
                Pricing
              </Text>
            </Menu.Item>
            <Menu.Item>
              <Text onClick={gotocontacts} fontFamily="PoppinsMedium">
                Contact
              </Text>
            </Menu.Item>
          </Menu>
        </Box>
        <HStack bottom={"3vh"} left={"10vw"} position={"absolute"}>
          <Stack>
            <Button
              position={"absolute"}
              width={"32vw"}
              height={"6vh"}
              borderRadius={"full"}
              variant="outline"
              borderColor={"#ffffff"}
            >
              <Link href="https://web.shadow.properties/" isExternal>
                <Text
                  fontFamily={"HelveticaNeueLTStdBd"}
                  fontWeight={"medium"}
                  color={"#FFFFFF"}
                  textAlign={"center"}
                  fontSize={"1.8vh"}
                >
                  Start Free Trial
                </Text>
              </Link>
            </Button>
          </Stack>
          <Pressable left={"46vw"}>
            <Link href="https://web.shadow.properties/" isExternal>
              <AntDesign name="play" size={"5.5vh"} color="white" />
            </Link>
          </Pressable>

          <Stack w={"28vw"} position={"absolute"} top={"1.7vh"} left={"61vw"}>
            <Text
              fontSize={"1.8vh"}
              fontFamily={"HelveticaNeueLTStdBd"}
              color={"#FFFFFF"}
            >
              Watch Video
            </Text>
          </Stack>
        </HStack>
      </View>
    </Hidden>
  );
};

export default FirstMobile;

const mobile = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    opacity: 1,
  },
  logo: {
    top: "2vh",
    left: "10vw",
    width: "13vw",
    height: "9vh",
    opacity: 0.99,
  },
  text: {
    fontSize: "5vh",
    color: "#FFFFFF",

    justifyContent: "center",
  },
});
