import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Animated,
} from "react-native";
import {
  NativeBaseProvider,
  Box,
  HStack,
  Center,
  Text,
  Pressable,
  Icon,
  Hidden,
  Image,
  Heading,
  Button,
} from "native-base";
import Okok from "./Okok";
import GradientButton from "./lineargradient";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const FifthMobile = () => {
  const scrollref = useRef();
  const [index, setIndex] = useState(1);

  const TickText = (props) => {
    return (
      <HStack paddingTop={height * 0.02}>
        <Icon as={<Okok />} size={5} />
        <Text ml={2} color={"rgb(152,138,180)"}>
          {props.children}
        </Text>
      </HStack>
    );
  };

  const handleScroll = (e) => {
    console.log(e);
    if (e < 180) {
      setIndex(1);
    }
    if (e >= 180) {
      setIndex(2);
    }
  };

  return (
    <NativeBaseProvider>
      <Hidden from="800" to="1024">
        <Image
          source={require("../assets/price_bg.png")}
          height={height * 1.2}
        />
        <Box width={width} position={"absolute"}>
          <Center>
            <Heading color={"rgb(125,43,233)"} fontSize={32} margin={5}>
              Choose a plan
            </Heading>
            <Box
              borderRadius={"30"}
              alignSelf={"center"}
              borderStyle={"solid"}
              borderWidth={3}
              borderColor={"rgb(125,43,233)"}
            >
              <HStack>
                <Pressable
                  onPress={() => {
                    scrollref.current.scrollTo({ x: 0 });
                  }}
                >
                  <Box style={index == 1 ? Styles.blueBg : Styles.whiteBg}>
                    <Center>
                      <Text color={index == 1 ? "white" : "rgb(125,43,233)"}>
                        Solo
                      </Text>
                    </Center>
                  </Box>
                </Pressable>
                <Pressable
                  onPress={() => {
                    scrollref.current.scrollTo({ x: width });
                  }}
                >
                  <Box style={index == 2 ? Styles.blueBg : Styles.whiteBg}>
                    <Center>
                      <Text color={index == 2 ? "white" : "rgb(125,43,233)"}>
                        Team
                      </Text>
                    </Center>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
            <Box width={width * 0.9}>
              <ScrollView
                horizontal
                onScroll={(e) => {
                  handleScroll(e.nativeEvent.contentOffset.x);
                }}
                scrollEventThrottle={0}
                ref={scrollref}
                showsHorizontalScrollIndicator={false}
              >
                <HStack>
                  <Box
                    style={Styles.styledbox}
                    m={10}
                    height={height * 0.7}
                    width={width * 0.7}
                  >
                    <Box margin={8} ml={10}>
                      <HStack>
                        <Text fontSize={30} color={"rgb(125,43,233)"}>
                          $99
                        </Text>
                        <Text m={3} color={"rgb(152,138,180)"}>
                          (Monthly)
                        </Text>
                      </HStack>
                      <TickText>1 Users</TickText>
                      <TickText>100 Properties/day</TickText>
                      <TickText>Driving Routes</TickText>
                      <TickText>1 Credit = $1.00</TickText>
                      <TickText>4*6 Mail = $0.75</TickText>
                      <TickText>Smart Search = $0.10</TickText>
                      <TickText>5 Free Credits</TickText>
                      <TickText>E-mail Support</TickText>
                    </Box>
                    <Center mt={"auto"} mb={5}>
                      <Box>
                        <Pressable>
                          <LinearGradient
                            colors={["rgb(173,117,248)", "rgb(125,43,233)"]}
                            start={[0, 0.5]}
                            end={[0, 0.5]}
                            style={Styles.Button}
                          >
                            <Text color={"white"} textAlign={"center"} mx={5}>
                              Buy License for Solo
                            </Text>
                          </LinearGradient>
                        </Pressable>
                      </Box>
                    </Center>
                  </Box>
                  <Box
                    style={Styles.styledbox}
                    m={10}
                    height={height * 0.7}
                    width={width * 0.7}
                  >
                    <Box margin={8}>
                      <HStack>
                        <Text fontSize={30} color={"rgb(125,43,233)"}>
                          $299
                        </Text>
                        <Text m={3} color={"rgb(152,138,180)"}>
                          (Monthly)
                        </Text>
                      </HStack>
                      <TickText>5 Users</TickText>
                      <TickText>300 Properties/day</TickText>
                      <TickText>Live Driving Monitor</TickText>
                      <TickText>1 Credit = $1.00</TickText>
                      <TickText>4*6 Mail = $0.75</TickText>
                      <TickText>Smart Search = $0.10</TickText>
                      <TickText>10 Free Credits</TickText>
                      <TickText>Live Chat Support</TickText>
                    </Box>
                    <Center mt={"auto"} mb={5}>
                      <Box>
                        <Pressable>
                          <LinearGradient
                            colors={["rgb(173,117,248)", "rgb(125,43,233)"]}
                            start={[0, 0.5]}
                            end={[0, 0.5]}
                            style={Styles.Button}
                          >
                            <Text color={"white"} textAlign={"center"} mx={5}>
                              Buy License for Team
                            </Text>
                          </LinearGradient>
                        </Pressable>
                      </Box>
                    </Center>
                  </Box>
                </HStack>
              </ScrollView>
              <HStack alignSelf="center" space="2">
                <View style={index == 2 ? Styles.mystyle1 : Styles.mystyle}>
                  <Text> </Text>
                </View>
                <View style={index == 1 ? Styles.mystyle1 : Styles.mystyle}>
                  <Text> </Text>
                </View>
              </HStack>
            </Box>
          </Center>
        </Box>
      </Hidden>
    </NativeBaseProvider>
  );
};
export default FifthMobile;
const Styles = StyleSheet.create({
  // styledbox: {
  //   backgroundColor: "white",
  //   shadowColor: "#7D2BE959",
  //   shadowRadius: 30,
  //   padding: 10,
  //   height: height * 0.8,
  //   width: width * 0.8,
  //   borderRadius: 40,
  //   opacity: 1,
  // },
  whiteBg: {
    backgroundColor: "transparent",
    variant: "unstyled",
    borderRadius: 30,
    padding: 10,
    width: 110,
    height: 40,
  },
  blueBg: {
    backgroundColor: "rgb(125,43,233)",
    variant: "unstyled",
    borderRadius: 30,
    padding: 10,
    width: 110,
    height: 40,
  },
  mystyle: {
    borderRadius: 50,
    borderWidth: 2,
    width: 10,
    height: 10,
    shadow: 2,
    alignSelf: "center",
    borderColor: "#7D2BE9",
    opacity: "100%",
  },
  mystyle1: {
    borderRadius: 50,
    borderWidth: 3,
    width: 2,
    height: 1,
    backgroundColor: "blue",
    alignSelf: "center",
    borderColor: "#7D2BE9",
    opacity: "30%",
  },
  styledbox: {
    backgroundColor: "white",
    shadowColor: "#7D2BE959",
    shadowRadius: 30,
    borderRadius: 40,
    opacity: 1,
  },
  Button: {
    padding: 10,
    borderRadius: 30,
  },
});
