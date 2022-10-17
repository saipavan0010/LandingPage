import React, { useEffect } from "react";
import { Text, NativeBaseProvider, Stack, Box } from "native-base";
import { Pressable, StyleSheet } from "react-native";

import * as Font from "expo-font";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import Shadowlogo from "./shadow_logo";
const TopBar = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Stack>
        <Stack style={styles.logo}>
          {/* <Pressable onPress={navigation.navigate("Final")}> */}

          <Shadowlogo />
          {/* </Pressable> */}
        </Stack>

        <Stack>
          <Box>
            <Pressable
              onPress={() => {
                navigation.navigate("Final", {
                  data: window.scrollTo({
                    top: vh(100),
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
                navigation.navigate("Final", {
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
                navigation.navigate("Final", {
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
                navigation.navigate("Final", {
                  data: window.scrollTo({
                    top: vh(1000),
                    // top: document.documentElement.scrollHeight,
                    behavior: "smooth",

                    edit: true,
                  }),
                  // data: Window.scrollByPages(-1),
                });
              }}
            >
              <Text style={styles.navText4}>Contact</Text>
            </Pressable>
          </Box>
        </Stack>
      </Stack>
    </NativeBaseProvider>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  logo: {
    marginTop: vh(0.7),
    marginLeft: vw(10),
    width: vw(10),
    height: vh(10),
    opacity: 0.99,
    position: "absolute",
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
