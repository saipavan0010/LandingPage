import React, { useEffect } from "react";
import {
  Text,
  NativeBaseProvider,
  HStack,
  Stack,
  Box,
  Menu,
} from "native-base";
import { Pressable, StyleSheet, Dimensions } from "react-native";
import ScrollToTop from "react-scroll-to-top";

import * as Font from "expo-font";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { AntDesign, Feather } from "@expo/vector-icons";

import Shadowlogo from "./shadow_logo";
const TopBar = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const gotoHowitwork = () =>
    navigation.navigate("Shadow Properties", {
      data: window.scrollTo({
        top: 730,
        // top: document.documentElement.scrollHeight,
        behavior: "smooth",

        edit: true,
      }),
      // data: toBottom.current.scrollToEnd(),
    });

  const gotofeatures = () =>
    navigation.navigate("Shadow Properties", {
      data: window.scrollTo({
        top: vh(680),
        behavior: "smooth",
        // block:"end",

        edit: true,
      }),
    });

  const gotoPricing = () =>
    navigation.navigate("Shadow Properties", {
      data: window.scrollTo({
        top: vh(680),
        behavior: "smooth",

        edit: true,
      }),
    });

  const gotocontacts = () =>
    navigation.navigate("Final", {
      data: window.scrollTo({
        top: vh(1000),
        behavior: "smooth",
        edit: true,
      }),
    });

  return (
    <NativeBaseProvider>
      <Stack>
        {width < 800 ? (
          <>
            <HStack top={vh(3)} space={1}>
              <Stack style={styles.logoMobile}>
                <Shadowlogo />
              </Stack>
              <Stack>
                <Box left={"80vw"} position={"absolute"}>
                  <Menu
                    closeOnSelect={true}
                    borderRadius="20"
                    style={{ width: vw(100) }}
                    trigger={(triggerProps) => {
                      return (
                        <Pressable {...triggerProps}>
                          <Feather name="menu" size={28} color="black" />
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
              </Stack>
            </HStack>
          </>
        ) : (
          <>
            <Stack style={styles.logo}>
              <Shadowlogo />
            </Stack>
            <Stack>
              <Box>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Shadow Properties", {
                      data: window.scrollTo({
                        // top: vh(100),
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth",

                        edit: true,
                      }),
                    });
                  }}
                >
                  <Text style={styles.navText1}>How it works</Text>
                </Pressable>
              </Box>
              <Box>
                <Pressable
                  onPress={() => {
                    console.log("navigated");
                    navigation.navigate("Shadow Properties", {
                      data: window.scrollTo({
                        top: vh(430),
                        behavior: "smooth",

                        edit: true,
                      }),
                      // data: toBottom.current.scrollToEnd(),
                    });
                  }}
                >
                  <Text style={styles.navText2}>Features</Text>
                </Pressable>
              </Box>
              <Box>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Shadow Properties", {
                      data: window.scrollTo({
                        top: vh(680),
                        behavior: "smooth",

                        edit: true,
                      }),
                    });
                  }}
                >
                  <Text style={styles.navText3}>Pricing</Text>
                </Pressable>
              </Box>
              <Box>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Shadow Properties", {
                      data: window.scrollTo({
                        top: vh(1000),
                        behavior: "smooth",
                        edit: true,
                      }),
                    });
                  }}
                >
                  <Text style={styles.navText4}>Contact</Text>
                </Pressable>
              </Box>
            </Stack>
          </>
        )}
      </Stack>
    </NativeBaseProvider>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  logo: {
    marginTop: vh(0.9),
    marginLeft: vw(10),
    width: vw(10),
    height: vh(10),
    opacity: 0.99,
    position: "absolute",
  },
  logoMobile: {
    marginTop: vh(0.9),
    // marginLeft: vw(10),
    width: vw(10),
    height: vh(10),
  },
  navText1: {
    marginTop: vh(5),
    marginLeft: vw(54),
    color: "#7D2BE9",
    position: "absolute",
    fontFamily: "PoppinsMedium",
  },
  navText2: {
    marginTop: vh(5),
    marginLeft: vw(65),
    color: "#7D2BE9",
    position: "absolute",
    fontFamily: "PoppinsMedium",
  },
  navText3: {
    marginTop: vh(5),
    marginLeft: vw(75),
    color: "#7D2BE9",
    position: "absolute",
    fontFamily: "PoppinsMedium",
  },
  navText4: {
    marginTop: vh(5),
    marginLeft: vw(85),
    color: "#7D2BE9",
    position: "absolute",
    fontFamily: "PoppinsMedium",
  },
});
