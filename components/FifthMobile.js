import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  HStack,
  Center,
  Text,
  Pressable,
  Hidden,
  Icon,
  Image,
  Heading,
  Button,
} from "native-base";
import Okok from "./Tick";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const FifthMobile = () => {
  let platform = "web";
  if (navigator.userAgent.includes("iPhone")) {
    platform = "ios";
  } else if (navigator.userAgent.includes("Android")) {
    platform = "android";
  }
  const isMobileLandscape = () => {
    const agent = navigator.userAgent;
    console.log(agent);
    if (
      agent.includes("iPhone") ||
      agent.includes("Android") ||
      agent.includes("iPad")
    ) {
      if (height < width) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  console.log(isMobileLandscape());
  const scrollref = useRef();
  const [cardheight, setheight] = useState(height);
  const [index, setIndex] = useState(1);
  // useEffect(() => {
  //   console.log(index, "index");
  // }, [index]);

  const TickText = (props) => {
    return (
      <HStack paddingTop={width < 300 ? 1 : height * 0.02}>
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
          style={{
            height: platform === "android" ? height * 1.3 : height * 1.5,
          }}
          height={isMobileLandscape() ? cardheight * 1.5 : cardheight * 1.13}
        />
        {isMobileLandscape() ? (
          <>
            <Box position={"absolute"} width={width}>
              <Center>
                <Heading color={"rgb(125,43,233)"} fontSize={32} margin={5}>
                  Choose a plan
                </Heading>
                <Box
                  m={10}
                  height={600}
                  width={width * 0.9}
                  onLayout={(e) => {
                    console.log(e);
                    setheight(e.nativeEvent.layout.height);
                  }}
                >
                  <HStack>
                    <Box
                      m={width * 0.08}
                      mr={"auto"}
                      style={Styles.styledbox}
                      width={width * 0.3}
                    >
                      <Box margin={8} mr={0}>
                        <Center>
                          <Heading fontSize={30} color={"rgb(125,43,233)"}>
                            Solo
                          </Heading>
                        </Center>
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
                      m={width * 0.08}
                      ml={"auto"}
                      style={Styles.styledbox}
                      width={width * 0.3}
                    >
                      <Box margin={8}>
                        <Center>
                          <Heading fontSize={30} color={"rgb(125,43,233)"}>
                            Team
                          </Heading>
                        </Center>
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
                </Box>
              </Center>
            </Box>
          </>
        ) : (
          <Box
            width={width}
            position={"absolute"}
            onLayout={(e) => {
              console.log(e);
              setheight(e.nativeEvent.layout.height);
            }}
          >
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
              <Box width={width * 0.9} height={height * 0.78}>
                <ScrollView
                  horizontal
                  onScroll={(e) => {
                    handleScroll(e.nativeEvent.contentOffset.x);
                  }}
                  scrollEventThrottle={0}
                  ref={scrollref}
                  showsHorizontalScrollIndicator={false}
                >
                  <HStack marginX={width > 600 ? width * 0.06 : 0}>
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
                      ml={20}
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
              </Box>
              <HStack alignSelf="center" space="2">
                <View style={index == 2 ? Styles.mystyle1 : Styles.mystyle}>
                  <Text> </Text>
                </View>
                <View style={index == 1 ? Styles.mystyle1 : Styles.mystyle}>
                  <Text> </Text>
                </View>
              </HStack>
            </Center>
          </Box>
        )}
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

// import React, { useEffect, useRef, useState } from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Dimensions,
//   View,
//   Animated,
// } from "react-native";
// import {
//   NativeBaseProvider,
//   Box,
//   HStack,
//   Center,
//   Text,
//   Pressable,
//   Icon,
//   Hidden,
//   Image,
//   Heading,
//   Button,
// } from "native-base";
// import Okok from "./Okok";
// import GradientButton from "./lineargradient";
// import { LinearGradient } from "expo-linear-gradient";

// const { width, height } = Dimensions.get("window");

// let platform = "web";
// if (navigator.userAgent.includes("iPhone")) {
//   platform = "ios";
// } else if (navigator.userAgent.includes("Android")) {
//   platform = "android";
// }

// const FifthMobile = () => {
//   const scrollref = useRef();
//   const [index, setIndex] = useState(1);

//   const TickText = (props) => {
//     return (
//       <HStack paddingTop={height * 0.02}>
//         <Icon as={<Okok />} size={5} />
//         <Text ml={2} color={"rgb(152,138,180)"}>
//           {props.children}
//         </Text>
//       </HStack>
//     );
//   };

//   const handleScroll = (e) => {
//     console.log(e);
//     if (e < 180) {
//       setIndex(1);
//     }
//     if (e >= 180) {
//       setIndex(2);
//     }
//   };

//   return (
//     <NativeBaseProvider>
//       <Hidden from="800" to="1024">
//         <Image
//           source={require("../assets/price_bg.png")}
//           // height={height * 1.3}
//           style={{
//             height: platform === "android" ? height * 1.3 : height * 1.5,
//           }}
//         />
//         <Box width={width} position={"absolute"}>
//           <Center>
//             <Heading color={"rgb(125,43,233)"} fontSize={32} margin={5}>
//               Choose a plan
//             </Heading>
//             <Box
//               borderRadius={"30"}
//               alignSelf={"center"}
//               borderStyle={"solid"}
//               borderWidth={3}
//               borderColor={"rgb(125,43,233)"}
//             >
//               <HStack>
//                 <Pressable
//                   onPress={() => {
//                     scrollref.current.scrollTo({ x: 0 });
//                   }}
//                 >
//                   <Box style={index == 1 ? Styles.blueBg : Styles.whiteBg}>
//                     <Center>
//                       <Text color={index == 1 ? "white" : "rgb(125,43,233)"}>
//                         Solo
//                       </Text>
//                     </Center>
//                   </Box>
//                 </Pressable>
//                 <Pressable
//                   onPress={() => {
//                     scrollref.current.scrollTo({ x: width });
//                   }}
//                 >
//                   <Box style={index == 2 ? Styles.blueBg : Styles.whiteBg}>
//                     <Center>
//                       <Text color={index == 2 ? "white" : "rgb(125,43,233)"}>
//                         Team
//                       </Text>
//                     </Center>
//                   </Box>
//                 </Pressable>
//               </HStack>
//             </Box>
//             <Box width={width * 0.9}>
//               <ScrollView
//                 horizontal
//                 onScroll={(e) => {
//                   handleScroll(e.nativeEvent.contentOffset.x);
//                 }}
//                 scrollEventThrottle={0}
//                 ref={scrollref}
//                 showsHorizontalScrollIndicator={false}
//               >
//                 <HStack>
//                   <Box
//                     style={Styles.styledbox}
//                     m={10}
//                     height={height * 0.7}
//                     width={width * 0.7}
//                   >
//                     <Box margin={8} ml={10}>
//                       <HStack>
//                         <Text fontSize={30} color={"rgb(125,43,233)"}>
//                           $99
//                         </Text>
//                         <Text m={3} color={"rgb(152,138,180)"}>
//                           (Monthly)
//                         </Text>
//                       </HStack>
//                       <TickText>1 Users</TickText>
//                       <TickText>100 Properties/day</TickText>
//                       <TickText>Driving Routes</TickText>
//                       <TickText>1 Credit = $1.00</TickText>
//                       <TickText>4*6 Mail = $0.75</TickText>
//                       <TickText>Smart Search = $0.10</TickText>
//                       <TickText>5 Free Credits</TickText>
//                       <TickText>E-mail Support</TickText>
//                     </Box>
//                     <Center mt={"auto"} mb={5}>
//                       <Box>
//                         <Pressable>
//                           <LinearGradient
//                             colors={["rgb(173,117,248)", "rgb(125,43,233)"]}
//                             start={[0, 0.5]}
//                             end={[0, 0.5]}
//                             style={Styles.Button}
//                           >
//                             <Text color={"white"} textAlign={"center"} mx={5}>
//                               Buy License for Solo
//                             </Text>
//                           </LinearGradient>
//                         </Pressable>
//                       </Box>
//                     </Center>
//                   </Box>
//                   <Box
//                     style={Styles.styledbox}
//                     m={10}
//                     height={height * 0.7}
//                     width={width * 0.7}
//                   >
//                     <Box margin={8}>
//                       <HStack>
//                         <Text fontSize={30} color={"rgb(125,43,233)"}>
//                           $299
//                         </Text>
//                         <Text m={3} color={"rgb(152,138,180)"}>
//                           (Monthly)
//                         </Text>
//                       </HStack>
//                       <TickText>5 Users</TickText>
//                       <TickText>300 Properties/day</TickText>
//                       <TickText>Live Driving Monitor</TickText>
//                       <TickText>1 Credit = $1.00</TickText>
//                       <TickText>4*6 Mail = $0.75</TickText>
//                       <TickText>Smart Search = $0.10</TickText>
//                       <TickText>10 Free Credits</TickText>
//                       <TickText>Live Chat Support</TickText>
//                     </Box>
//                     <Center mt={"auto"} mb={5}>
//                       <Box>
//                         <Pressable>
//                           <LinearGradient
//                             colors={["rgb(173,117,248)", "rgb(125,43,233)"]}
//                             start={[0, 0.5]}
//                             end={[0, 0.5]}
//                             style={Styles.Button}
//                           >
//                             <Text color={"white"} textAlign={"center"} mx={5}>
//                               Buy License for Team
//                             </Text>
//                           </LinearGradient>
//                         </Pressable>
//                       </Box>
//                     </Center>
//                   </Box>
//                 </HStack>
//               </ScrollView>
//               <HStack alignSelf="center" space="2">
//                 <View style={index == 2 ? Styles.mystyle1 : Styles.mystyle}>
//                   <Text> </Text>
//                 </View>
//                 <View style={index == 1 ? Styles.mystyle1 : Styles.mystyle}>
//                   <Text> </Text>
//                 </View>
//               </HStack>
//             </Box>
//           </Center>
//         </Box>
//       </Hidden>
//     </NativeBaseProvider>
//   );
// };
// export default FifthMobile;
// const Styles = StyleSheet.create({
//   // styledbox: {
//   //   backgroundColor: "white",
//   //   shadowColor: "#7D2BE959",
//   //   shadowRadius: 30,
//   //   padding: 10,
//   //   height: height * 0.8,
//   //   width: width * 0.8,
//   //   borderRadius: 40,
//   //   opacity: 1,
//   // },
//   whiteBg: {
//     backgroundColor: "transparent",
//     variant: "unstyled",
//     borderRadius: 30,
//     padding: 10,
//     width: 110,
//     height: 40,
//   },
//   blueBg: {
//     backgroundColor: "rgb(125,43,233)",
//     variant: "unstyled",
//     borderRadius: 30,
//     padding: 10,
//     width: 110,
//     height: 40,
//   },
//   mystyle: {
//     borderRadius: 50,
//     borderWidth: 2,
//     width: 10,
//     height: 10,
//     shadow: 2,
//     alignSelf: "center",
//     borderColor: "#7D2BE9",
//     opacity: "100%",
//   },
//   mystyle1: {
//     borderRadius: 50,
//     borderWidth: 3,
//     width: 2,
//     height: 1,
//     backgroundColor: "blue",
//     alignSelf: "center",
//     borderColor: "#7D2BE9",
//     opacity: "30%",
//   },
//   styledbox: {
//     backgroundColor: "white",
//     shadowColor: "#7D2BE959",
//     shadowRadius: 30,
//     borderRadius: 40,
//     opacity: 1,
//   },
//   Button: {
//     padding: 10,
//     borderRadius: 30,
//   },
// });
