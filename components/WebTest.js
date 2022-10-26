// import React, { useEffect } from "react";
// import {
//   Text,
//   NativeBaseProvider,
//   Button,
//   Image,
//   Pressable,
//   HStack,
//   VStack,
//   Stack,
//   View,
// } from "native-base";
// import { StyleSheet, ScrollView } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import * as Font from "expo-font";
// import { Dimensions } from "react-native";

// const Tester = () => {
//   const { height, width } = Dimensions.get("window");
//   const deviceDimension = width < 500 ? "center" : "inherit";
//   const req =
//     width < 500
//       ? require("../assets/hero_image_mobile.png")
//       : require("../assets/hero_image_updated.png");
//   return (
//     <NativeBaseProvider>
//       <View flex={1}>
//         <Image
//           style={web.image}
//           source={req}
//           alt="Alternate Text"
//           size={"full"}
//         />
//         <Image
//           style={web.logo}
//           position={"absolute"}
//           source={require("../assets/logo_white.png")}
//           alt="Alternate Text"
//           size={"xl"}
//         />
//         <Text
//           fontFamily={"PoppinsSemiBold"}
//           position={"absolute"}
//           style={web.text}
//           textAlign={deviceDimension}
//         >
//           The Simple Way
//           <br />
//           to Start Real Estate
//           <br />
//           Investing
//         </Text>
//         <Text
//           fontFamily={"PoppinsMedium"}
//           position={"absolute"}
//           style={web.navText1}
//         >
//           How it works
//         </Text>
//         <Text
//           fontFamily={"PoppinsMedium"}
//           position={"absolute"}
//           style={web.navText2}
//         >
//           Features
//         </Text>
//         <Text
//           fontFamily={"PoppinsMedium"}
//           position={"absolute"}
//           style={web.navText3}
//         >
//           Pricing
//         </Text>
//         <Text
//           fontFamily={"PoppinsMedium"}
//           position={"absolute"}
//           style={web.navText4}
//         >
//           Contact
//         </Text>
//         {/* <HStack top={576} position={"absolute"}> */}
//         <Button
//           position={"absolute"}
//           style={web.button}
//           variant="outline"
//           size="sm"
//           top={576}
//         >
//           <Text
//             fontFamily={"HelveticaNeueLTStdBd"}
//             fontWeight={"medium"}
//             color={"#FFFFFF"}
//             textAlign={"center"}
//             fontSize={18}
//           >
//             Start Free Trial
//           </Text>
//         </Button>
//         <Pressable top={576} left={436} position={"absolute"}>
//           <AntDesign
//             position={"absolute"}
//             name="play"
//             size={56}
//             color="white"
//           />
//         </Pressable>
//         {/* </HStack> */}
//         <Text
//           fontFamily={"HelveticaNeueLTStdBd"}
//           style={web.watch}
//           fontWeight={"medium"}
//           position={"absolute"}
//         >
//           Watch Video
//         </Text>
//       </View>
//     </NativeBaseProvider>
//   );
// };

// export default Tester;

// const web = StyleSheet.create({
//   image: {
//     top: 0,
//     left: 0,
//     opacity: 1,
//   },
//   logo: {
//     top: 15,
//     left: 205,
//     width: 75,
//     height: 100,
//     opacity: 0.99,
//   },
//   text: {
//     fontSize: 56,
//     color: "#FFFFFF",
//     // top: 235,
//     // left: 205,
//     // textAlign: deviceDimension,
//   },
//   navText1: {
//     top: 55,
//     left: 765,
//     color: "#FFFFFF",
//   },
//   navText2: {
//     top: 55,
//     left: 909,
//     color: "#FFFFFF",
//   },
//   navText3: {
//     top: 55,
//     left: 1023,
//     color: "#FFFFFF",
//   },
//   navText4: {
//     top: 55,
//     left: 1124,
//     color: "#FFFFFF",
//   },
//   button: {
//     left: 205,
//     height: 60,
//     width: 200,
//     borderRadius: 30,
//     borderWidth: 2,
//   },

//   watch: {
//     fontSize: 18,
//     color: "#FFFFFF",
//     left: 516,
//     top: 595,
//   },
// });

import React, { useRef } from "react";
import {
  Text,
  NativeBaseProvider,
  Button,
  Image,
  Pressable,
  Hidden,
  HStack,
  VStack,
  useMediaQuery,
  Stack,
  View,
  Menu,
  Link,
  Box,
} from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Dimensions } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

// const FirstWeb = ({ firstweb }) => {

const WebTest = (props) => {
  const { height, width } = Dimensions.get("window");

  const [isLargerThan512] = useMediaQuery({
    minWidth: 512,
  });

  const [isLandScape, isPortrait] = useMediaQuery([
    {
      orientation: "landscape",
    },
    {
      orientation: "portrait",
    },
  ]);

  const gotoHowitwork = () => {
    // props.innerRef.current.scrollIntoView({
    //   behavior: "smooth",
    // });
    // {
    //   props.innerRef;
    // }
  };
  const gotofeatures = () =>
    props.screen2.scrollIntoView({
      behavior: "smooth",
    });

  const gotoPricing = () =>
    window.scrollTo({
      // top: 4915,
      top: vh(677),
      behavior: "smooth",
    });

  const gotocontacts = () =>
    window.scrollTo({
      // top: 6860,
      top: vh(1000),
      behavior: "smooth",
    });
  return (
    <>
      {isLandScape ? (
        <>
          <Hidden from="800" to="1024">
            <View display={["true", "true", "true", "none"]}>
              <Image
                source={require("../assets/hero_image_mobile.png")}
                alt="Alternate Text"
                position={"absolute"}
                style={{ width: vw(100), height: vh(300) }}

                // style={mobile.landImage}
                // width={"width"}
              />
              <Image
                style={mobile.landlogo}
                position={"absolute"}
                source={require("../assets/logo_white.png")}
                alt="Alternate Text"
              />
              <View top={"20vh"} alignSelf={"center"} position={"absolute"}>
                <Text
                  fontFamily={"PoppinsSemiBold"}
                  textAlign="center"
                  style={mobile.textland}
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

                <Stack
                  w={"28vw"}
                  position={"absolute"}
                  top={"1.7vh"}
                  left={"61vw"}
                >
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
        </>
      ) : (
        <>
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

                <Stack
                  w={"28vw"}
                  position={"absolute"}
                  top={"1.7vh"}
                  left={"61vw"}
                >
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
        </>
      )}
    </>
  );
};

export default WebTest;

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

const mobile = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    opacity: 1,
  },
  landImage: {
    // width: width,
  },
  logo: {
    top: "2vh",
    left: "10vw",
    width: "13vw",
    height: "9vh",
    opacity: 0.99,
  },
  textland: {
    fontSize: "13vh",
    color: "#FFFFFF",

    justifyContent: "center",
  },
  landlogo: {
    top: "2vh",
    left: "10vw",
    width: "8vw",
    height: "20vh",
    opacity: 0.99,
  },
  text: {
    fontSize: "5vh",
    color: "#FFFFFF",

    justifyContent: "center",
  },
});
