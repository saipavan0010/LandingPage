import React from "react";
import {
  Center,
  Text,
  Box,
  HStack,
  Image,
  Stack,
  Pressable,
  Icon,
  Link,
} from "native-base";
import { Dimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Applestore from "./Applestore";
import Googleplay from "./googleplay";
const { height, width } = Dimensions.get("window");

const GetStarted = () => {
  return (
    <>
      <Box safeArea />
      <Center>
        <Box
          background={width < 500 ? "white" : "rgba(255,255,255,0.3)"}
          borderRadius={width < 500 ? 18 : 40}
          borderColor={"white"}
          borderStyle={"solid"}
          borderWidth={"2"}
          shadow={width < 500 ? 4 : 0}
          width={width < 500 ? width * 0.9 : width * 0.75}
        >
          <LinearGradient
            colors={["rgb(173,117,248)", "rgb(125,43,233)"]}
            start={[0.1, 0.2]}
            end={[0.2, 0]}
            style={{
              borderRadius: width < 500 ? 10 : 30,
              margin: width < 500 ? 8 : 15,
            }}
          >
            <Box padding={width < 500 ? 10 : 20} pb={-10}>
              <Center>
                <Text
                  fontSize={width < 500 ? width * 0.08 : height * 0.08}
                  color={"white"}
                  textAlign={"center"}
                >
                  Let's {width < 500 ? "\n" : ""}Get Started
                </Text>
                <Text
                  color={"#FFC537"}
                  fontSize={width < 500 ? width * 0.05 : height * 0.05}
                  textAlign={"center"}
                >
                  with a free 7-day trial
                </Text>
              </Center>

              <Center>
                <Box mb={10}>
                  <HStack>
                    <Link
                      href="https://apps.apple.com/us/app/shadowproperties/id1491176685/"
                      isExternal
                    >
                      <Icon
                        as={<Applestore />}
                        size={width < 500 ? width * 0.3 : width * 0.1}
                      />
                    </Link>
                    <Link
                      href="https://play.google.com/store/apps/details?id=and.app.properties.shadow"
                      isExternal
                    >
                      <Icon
                        as={<Googleplay />}
                        ml={width < 300 ? 4 : 10}
                        size={width < 500 ? width * 0.3 : width * 0.1}
                      />
                    </Link>
                  </HStack>
                </Box>
              </Center>
            </Box>
          </LinearGradient>
        </Box>
      </Center>
    </>
  );
};
export default GetStarted;
