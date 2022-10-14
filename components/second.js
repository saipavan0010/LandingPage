// import React, { useEffect } from "react";
// import {
//   NativeBaseProvider,
//   View,
//   Text,
//   Center,
//   Image,
//   Stack,
//   Heading,
//   HStack,
//   VStack,
//   Box,
//   Pressable,
//   Badge,
// } from "native-base";
// import { StyleSheet } from "react-native";
// import * as Font from "expo-font";
// import { LinearGradient } from "expo-linear-gradient";
// import { AntDesign, Ionicons } from "@expo/vector-icons";
// import DropShadow from "react-native-drop-shadow";

// const Screen = () => {
//   useEffect(() => {
//     //./assets/helveFont/HelveticaNeueLTStd-Bd.otf
//     Font.loadAsync({
//       PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
//       HelveticaNeueLTStdBd: require("../assets/fonts/helveticaneueltstdultltcno font/HelveticaNeueLTStd-Bd.otf"),
//       HelveticaNeueLTStdMd: require("../assets/fonts/helveticaneueltstdultltcno font/HelveticaNeueLTStd-Md.otf"),
//     });
//   }, []);

//   return (
//     <>
//       <Box>
//         <Image
//           style={styles.backgroundImage}
//           source={require("../assets/Background.png")}
//           position="absolute"
//         />

//         <Heading
//           color="#7D2BE9"
//           position="absolute"
//           alignSelf={"center"}
//           opacity="100%"
//           marginTop={231}
//           fontFamily={"PoppinsSemiBold"}
//           fontSize={36}
//         >
//           How ShadowProperties App Works
//         </Heading>
//         <Box //box outer
//           ml={295}
//           mt={420}
//           backgroundColor="transparant"
//           position="absolute"
//           w={1010}
//           h={240}
//           style={styles.outerBox}
//           borderWidth={4}
//           borderColor={"white"}
//           borderRadius={30}
//           opacity={100}

//           // shadow="1"
//           // box-shadow="#00000040"
//           // shadowOffset={20}
//         >
//           {/* <LinearGradient //box outer lg
//             colors={["#e7dfee", "#f5f2eb"]}
//             start={{ x: 0, y: 0.5 }}
//             end={{ x: 1, y: 0.5 }}
//             w={1010}
//             h={240}
//             opacity={0.2}
//             style={styles.button1}
//           > */}
//           <Box mt={5} ml={5} w={958} h={193} borderRadius={15}>
//             <LinearGradient //inner box lg
//               colors={["#AD75F8", "#7D2BE9"]}
//               start={{ x: 0, y: 0.5 }}
//               end={{ x: 1, y: 0.5 }}
//               w={958}
//               h={193}
//               style={styles.button}
//             >
//               <Pressable>
//                 {({ isHovered }) => {
//                   return (
//                     <View position={"absolute"}>
//                       {isHovered ? (
//                         <View style={{ width: 300, height: 400, bg: "black" }}>
//                           <LinearGradient
//                             colors={["#FFD777", "#FFBB15"]}
//                             start={{ x: 0, y: 0.5 }}
//                             end={{ x: 1, y: 0.5 }}
//                             style={styles.cardH}
//                           >
//                             <Badge
//                               colorScheme="black"
//                               borderColor="#FFFFFF80"
//                               borderWidth="3px"
//                               borderRadius="10px"
//                               width="60"
//                               height="60"
//                               bg="#F3B233"
//                               mt={60}
//                               ml={120}
//                               alignItems="center"
//                             >
//                               <View ml={1.5}>
//                                 <AntDesign
//                                   name="eyeo"
//                                   size={26}
//                                   color="#FFFFFF80"
//                                 />
//                               </View>
//                             </Badge>
//                             <View mt={26}>
//                               <Text
//                                 fontFamily=" HelveticaNeueLTStdBd"
//                                 fontSize={"18px"}
//                                 alignSelf="Center"
//                                 color={"#7B5800"}
//                                 justifyContent={"center"}
//                               >
//                                 Accurate Driving
//                               </Text>
//                               <Text
//                                 mt={3}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 color={"#7B5800"}
//                                 fontFamily="HelveticaNeueLTStdMd"
//                                 justifyContent={"center"}
//                               >
//                                 It has survived
//                               </Text>
//                               <Text
//                                 justifyContent={"center"}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 fontFamily="HelveticaNeueLTStdMd"
//                                 color={"#7B5800"}
//                               >
//                                 not only five centuries
//                               </Text>
//                               <Text
//                                 mt={2}
//                                 justifyContent={"center"}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 fontFamily="HelveticaNeueLTStdBd"
//                                 color={"#7B5800"}
//                               >
//                                 Learn More
//                               </Text>
//                             </View>
//                           </LinearGradient>
//                         </View>
//                       ) : (
//                         <View
//                           style={{ position: "absolute" }}
//                           width="320"
//                           height={200}
//                         >
//                           <Badge
//                             colorScheme="black"
//                             alignSelf="Center"
//                             borderColor="#FFFFFF80"
//                             borderWidth="3px"
//                             borderRadius="10px"
//                             size="10px"
//                             bg="#8339FF"
//                             mt={30}
//                           >
//                             <AntDesign
//                               name="eyeo"
//                               size={28}
//                               color="#FFFFFF80"
//                             />
//                           </Badge>
//                           <View mt={19}>
//                             <Text
//                               fontFamily=" HelveticaNeueLTStdMd"
//                               fontSize={"18px"}
//                               alignSelf="Center"
//                               color={"#FFFFFF"}
//                               justifyContent={"center"}
//                             >
//                               Accurate Driving
//                             </Text>
//                             <Text
//                               alignSelf="Center"
//                               fontSize={"18px"}
//                               color={"#FFFFFF"}
//                               fontFamily="HelveticaNeueLTStdMd"
//                               justifyContent={"center"}
//                             >
//                               It has survived
//                             </Text>
//                             <Text
//                               justifyContent={"center"}
//                               alignSelf="Center"
//                               fontSize={"18px"}
//                               fontFamily="HelveticaNeueLTStdMd"
//                               color={"#FFFFFF"}
//                             >
//                               not only five centuries
//                             </Text>
//                           </View>
//                         </View>
//                       )}
//                     </View>
//                   );
//                 }}
//               </Pressable>

//               <Pressable>
//                 {({ isHovered }) => {
//                   return (
//                     <View position={"absolute"}>
//                       {isHovered ? (
//                         <View
//                           style={{ position: "absolute" }}
//                           width="320"
//                           height={400}
//                           ml={320}
//                         >
//                           <LinearGradient
//                             colors={["#FFD777", "#FFBB15"]}
//                             start={{ x: 0, y: 0.5 }}
//                             end={{ x: 1, y: 0.5 }}
//                             style={styles.cardH1}
//                           >
//                             <Badge
//                               colorScheme="black"
//                               borderColor="#FFFFFF80"
//                               borderWidth="3px"
//                               borderRadius="10px"
//                               width="60"
//                               height="60"
//                               bg="#F3B233"
//                               mt={60}
//                               ml={120}
//                               alignItems="center"
//                             >
//                               <View ml={1.5}>
//                                 <Ionicons
//                                   name="md-search-outline"
//                                   size={28}
//                                   color="#FFFFFF80"
//                                 />
//                               </View>
//                             </Badge>
//                             <View mt={26}>
//                               <Text
//                                 fontFamily=" HelveticaNeueLTStdBd"
//                                 fontSize={"18px"}
//                                 alignSelf="Center"
//                                 color={"#7B5800"}
//                                 justifyContent={"center"}
//                               >
//                                 Find Property Owners
//                               </Text>
//                               <Text
//                                 mt={3}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 color={"#7B5800"}
//                                 fontFamily="HelveticaNeueLTStdMd"
//                                 justifyContent={"center"}
//                               >
//                                 & Emails/Phones
//                               </Text>
//                               <Text
//                                 justifyContent={"center"}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 fontFamily="HelveticaNeueLTStdMd"
//                                 color={"#7B5800"}
//                               >
//                                 of the Owner
//                               </Text>
//                               <Text
//                                 mt={2}
//                                 justifyContent={"center"}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 fontFamily="HelveticaNeueLTStdBd"
//                                 color={"#7B5800"}
//                               >
//                                 Learn More
//                               </Text>
//                             </View>
//                           </LinearGradient>
//                         </View>
//                       ) : (
//                         <View
//                           style={{ position: "absolute" }}
//                           width="320"
//                           height={200}
//                           ml={320}
//                         >
//                           <Badge
//                             colorScheme="black"
//                             alignSelf="Center"
//                             borderColor="#FFFFFF80"
//                             borderWidth="3px"
//                             borderRadius="10px"
//                             size="10px"
//                             bg="#8339FF"
//                             mt={30}
//                           >
//                             <Ionicons
//                               name="md-search-outline"
//                               size={28}
//                               color="#FFFFFF80"
//                             />
//                           </Badge>
//                           <View mt={19}>
//                             <Text
//                               fontFamily=" HelveticaNeueLTStdMd"
//                               fontSize={"18px"}
//                               alignSelf="Center"
//                               color={"#FFFFFF"}
//                               justifyContent={"center"}
//                             >
//                               Find Property Owners
//                             </Text>
//                             <Text
//                               alignSelf="Center"
//                               fontSize={"18px"}
//                               color={"#FFFFFF"}
//                               fontFamily="HelveticaNeueLTStdMd"
//                               justifyContent={"center"}
//                             >
//                               & Emails/Phones
//                             </Text>
//                             <Text
//                               justifyContent={"center"}
//                               alignSelf="Center"
//                               fontSize={"18px"}
//                               fontFamily="HelveticaNeueLTStdMd"
//                               color={"#FFFFFF"}
//                             >
//                               of the Owner
//                             </Text>
//                           </View>
//                         </View>
//                       )}
//                     </View>
//                   );
//                 }}
//               </Pressable>

//               {/*

//               <View
//                 style={{ position: "absolute" }}
//                 width="320"
//                 height={200}
//                 ml={320}
//               >
//                 <Badge
//                   colorScheme="black"
//                   alignSelf="Center"
//                   borderColor="#FFFFFF80"
//                   borderWidth="3px"
//                   borderRadius="10px"
//                   size="10px"
//                   mt={30}
//                   bg="#8339FF"
//                 >
//                   <Ionicons
//                     name="md-search-outline"
//                     size={28}
//                     color="#FFFFFF80"
//                   />
//                 </Badge>
//                 <View mt={19}>
//                   <Text
//                     justifyContent={"center"}
//                     alignSelf="Center"
//                     fontSize={"18px"}
//                     color={"#FFFFFF"}
//                     fontFamily="HelveticaNeueLTStdMd"
//                   >
//                     Find Property Owners
//                   </Text>
//                   <Text
//                     justifyContent={"center"}
//                     alignSelf="Center"
//                     fontSize={"18px"}
//                     fontFamily="HelveticaNeueLTStdMd"
//                     color={"#FFFFFF"}
//                   >
//                     & Emails/Phones
//                   </Text>
//                   <Text
//                     alignSelf="Center"
//                     justifyContent={"center"}
//                     fontSize={"18px"}
//                     fontFamily="HelveticaNeueLTStdMd"
//                     color={"#FFFFFF"}
//                   >
//                     of the Owner
//                   </Text>
//                 </View>
//               </View> */}

//               <Pressable>
//                 {({ isHovered }) => {
//                   return (
//                     <View position={"absolute"}>
//                       {isHovered ? (
//                         <View
//                           style={{ position: "absolute" }}
//                           width="320"
//                           height={400}
//                           ml={660}
//                         >
//                           <LinearGradient
//                             colors={["#FFD777", "#FFBB15"]}
//                             start={{ x: 0, y: 0.5 }}
//                             end={{ x: 1, y: 0.5 }}
//                             style={styles.cardH2}
//                           >
//                             <Badge
//                               colorScheme="black"
//                               borderColor="#FFFFFF80"
//                               borderWidth="3px"
//                               borderRadius="10px"
//                               width="60"
//                               height="60"
//                               bg="#F3B233"
//                               mt={60}
//                               ml={120}
//                               alignItems="center"
//                             >
//                               <View ml={1.5}>
//                                 <AntDesign
//                                   name="menufold"
//                                   size={28}
//                                   color="#FFFFFF80"
//                                 />
//                               </View>
//                             </Badge>
//                             <View mt={26}>
//                               <Text
//                                 fontFamily=" HelveticaNeueLTStdBd"
//                                 fontSize={"18px"}
//                                 alignSelf="Center"
//                                 color={"#7B5800"}
//                                 justifyContent={"center"}
//                               >
//                                 Detailed Property
//                               </Text>
//                               <Text
//                                 mt={3}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 color={"#7B5800"}
//                                 fontFamily="HelveticaNeueLTStdMd"
//                                 justifyContent={"center"}
//                               >
//                                 Listing & CRM
//                               </Text>
//                               <Text
//                                 justifyContent={"center"}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 fontFamily="HelveticaNeueLTStdMd"
//                                 color={"#7B5800"}
//                               >
//                                 for Contacts
//                               </Text>
//                               <Text
//                                 mt={2}
//                                 justifyContent={"center"}
//                                 alignSelf="Center"
//                                 fontSize={"16px"}
//                                 fontFamily="HelveticaNeueLTStdBd"
//                                 color={"#7B5800"}
//                               >
//                                 Learn More
//                               </Text>
//                             </View>
//                           </LinearGradient>
//                         </View>
//                       ) : (
//                         <View
//                           style={{ position: "absolute" }}
//                           width="320"
//                           height={200}
//                           ml={640}
//                         >
//                           <Badge
//                             colorScheme="black"
//                             alignSelf="Center"
//                             borderColor="#FFFFFF80"
//                             borderWidth="3px"
//                             borderRadius="10px"
//                             size="10px"
//                             bg="#8339FF"
//                             mt={30}
//                           >
//                             <AntDesign
//                               name="menufold"
//                               size={28}
//                               color="#FFFFFF80"
//                             />
//                           </Badge>
//                           <View mt={19}>
//                             <Text
//                               fontFamily=" HelveticaNeueLTStdMd"
//                               fontSize={"18px"}
//                               alignSelf="Center"
//                               color={"#FFFFFF"}
//                               justifyContent={"center"}
//                             >
//                               Detailed Property
//                             </Text>
//                             <Text
//                               alignSelf="Center"
//                               fontSize={"18px"}
//                               color={"#FFFFFF"}
//                               fontFamily="HelveticaNeueLTStdMd"
//                               justifyContent={"center"}
//                             >
//                               Listing & CRM
//                             </Text>
//                             <Text
//                               justifyContent={"center"}
//                               alignSelf="Center"
//                               fontSize={"18px"}
//                               fontFamily="HelveticaNeueLTStdMd"
//                               color={"#FFFFFF"}
//                             >
//                               for Contacts
//                             </Text>
//                           </View>
//                         </View>
//                       )}
//                     </View>
//                   );
//                 }}
//               </Pressable>

//               {/*
//               <View
//                 style={{ position: "absolute" }}
//                 width="320"
//                 height={200}
//                 ml={640}
//               >
//                 <Badge
//                   colorScheme="black"
//                   alignSelf="Center"
//                   borderColor="#FFFFFF80"
//                   borderWidth="3px"
//                   borderRadius="10px"
//                   size="10px"
//                   mt={30}
//                   bg="#8339FF"
//                 >
//                   <AntDesign name="menufold" size={28} color="#FFFFFF80" />
//                 </Badge>
//                 <View mt={19}>
//                   <Text
//                     justifyContent={"center"}
//                     alignSelf="Center"
//                     fontSize={"18px"}
//                     color={"#FFFFFF"}
//                     fontFamily="HelveticaNeueLTStdMd"
//                   >
//                     Detailed Property
//                   </Text>
//                   <Text
//                     fontFamily="HelveticaNeueLTStdMd"
//                     justifyContent={"center"}
//                     alignSelf="Center"
//                     fontSize={"18px"}
//                     color={"#FFFFFF"}
//                   >
//                     Listing & CRM
//                   </Text>
//                   <Text
//                     fontFamily="HelveticaNeueLTStdMd"
//                     alignSelf="Center"
//                     justifyContent={"center"}
//                     fontSize={"18px"}
//                     color={"#FFFFFF"}
//                   >
//                     for Contacts
//                   </Text>
//                 </View>
//               </View> */}
//             </LinearGradient>
//           </Box>
//           {/* </LinearGradient> */}
//         </Box>
//         <HStack position={"absolute"} mt={730}>
//           <Image
//             ml={265}
//             style={{ width: 300, height: 651 }}
//             source={{
//               uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
//             }}
//             shadow="4"
//           />
//           <Image
//             ml={75}
//             style={{ width: 300, height: 651 }}
//             source={{
//               uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
//             }}
//             shadow="4"
//           />
//           <Image
//             ml={75}
//             style={{ width: 300, height: 651 }}
//             source={{
//               uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
//             }}
//             shadow="4"
//           />
//         </HStack>
//       </Box>
//     </>
//   );
// };

// export default Screen;

// const styles = StyleSheet.create({
//   backgroundImage: {
//     width: "100%",
//     height: 1450,
//   },
//   button: {
//     width: 958,
//     height: 193,

//     borderRadius: 20,
//   },
//   button1: {
//     width: 1000,
//     height: 233,

//     borderRadius: 27,
//   },
//   outerBox: {
//     shadowColor: "black",
//     shadowOffset: { width: -10, height: 10 },
//     shadowOpacity: 0.2,
//     shadowRadius: 60,
//     //  DropShadow : x={15} y={25}
//     //  blur:70,
//     opacity: 5,
//   },

//   card: {
//     width: 300,
//     height: 300,
//     borderBottomRightRadius: 0,
//     borderRadius: 15,
//     flexDirection: "Column",
//     position: "absolute",
//   },
//   cardH: {
//     width: 300,
//     height: 300,
//     marginTop: -107,
//     borderBottomRightRadius: 0,
//     borderRadius: 15,
//     flexDirection: "Column",
//     position: "absolute",
//   },
//   cardH1: {
//     width: 300,
//     height: 300,
//     marginTop: -107,
//     borderBottomRightRadius: 0,
//     borderBottomLeftRadius: 0,
//     borderRadius: 15,
//     flexDirection: "Column",
//     position: "absolute",
//   },
//   cardH2: {
//     width: 300,
//     height: 300,
//     marginTop: -107,

//     borderBottomLeftRadius: 0,
//     borderRadius: 15,
//     flexDirection: "Column",
//     position: "absolute",
//   },
//   card1: {
//     borderRadius: 22,
//     alignSelf: "center",
//     height: 180,
//     width: 810,

//     flexDirection: "column",
//   },
//   card3: {
//     width: 250,
//     height: 245,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     flexDirection: "Column",
//     position: "absolute",
//   },
//   card4: {
//     width: 250,
//     height: 245,
//     borderBottomLeftRadius: 0,
//     borderRadius: 15,
//     flexDirection: "Column",
//     position: "absolute",
//   },
//   video: {
//     flex: 1,
//     marginTop: 100,
//     justifyContent: "center",

//     height: 500,
//     width: 370,
//   },
// });

// // import React, { useEffect } from "react";
// // import {
// //   NativeBaseProvider,
// //   View,
// //   Text,
// //   Center,
// //   Image,
// //   Stack,
// //   Heading,
// //   HStack,
// //   VStack,
// //   Box,
// //   Pressable,
// //   Badge,
// // } from "native-base";
// // import Mobile from "./src/mobile";

// // const App = () => {
// //   return (
// //     <NativeBaseProvider>
// //       <Mobile />
// //     </NativeBaseProvider>
// //   );
// // };

// // export default App;

import React, { useEffect } from "react";
import {
  NativeBaseProvider,
  View,
  Text,
  Center,
  Image,
  Stack,
  Heading,
  HStack,
  VStack,
  Box,
  Pressable,
  Badge,
} from "native-base";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DropShadow from "react-native-drop-shadow";

const Screen = () => {
  return (
    <>
      <Box>
        <Image
          style={styles.backgroundImage}
          source={require("../assets/Background.png")}
          position="absolute"
        />

        <Heading
          color="#7D2BE9"
          position="absolute"
          alignSelf={"center"}
          opacity="100%"
          marginTop={150}
          fontFamily={"PoppinsSemiBold"}
          fontSize={36}
        >
          How ShadowProperties App Works
        </Heading>
        <Box //box outer
          ml={295}
          mt={330}
          backgroundColor="transparant"
          position="absolute"
          w={1010}
          h={240}
          style={styles.outerBox}
          borderWidth={3}
          borderColor={"white"}
          borderRadius={30}
          opacity={100}

          // shadow="1"
          // box-shadow="#00000040"
          // shadowOffset={20}
        >
          {/* <LinearGradient //box outer lg
            colors={["#e7dfee", "#f5f2eb"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            w={1010}
            h={240}
            opacity={0.2}
            style={styles.button1}
          > */}
          <Box mt={5} ml={5} w={958} h={193} borderRadius={15}>
            <LinearGradient //inner box lg
              colors={["#AD75F8", "#7D2BE9"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              w={958}
              h={193}
              style={styles.button}
            >
              <Pressable>
                {({ isHovered }) => {
                  return (
                    <View position={"absolute"}>
                      {isHovered ? (
                        <View style={{ width: 300, height: 400, bg: "black" }}>
                          <LinearGradient
                            colors={["#FFD777", "#FFBB15"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.cardH}
                          >
                            <Badge
                              colorScheme="black"
                              borderColor="#FFFFFF80"
                              borderWidth="3px"
                              borderRadius="10px"
                              width="60"
                              height="60"
                              bg="#F3B233"
                              mt={60}
                              ml={120}
                              alignItems="center"
                            >
                              <View ml={1.5}>
                                <AntDesign
                                  name="eyeo"
                                  size={26}
                                  color="#FFFFFF80"
                                />
                              </View>
                            </Badge>
                            <View mt={26}>
                              <Text
                                fontFamily=" HelveticaNeueLTStdBd"
                                fontSize={"18px"}
                                alignSelf="Center"
                                color={"#7B5800"}
                                justifyContent={"center"}
                              >
                                Accurate Driving
                              </Text>
                              <Text
                                mt={3}
                                alignSelf="Center"
                                fontSize={"16px"}
                                color={"#7B5800"}
                                fontFamily="HelveticaNeueLTStdMd"
                                justifyContent={"center"}
                              >
                                It has survived
                              </Text>
                              <Text
                                justifyContent={"center"}
                                alignSelf="Center"
                                fontSize={"16px"}
                                fontFamily="HelveticaNeueLTStdMd"
                                color={"#7B5800"}
                              >
                                not only five centuries
                              </Text>
                              <Text
                                mt={2}
                                justifyContent={"center"}
                                alignSelf="Center"
                                fontSize={"16px"}
                                fontFamily="HelveticaNeueLTStdBd"
                                color={"#7B5800"}
                              >
                                Learn More
                              </Text>
                            </View>
                          </LinearGradient>

                          <HStack mt={257} ml={-320} alignItems="center">
                            <Image
                              ml={265}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="2"
                            />
                            <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="2"
                            />
                            <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="2"
                            />
                          </HStack>
                        </View>
                      ) : (
                        <View
                          style={{ position: "absolute" }}
                          width="320"
                          height={200}
                        >
                          <Badge
                            colorScheme="black"
                            alignSelf="Center"
                            borderColor="#FFFFFF80"
                            borderWidth="3px"
                            borderRadius="10px"
                            size="10px"
                            bg="#8339FF"
                            mt={30}
                          >
                            <AntDesign
                              name="eyeo"
                              size={28}
                              color="#FFFFFF80"
                            />
                          </Badge>
                          <View mt={19}>
                            <Text
                              fontFamily=" HelveticaNeueLTStdMd"
                              fontSize={"18px"}
                              alignSelf="Center"
                              color={"#FFFFFF"}
                              justifyContent={"center"}
                            >
                              Accurate Driving
                            </Text>
                            <Text
                              alignSelf="Center"
                              fontSize={"18px"}
                              color={"#FFFFFF"}
                              fontFamily="HelveticaNeueLTStdMd"
                              justifyContent={"center"}
                            >
                              It has survived
                            </Text>
                            <Text
                              justifyContent={"center"}
                              alignSelf="Center"
                              fontSize={"18px"}
                              fontFamily="HelveticaNeueLTStdMd"
                              color={"#FFFFFF"}
                            >
                              not only five centuries
                            </Text>
                          </View>
                          <HStack ml={-320} mt={86} alignItems="center">
                            <Image
                              ml={265}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="2"
                            />
                            <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="2"
                            />
                            <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="2"
                            />
                          </HStack>
                        </View>
                      )}
                    </View>
                  );
                }}
              </Pressable>

              <Pressable>
                {({ isHovered }) => {
                  return (
                    <View position={"absolute"}>
                      {isHovered ? (
                        <View
                          style={{ position: "absolute" }}
                          width="320"
                          height={400}
                          ml={320}
                        >
                          <LinearGradient
                            colors={["#FFD777", "#FFBB15"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.cardH1}
                          >
                            <Badge
                              colorScheme="black"
                              borderColor="#FFFFFF80"
                              borderWidth="3px"
                              borderRadius="10px"
                              width="60"
                              height="60"
                              bg="#F3B233"
                              mt={60}
                              ml={120}
                              alignItems="center"
                            >
                              <View ml={1.5}>
                                <Ionicons
                                  name="md-search-outline"
                                  size={28}
                                  color="#FFFFFF80"
                                />
                              </View>
                            </Badge>
                            <View mt={26}>
                              <Text
                                fontFamily=" HelveticaNeueLTStdBd"
                                fontSize={"18px"}
                                alignSelf="Center"
                                color={"#7B5800"}
                                justifyContent={"center"}
                              >
                                Find Property Owners
                              </Text>
                              <Text
                                mt={3}
                                alignSelf="Center"
                                fontSize={"16px"}
                                color={"#7B5800"}
                                fontFamily="HelveticaNeueLTStdMd"
                                justifyContent={"center"}
                              >
                                & Emails/Phones
                              </Text>
                              <Text
                                justifyContent={"center"}
                                alignSelf="Center"
                                fontSize={"16px"}
                                fontFamily="HelveticaNeueLTStdMd"
                                color={"#7B5800"}
                              >
                                of the Owner
                              </Text>
                              <Text
                                mt={2}
                                justifyContent={"center"}
                                alignSelf="Center"
                                fontSize={"16px"}
                                fontFamily="HelveticaNeueLTStdBd"
                                color={"#7B5800"}
                              >
                                Learn More
                              </Text>
                            </View>
                          </LinearGradient>

                          <HStack mt={257} ml={-640} alignItems="center">
                            <Image
                              ml={265}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/addingpipeline.gif",
                              }}
                              shadow="2"
                            />
                            <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/addingpipeline.gif",
                              }}
                              shadow="2"
                            />
                            <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/addingpipeline.gif",
                              }}
                              shadow="2"
                            />
                          </HStack>
                        </View>
                      ) : (
                        <View
                          style={{ position: "absolute" }}
                          width="320"
                          height={200}
                          ml={320}
                        >
                          <Badge
                            colorScheme="black"
                            alignSelf="Center"
                            borderColor="#FFFFFF80"
                            borderWidth="3px"
                            borderRadius="10px"
                            size="10px"
                            bg="#8339FF"
                            mt={30}
                          >
                            <Ionicons
                              name="md-search-outline"
                              size={28}
                              color="#FFFFFF80"
                            />
                          </Badge>
                          <View mt={19}>
                            <Text
                              fontFamily=" HelveticaNeueLTStdMd"
                              fontSize={"18px"}
                              alignSelf="Center"
                              color={"#FFFFFF"}
                              justifyContent={"center"}
                            >
                              Find Property Owners
                            </Text>
                            <Text
                              alignSelf="Center"
                              fontSize={"18px"}
                              color={"#FFFFFF"}
                              fontFamily="HelveticaNeueLTStdMd"
                              justifyContent={"center"}
                            >
                              & Emails/Phones
                            </Text>
                            <Text
                              justifyContent={"center"}
                              alignSelf="Center"
                              fontSize={"18px"}
                              fontFamily="HelveticaNeueLTStdMd"
                              color={"#FFFFFF"}
                            >
                              of the Owner
                            </Text>
                          </View>
                        </View>
                      )}
                    </View>
                  );
                }}
              </Pressable>

              {/*

              <View
                style={{ position: "absolute" }}
                width="320"
                height={200}
                ml={320}
              >
                <Badge
                  colorScheme="black"
                  alignSelf="Center"
                  borderColor="#FFFFFF80"
                  borderWidth="3px"
                  borderRadius="10px"
                  size="10px"
                  mt={30}
                  bg="#8339FF"
                >
                  <Ionicons
                    name="md-search-outline"
                    size={28}
                    color="#FFFFFF80"
                  />
                </Badge>
                <View mt={19}>
                  <Text
                    justifyContent={"center"}
                    alignSelf="Center"
                    fontSize={"18px"}
                    color={"#FFFFFF"}
                    fontFamily="HelveticaNeueLTStdMd"
                  >
                    Find Property Owners
                  </Text>
                  <Text
                    justifyContent={"center"}
                    alignSelf="Center"
                    fontSize={"18px"}
                    fontFamily="HelveticaNeueLTStdMd"
                    color={"#FFFFFF"}
                  >
                    & Emails/Phones
                  </Text>
                  <Text
                    alignSelf="Center"
                    justifyContent={"center"}
                    fontSize={"18px"}
                    fontFamily="HelveticaNeueLTStdMd"
                    color={"#FFFFFF"}
                  >
                    of the Owner
                  </Text>
                </View>
              </View> */}

              <Pressable>
                {({ isHovered }) => {
                  return (
                    <View position={"absolute"}>
                      {isHovered ? (
                        <View
                          style={{ position: "absolute" }}
                          width="320"
                          height={400}
                          ml={660}
                        >
                          <LinearGradient
                            colors={["#FFD777", "#FFBB15"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.cardH2}
                          >
                            <Badge
                              colorScheme="black"
                              borderColor="#FFFFFF80"
                              borderWidth="3px"
                              borderRadius="10px"
                              width="60"
                              height="60"
                              bg="#F3B233"
                              mt={60}
                              ml={120}
                              alignItems="center"
                            >
                              <View ml={1.5}>
                                <AntDesign
                                  name="menufold"
                                  size={28}
                                  color="#FFFFFF80"
                                />
                              </View>
                            </Badge>
                            <View mt={26}>
                              <Text
                                fontFamily=" HelveticaNeueLTStdBd"
                                fontSize={"18px"}
                                alignSelf="Center"
                                color={"#7B5800"}
                                justifyContent={"center"}
                              >
                                Detailed Property
                              </Text>
                              <Text
                                mt={3}
                                alignSelf="Center"
                                fontSize={"16px"}
                                color={"#7B5800"}
                                fontFamily="HelveticaNeueLTStdMd"
                                justifyContent={"center"}
                              >
                                Listing & CRM
                              </Text>
                              <Text
                                justifyContent={"center"}
                                alignSelf="Center"
                                fontSize={"16px"}
                                fontFamily="HelveticaNeueLTStdMd"
                                color={"#7B5800"}
                              >
                                for Contacts
                              </Text>
                              <Text
                                mt={2}
                                justifyContent={"center"}
                                alignSelf="Center"
                                fontSize={"16px"}
                                fontFamily="HelveticaNeueLTStdBd"
                                color={"#7B5800"}
                              >
                                Learn More
                              </Text>
                            </View>
                          </LinearGradient>

                          <HStack mt={257} ml={-980} alignItems="center">
                            <Image
                              ml={265}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Movingcontact2.gif",
                              }}
                              shadow="2"
                            />
                            <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="2"
                            />
                            <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="2"
                            />
                          </HStack>
                        </View>
                      ) : (
                        <View
                          style={{ position: "absolute" }}
                          width="320"
                          height={200}
                          ml={640}
                        >
                          <Badge
                            colorScheme="black"
                            alignSelf="Center"
                            borderColor="#FFFFFF80"
                            borderWidth="3px"
                            borderRadius="10px"
                            size="10px"
                            bg="#8339FF"
                            mt={30}
                          >
                            <AntDesign
                              name="menufold"
                              size={28}
                              color="#FFFFFF80"
                            />
                          </Badge>
                          <View mt={19}>
                            <Text
                              fontFamily=" HelveticaNeueLTStdMd"
                              fontSize={"18px"}
                              alignSelf="Center"
                              color={"#FFFFFF"}
                              justifyContent={"center"}
                            >
                              Detailed Property
                            </Text>
                            <Text
                              alignSelf="Center"
                              fontSize={"18px"}
                              color={"#FFFFFF"}
                              fontFamily="HelveticaNeueLTStdMd"
                              justifyContent={"center"}
                            >
                              Listing & CRM
                            </Text>
                            <Text
                              justifyContent={"center"}
                              alignSelf="Center"
                              fontSize={"18px"}
                              fontFamily="HelveticaNeueLTStdMd"
                              color={"#FFFFFF"}
                            >
                              for Contacts
                            </Text>
                          </View>
                        </View>
                      )}
                    </View>
                  );
                }}
              </Pressable>

              {/*
              <View
                style={{ position: "absolute" }}
                width="320"
                height={200}
                ml={640}
              >
                <Badge
                  colorScheme="black"
                  alignSelf="Center"
                  borderColor="#FFFFFF80"
                  borderWidth="3px"
                  borderRadius="10px"
                  size="10px"
                  mt={30}
                  bg="#8339FF"
                >
                  <AntDesign name="menufold" size={28} color="#FFFFFF80" />
                </Badge>
                <View mt={19}>
                  <Text
                    justifyContent={"center"}
                    alignSelf="Center"
                    fontSize={"18px"}
                    color={"#FFFFFF"}
                    fontFamily="HelveticaNeueLTStdMd"
                  >
                    Detailed Property
                  </Text>
                  <Text
                    fontFamily="HelveticaNeueLTStdMd"
                    justifyContent={"center"}
                    alignSelf="Center"
                    fontSize={"18px"}
                    color={"#FFFFFF"}
                  >
                    Listing & CRM
                  </Text>
                  <Text
                    fontFamily="HelveticaNeueLTStdMd"
                    alignSelf="Center"
                    justifyContent={"center"}
                    fontSize={"18px"}
                    color={"#FFFFFF"}
                  >
                    for Contacts
                  </Text>
                </View>
              </View> */}
            </LinearGradient>
          </Box>
          {/* </LinearGradient> */}
        </Box>
        {/* <HStack position={"absolute"} mt={730}>
          <Image
            ml={265}
            style={{ width: 300, height: 651 }}
            source={{
              uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
            }}
            shadow="4"
          />
          <Image
            ml={75}
            style={{ width: 300, height: 651 }}
            source={{
              uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
            }}
            shadow="4"
          />
          <Image
            ml={75}
            style={{ width: 300, height: 651 }}
            source={{
              uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
            }}
            shadow="4"
          />
        </HStack> */}
      </Box>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 1450,
  },
  button: {
    width: 958,
    height: 193,

    borderRadius: 20,
  },
  button1: {
    width: 1000,
    height: 233,

    borderRadius: 27,
  },
  outerBox: {
    shadowColor: "black",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 60,
    //  DropShadow : x={15} y={25}
    //  blur:70,
    opacity: 5,
  },

  card: {
    width: 300,
    height: 300,
    borderBottomRightRadius: 0,
    borderRadius: 15,
    flexDirection: "Column",
    position: "absolute",
  },
  cardH: {
    width: 300,
    height: 300,
    marginTop: -107,
    borderBottomRightRadius: 0,
    borderRadius: 15,
    flexDirection: "Column",
    position: "absolute",
  },
  cardH1: {
    width: 300,
    height: 300,
    marginTop: -107,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 15,
    flexDirection: "Column",
    position: "absolute",
  },
  cardH2: {
    width: 300,
    height: 300,
    marginTop: -107,

    borderBottomLeftRadius: 0,
    borderRadius: 15,
    flexDirection: "Column",
    position: "absolute",
  },
  card1: {
    borderRadius: 22,
    alignSelf: "center",
    height: 180,
    width: 810,

    flexDirection: "column",
  },
  card3: {
    width: 250,
    height: 245,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "Column",
    position: "absolute",
  },
  card4: {
    width: 250,
    height: 245,
    borderBottomLeftRadius: 0,
    borderRadius: 15,
    flexDirection: "Column",
    position: "absolute",
  },
  video: {
    flex: 1,
    marginTop: 100,
    justifyContent: "center",

    height: 500,
    width: 370,
  },
});
