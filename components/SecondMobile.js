import * as React from "react";
import {
  Text,
  Center,
  Image,
  Stack,
  View,
  VStack,
  ScrollView,
  Hidden,
  Badge,
  Box,
  HStack,
  NativeBaseProvider,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import Carousel, { PaginationLight, Pagination } from "react-native-x-carousel";
import { useMediaQuery } from "native-base";

const DATA = [
  {
    coverImageUri: "https://cdn.shadow.properties/videos_spweb/Driving.gif",

    imageUri1: "https://cdn.shadow.properties/videos_spweb/Driving.gif",
  },
  {
    coverImageUri:
      "https://cdn.shadow.properties/videos_spweb/Adding-single-property.gif",
  },
  {
    coverImageUri: "https://cdn.shadow.properties/videos_spweb/bulk_add.gif",
  },
  {
    coverImageUri:
      "https://cdn.shadow.properties/videos_spweb/Adding-Pipeline.gif",
  },
  {
    coverImageUri:
      "https://cdn.shadow.properties/videos_spweb/Adding-Contacts.gif",
  },

  {
    coverImageUri:
      "https://cdn.shadow.properties/videos_spweb/Moving-Contact.gif",
  },

  {
    coverImageUri:
      "https://cdn.shadow.properties/videos_spweb/Property-Info.gif",
  },

  {
    coverImageUri:
      "https://cdn.shadow.properties/videos_spweb/Property%20Details.gif",
  },
  {
    coverImageUri:
      "https://cdn.shadow.properties/videos_spweb/Property-Campaign.gif",
  },
];

let platform = "web";
if (navigator.userAgent.includes("iPhone")) {
  platform = "ios";
} else if (navigator.userAgent.includes("Android")) {
  platform = "android";
}

const SecondStart = () => {
  const [isSmaller] = useMediaQuery({
    maxHeight: 512,
  });

  const [isLandScape, isPortrait] = useMediaQuery([
    {
      orientation: "landscape",
    },
    {
      orientation: "portrait",
    },
  ]);

  const renderItem = (data, data1) => (
    <NativeBaseProvider>
      <View
        backgroundColor="transparent"
        alignItems={"center"}
        flexDirection={"row"}
        w={vw(100)}
        // h={vh(80)}
        h={510}
        alignSelf={"center"}
        justifyContent={"center"}
      >
        <Box
          borderWidth="3"
          borderRadius={45}
          borderColor="white"
          alignItems="center"
          backgroundColor="transparent"
          alignSelf={"center"}
          style={styles.mobileBox}
        >
          <Image
            width={["225", "225", "500", ""]}
            height={["500", vh(92), vh(130), ""]}
            backgroundColor="transparent"
            borderRadius="35"
            source={{ uri: data.coverImageUri }}
          />
        </Box>
        {/* </Box> */}

        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
        </View>
      </View>
    </NativeBaseProvider>
  );

  const renderItemland = (data, data1) => (
    <NativeBaseProvider>
      <View
        backgroundColor="transparent"
        alignItems={"center"}
        flexDirection={"row"}
        w={vw(100)}
        h={vh(450)}
        // h={510}
        alignSelf={"center"}
        justifyContent={"center"}
      >
        <Box
          borderWidth="3"
          borderRadius={45}
          borderColor="white"
          alignItems="center"
          backgroundColor="transparent"
          alignSelf={"center"}
          style={styles.mobileBox}
        >
          <Image
            width={vw(40)}
            height={vh(400)}
            backgroundColor="transparent"
            borderRadius="35"
            source={{ uri: data.coverImageUri }}
          />
        </Box>

        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
        </View>
      </View>
    </NativeBaseProvider>
  );

  return (
    <>
      <Hidden from="800" to="1024">
        <Stack>
          {isSmaller ? (
            <View>
              <Image
                style={styles.backgroundImage1}
                source={require("../assets/featuresbg.png")}
                position="absolute"
              />
              <Center style={styles.center}>
                <Text style={styles.text}>How Shadow Properties</Text>
                <Text style={styles.text}>App Works</Text>
              </Center>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                nestedScrollEnable={false}
                horizontal={true}
                marginTop={vh(3)}
                style={{ width: vw(100), height: vh(80) }}
                alignContent={"center"}
              >
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Box //box outer
                    backgroundColor="transparant"
                    w={vw(40)}
                    h={vh(60)}
                    style={styles.outerBox}
                    borderWidth={3}
                    borderColor={"white"}
                    borderRadius={20}
                    opacity={100}
                    ml={vw(3)}
                    justifyContent="center"
                    alignSelf={"center"}
                  >
                    <Box borderRadius={10}>
                      <LinearGradient //inner box lg
                        colors={["#AD75F8", "#7D2BE9"]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.button1}
                      >
                        <VStack alignItems={"center"} margin="auto" space={"2"}>
                          <View>
                            <Badge
                              alignSelf="center"
                              borderColor="#FFFFFF80"
                              borderWidth="3"
                              borderRadius="8"
                              bg="#8339FF"
                              margin="auto"
                              justifyContent="center"
                              style={{ width: vw(6), height: vh(12) }}
                            >
                              <Ionicons
                                name="md-search-outline"
                                size={24}
                                margin="auto"
                                color="gold"
                              />
                            </Badge>
                          </View>
                          <View marginTop={vh(1)}>
                            <Text
                              fontSize={vh(3)}
                              alignSelf={"center"}
                              fontFamily="HelveticaNeueLTStdMd"
                              color={"#FFFFFF"}
                            >
                              Find Property Owners
                            </Text>

                            <Text
                              fontSize={vh(3)}
                              fontFamily="HelveticaNeueLTStdMd"
                              alignSelf={"center"}
                              color={"#FFFFFF"}
                              mb="2"
                            >
                              & Emails/Phones of the Owner
                            </Text>
                          </View>
                        </VStack>
                      </LinearGradient>
                    </Box>
                  </Box>

                  <Box //box outer
                    backgroundColor="transparant"
                    w={vw(40)}
                    h={vh(60)}
                    // w={vw(30)}
                    // h={vh(48)}
                    style={styles.outerBox}
                    borderWidth={3}
                    borderColor={"white"}
                    borderRadius={20}
                    opacity={100}
                    ml={vw(3)}
                    //   ml={vw(8)}
                    justifyContent="center"
                    alignSelf={"center"}
                  >
                    <Box borderRadius={10}>
                      <LinearGradient //inner box lg
                        colors={["#AD75F8", "#7D2BE9"]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.button1}
                      >
                        <VStack alignItems={"center"} margin="auto" space={"2"}>
                          <View>
                            <Badge
                              alignSelf="center"
                              borderColor="#FFFFFF80"
                              borderWidth="3"
                              borderRadius="8"
                              bg="#8339FF"
                              margin="auto"
                              justifyContent="center"
                              style={{ width: vw(6), height: vh(12) }}
                            >
                              <AntDesign
                                name="menufold"
                                size={22}
                                margin="auto"
                                color="gold"
                              />
                            </Badge>
                          </View>
                          <View marginTop={vh(1)}>
                            <Text
                              fontSize={vh(3)}
                              alignSelf={"center"}
                              fontFamily="HelveticaNeueLTStdMd"
                              color={"#FFFFFF"}
                            >
                              Detailed Property
                            </Text>

                            <Text
                              fontSize={vh(3)}
                              fontFamily="HelveticaNeueLTStdMd"
                              alignSelf={"center"}
                              color={"#FFFFFF"}
                              mb="2"
                            >
                              Listing & CRM for Contacts
                            </Text>
                          </View>
                        </VStack>
                      </LinearGradient>
                    </Box>
                  </Box>

                  <Box //box outer
                    backgroundColor="transparant"
                    w={vw(40)}
                    h={vh(60)}
                    style={styles.outerBox}
                    borderWidth={3}
                    borderColor={"white"}
                    borderRadius={20}
                    opacity={100}
                    ml={vw(3)}
                    justifyContent="center"
                    alignSelf={"center"}
                  >
                    <Box borderRadius={10}>
                      <LinearGradient //inner box lg
                        colors={["#AD75F8", "#7D2BE9"]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.button1}
                      >
                        <VStack alignItems={"center"} margin="auto" space={"2"}>
                          <View>
                            <Badge
                              alignSelf="center"
                              borderColor="#FFFFFF80"
                              borderWidth="3"
                              borderRadius="8"
                              bg="#8339FF"
                              margin="auto"
                              justifyContent="center"
                              style={{ width: vw(6), height: vh(12) }}
                            >
                              <AntDesign
                                name="eyeo"
                                size={22}
                                margin="auto"
                                color="gold"
                              />
                            </Badge>
                          </View>
                          <View marginTop={vh(1)}>
                            <Text
                              fontSize={vh(3)}
                              alignSelf={"center"}
                              fontFamily="HelveticaNeueLTStdMd"
                              color={"#FFFFFF"}
                            >
                              Accurate Driving
                            </Text>

                            <Text
                              fontSize={vh(3)}
                              fontFamily="HelveticaNeueLTStdMd"
                              alignSelf={"center"}
                              color={"#FFFFFF"}
                              mb="2"
                            >
                              It has survived not only five centuries
                            </Text>
                          </View>
                        </VStack>
                      </LinearGradient>
                    </Box>
                  </Box>
                </View>
              </ScrollView>

              <Box
                alignSelf={"center"}
                backgroundColor="transparent"
                marginTop={vh(-25)}
              >
                <Carousel
                  pagination={(p) => {
                    console.log(p);

                    return (
                      <View>
                        <HStack alignSelf="center">
                          {[...Array(p.total).keys()].map((x) =>
                            p.currentPage === x + 1 ? (
                              <Center style={styles.circleview}>
                                <Text style={styles.pagtext1}></Text>
                              </Center>
                            ) : (
                              <Center style={styles.circleview1}>
                                <Text style={styles.pagdottext1}>
                                  {" "}
                                  {"\u2022"}{" "}
                                </Text>
                              </Center>
                            )
                          )}
                        </HStack>
                      </View>
                    );
                  }}
                  renderItem={renderItemland}
                  data={DATA}
                  loop
                  autoplay
                  autoplayInterval={2500}
                />
              </Box>
            </View>
          ) : (
            <View>
              <Image
                //   style={styles.backgroundImage}
                width={vw(100)}
                height={[vh(100), vh(170), vh(150), ""]}
                source={require("../assets/featuresbg.png")}
                position="absolute"
              />
              <Center style={styles.center}>
                <Text style={styles.text1}>How Shadow Properties</Text>
                <Text style={styles.text1}>App Works</Text>
              </Center>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                nestedScrollEnable={false}
                horizontal={true}
                height={[vh(30), vh(30), vh(65), vh(30)]}
                style={{ width: vw(100) }}
                alignContent={"center"}
              >
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Box //box outer
                    backgroundColor="transparant"
                    width={[vw(66), vw(45), vw(70), ""]}
                    height={[vh(20), vh(30), vh(30), ""]}
                    style={styles.outerBox}
                    borderWidth={3}
                    borderColor={"white"}
                    borderRadius={20}
                    opacity={100}
                    ml={vw(8)}
                    justifyContent="center"
                    alignSelf="center"
                  >
                    <Box
                      borderRadius={10}
                      width={[vw(60), vw(40), vw(63), ""]}
                      height={[vh(17), vh(25), vh(25), ""]}
                    >
                      <LinearGradient //inner box lg
                        colors={["#AD75F8", "#7D2BE9"]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.button}
                      >
                        <VStack
                          height={[vh(17), vh(25), vh(25), 17]}
                          width={[vw(60), vh(55), vh(45), 17]}
                        >
                          <View margin={[vh(2), vh(3), vh(4), 0]}>
                            <Badge
                              alignSelf="center"
                              borderColor="#FFFFFF80"
                              borderWidth="3"
                              borderRadius="8"
                              bg="#8339FF"
                              margin="auto"
                              justifyContent="center"
                              height={[vh(6.5), vh(6.5), vh(6.5), vh(6.5)]}
                              width={[vw(12), vw(12), vw(15), vw(12)]}
                            >
                              <Ionicons
                                name="md-search-outline"
                                size={24}
                                margin="auto"
                                color="gold"
                              />
                            </Badge>
                          </View>
                          <View>
                            <Text
                              fontSize={["12", "12", "25", ""]}
                              alignSelf={"center"}
                              fontFamily="HelveticaNeueLTStdMd"
                              color={"#FFFFFF"}
                            >
                              Find Property Owners
                            </Text>

                            <Text
                              fontSize={["12", "12", "25", ""]}
                              fontFamily="HelveticaNeueLTStdMd"
                              alignSelf={"center"}
                              color={"#FFFFFF"}
                              //  mb="2"
                            >
                              & Emails/Phones of the Owner
                            </Text>
                          </View>
                        </VStack>
                      </LinearGradient>
                    </Box>
                  </Box>

                  <Box //box outer
                    backgroundColor="transparant"
                    width={[vw(66), vw(45), vw(70), ""]}
                    height={[vh(20), vh(30), vh(30), ""]}
                    style={styles.outerBox}
                    borderWidth={3}
                    borderColor={"white"}
                    borderRadius={20}
                    opacity={100}
                    ml={vw(8)}
                    justifyContent="center"
                    alignSelf={"center"}
                  >
                    <LinearGradient //inner box lg
                      colors={["#AD75F8", "#7D2BE9"]}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      style={styles.button}
                    >
                      <VStack
                        height={[vh(17), vh(25), vh(25), 17]}
                        width={[vw(60), vh(55), vh(45), 17]}
                      >
                        <View margin={[vh(2), vh(3), vh(4), 0]}>
                          <Badge
                            alignSelf="center"
                            borderColor="#FFFFFF80"
                            borderWidth="3"
                            borderRadius="8"
                            bg="#8339FF"
                            margin="auto"
                            justifyContent="center"
                            height={[vh(6.5), vh(6.5), vh(6.5), vh(6.5)]}
                            width={[vw(12), vw(12), vw(15), vw(12)]}
                          >
                            <AntDesign
                              name="menufold"
                              size={22}
                              margin="auto"
                              color="gold"
                            />
                          </Badge>
                        </View>
                        <View>
                          <Text
                            fontSize={["12", "12", "25", ""]}
                            alignSelf={"center"}
                            fontFamily="HelveticaNeueLTStdMd"
                            color={"#FFFFFF"}
                          >
                            Detailed Property
                          </Text>

                          <Text
                            fontSize={["12", "12", "25", ""]}
                            fontFamily="HelveticaNeueLTStdMd"
                            alignSelf={"center"}
                            color={"#FFFFFF"}
                          >
                            Listing & CRM for Contacts
                          </Text>
                        </View>
                      </VStack>
                    </LinearGradient>
                  </Box>

                  <Box //box outer
                    backgroundColor="transparant"
                    width={[vw(66), vw(45), vw(70), ""]}
                    height={[vh(20), vh(30), vh(30), ""]}
                    style={styles.outerBox}
                    borderWidth={3}
                    borderColor={"white"}
                    borderRadius={20}
                    opacity={100}
                    ml={vw(8)}
                    justifyContent="center"
                    alignSelf={"center"}
                  >
                    <LinearGradient //inner box lg
                      colors={["#AD75F8", "#7D2BE9"]}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      style={styles.button}
                    >
                      <VStack
                        height={[vh(17), vh(25), vh(25), 17]}
                        width={[vw(60), vh(55), vh(45), 17]}
                      >
                        <View margin={[vh(2), vh(3), vh(4), 0]}>
                          <Badge
                            alignSelf="center"
                            borderColor="#FFFFFF80"
                            borderWidth="3"
                            borderRadius="8"
                            bg="#8339FF"
                            margin="auto"
                            justifyContent="center"
                            height={[vh(6.5), vh(6.5), vh(6.5), vh(6.5)]}
                            width={[vw(12), vw(12), vw(15), vw(12)]}
                          >
                            <Ionicons
                              name="md-search-outline"
                              size={24}
                              margin="auto"
                              color="gold"
                            />
                          </Badge>
                        </View>
                        <View>
                          <Text
                            fontSize={["12", "12", "25", ""]}
                            alignSelf={"center"}
                            fontFamily="HelveticaNeueLTStdMd"
                            color={"#FFFFFF"}
                          >
                            Find Property Owners
                          </Text>

                          <Text
                            fontSize={["12", "12", "25", ""]}
                            fontFamily="HelveticaNeueLTStdMd"
                            alignSelf={"center"}
                            color={"#FFFFFF"}
                            //  mb="2"
                          >
                            & Emails/Phones of the Owner
                          </Text>
                        </View>
                      </VStack>
                    </LinearGradient>
                  </Box>
                </View>
              </ScrollView>

              <Box
                alignSelf={"center"}
                backgroundColor="transparent"
                marginTop={["", vh(10), "", ""]}
              >
                <Carousel
                  pagination={(p) => {
                    console.log(p);

                    return (
                      <View>
                        <HStack alignSelf="center">
                          {[...Array(p.total).keys()].map((x) =>
                            p.currentPage === x + 1 ? (
                              <Center style={styles.circleview}>
                                <Text style={styles.pagtext}></Text>
                              </Center>
                            ) : (
                              <Center style={styles.circleview1}>
                                <Text style={styles.pagdottext}>
                                  {" "}
                                  {"\u2022"}{" "}
                                </Text>
                              </Center>
                            )
                          )}
                        </HStack>
                      </View>
                    );
                  }}
                  renderItem={renderItem}
                  data={DATA}
                  loop
                  autoplay
                  autoplayInterval={2500}
                />
              </Box>
            </View>
          )}
        </Stack>
      </Hidden>
    </>
  );
};
export default SecondStart;

const styles = StyleSheet.create({
  backgroundImage: {
    // width: vw(100),
    // height: {[vh(100),vh(150),vh(100),""]}
    // height={["500", vh(92), "100", ""]}
  },
  backgroundImage1: {
    width: vw(100),
    height: vh(600),
  },
  center: {
    marginTop: vh(3),
  },
  text: {
    fontSize: vw(4),
    color: "#7D2BE9",
    fontFamily: " PoppinsSemiBold",
  },
  text1: {
    fontSize: vh(3.5),
    color: "#7D2BE9",
    fontFamily: " PoppinsSemiBold",
  },
  outerBox: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    opacity: 1,
    alignItems: "center",
  },
  button: {
    // width: vw(60),
    //height: [vh(17), vh(100), vh(17), vh(17)],
    borderRadius: 10,
  },
  button1: {
    width: vw(37),
    height: vh(52),
    // width: vw(25),
    // height: vh(40),
    borderRadius: 10,
  },
  card: {
    width: 225,
    height: 500,
    backgroundColor: "transparent",
    borderRadius: 35,
  },
  mobileBox: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    margin: 2,
    opacity: 5,
    paddingHorizontal: 5,

    w: vw(90),
    h: vh(72),
  },
  Video: {
    position: "absolute",
    marginTop: vh(40),
  },
  circleview: {
    alignItems: "center",
    alignSelf: "center",
    paddingTop: vh(1),
  },
  circleview1: {
    alignItems: "center",
    alignSelf: "center",
  },
  pagtext: {
    borderRadius: 13 / 2,
    borderWidth: 2,
    width: 12,
    height: 12,
    alignSelf: "center",
    alignItems: "center",
    borderColor: "#7D2BE9",
    opacity: "100%",
    // marginHorizontal: vw(5),
    marginTop: platform === "android" ? "-10px" : "-1px",

    color: "#7D2BE9",
  },
  pagdottext: {
    fontSize: 46,
    color: "#7D2BE9",
    opacity: "30%",
    borderWidth: "full",
    marginHorizontal: vw(-2),
  },
  pagtext1: {
    borderRadius: 13 / 2,
    borderWidth: 2,
    width: 12,
    height: 12,
    alignSelf: "center",
    alignItems: "center",
    borderColor: "#7D2BE9",
    opacity: "100%",
    marginHorizontal: vw(1),
    marginTop: platform === "android" ? "-10px" : "-1px",

    color: "#7D2BE9",
  },
  pagdottext1: {
    fontSize: 46,
    color: "#7D2BE9",
    opacity: "30%",
    borderWidth: "full",
    marginHorizontal: -3,
  },
});

// import * as React from "react";
// import {
//   Text,
//   HStack,
//   Center,
//   Heading,
//   NativeBaseProvider,
//   VStack,
//   Box,
//   Button,
//   Image,
//   AspectRatio,
//   Pressable,
//   IconButton,
//   Card,
//   Icon,
//   Input,
//   Divider,
//   Flex,
//   Stack,
//   ScrollView,
//   Menu,
//   HamburgerIcon,
//   View,
//   Badge,
//   Avatar,
//   Shadow,
//   Hidden,
//   Link,
//   Header,
// } from "native-base";
// import { AntDesign } from "@expo/vector-icons";
// import { StyleSheet } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
// import Carousel from "react-native-x-carousel";

// const DATA = [
//   {
//     coverImageUri: "https://cdn.shadow.properties/videos_spweb/Driving.gif",

//     imageUri1: "https://cdn.shadow.properties/videos_spweb/Driving.gif",
//   },
//   {
//     coverImageUri:
//       "https://cdn.shadow.properties/videos_spweb/Adding-single-property.gif",
//   },
//   {
//     coverImageUri: "https://cdn.shadow.properties/videos_spweb/bulk_add.gif",
//   },
//   {
//     coverImageUri:
//       "https://cdn.shadow.properties/videos_spweb/Adding-Pipeline.gif",
//   },
//   {
//     coverImageUri:
//       "https://cdn.shadow.properties/videos_spweb/Adding-Contacts.gif",
//   },

//   {
//     coverImageUri:
//       "https://cdn.shadow.properties/videos_spweb/Moving-Contact.gif",
//   },

//   {
//     coverImageUri:
//       "https://cdn.shadow.properties/videos_spweb/Property-Info.gif",
//   },

//   {
//     coverImageUri:
//       "https://cdn.shadow.properties/videos_spweb/Property%20Details.gif",
//   },
//   {
//     coverImageUri:
//       "https://cdn.shadow.properties/videos_spweb/Property-Campaign.gif",
//   },
// ];

// let platform = "web";
// if (navigator.userAgent.includes("iPhone")) {
//   platform = "ios";
// } else if (navigator.userAgent.includes("Android")) {
//   platform = "android";
// }

// const SecondMbl1 = () => {
//   const renderItem = (data, data1) => (
//     <View
//       backgroundColor="transparent"
//       alignItems={"center"}
//       flexDirection={"row"}
//       w={vw(100)}
//       // h={vh(80)}
//       h={510}
//       alignSelf={"center"}
//       justifyContent={"center"}
//     >
//       <Box
//         borderWidth="3"
//         borderRadius={45}
//         borderColor="white"
//         alignItems="center"
//         backgroundColor="transparent"
//         alignSelf={"center"}
//         style={styles.mobileBox}
//       >
//         <Image style={styles.card} source={{ uri: data.coverImageUri }} />
//       </Box>
//       {/* </Box> */}

//       <View
//         style={[styles.cornerLabel, { backgroundColor: data.cornerLabelColor }]}
//       >
//         <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <>
//       <Hidden from="800" to="1024">
//         <View safeAreaTop>
//           <Image
//             // style={styles.backgroundImage}
//             width={vw(100)}
//             style={{ height: platform === "android" ? vh(120) : vh(145) }}
//             source={require("../assets/featuresbg.png")}
//           />
//           <Box style={styles.heading}>
//             <Text style={styles.fount}>How Shadow Properties</Text>
//             <Text style={styles.fount}>App Works</Text>
//           </Box>

//           <ScrollView
//             showsHorizontalScrollIndicator={false}
//             nestedScrollEnable={false}
//             horizontal={true}
//             marginTop={vh(15)}
//             style={{ width: vw(100), height: vh(30) }}
//             position="absolute"
//             alignContent={"center"}
//           >
//             <View
//               style={{
//                 top: "2vh",
//                 alignItems: "center",
//                 flexDirection: "row",
//                 position: "absolute",
//                 justifyContent: "center",
//                 alignContent: "center",
//               }}
//             >
//               <Box //box outer
//                 backgroundColor="transparant"
//                 w={vw(66)}
//                 h={vh(20)}
//                 style={styles.outerBox}
//                 borderWidth={3}
//                 borderColor={"white"}
//                 borderRadius={20}
//                 opacity={100}
//                 ml={vw(8)}
//                 justifyContent="center"
//                 alignSelf={"center"}
//               >
//                 <Box borderRadius={10}>
//                   <LinearGradient //inner box lg
//                     colors={["#AD75F8", "#7D2BE9"]}
//                     start={{ x: 0, y: 0.5 }}
//                     end={{ x: 1, y: 0.5 }}
//                     w={vw(66)}
//                     h={vh(18)}
//                     style={styles.button}
//                   >
//                     <VStack alignItems={"center"} margin="auto" space={"2"}>
//                       <View>
//                         <Badge
//                           alignSelf="center"
//                           borderColor="#FFFFFF80"
//                           borderWidth="3"
//                           borderRadius="8"
//                           bg="#8339FF"
//                           margin="auto"
//                           justifyContent="center"
//                           style={{ width: vw(12), height: vh(6.5) }}
//                         >
//                           <Ionicons
//                             name="md-search-outline"
//                             size={24}
//                             margin="auto"
//                             color="gold"
//                           />
//                         </Badge>
//                       </View>
//                       <View>
//                         <Text
//                           fontSize="12"
//                           alignSelf={"center"}
//                           fontFamily="HelveticaNeueLTStdMd"
//                           color={"#FFFFFF"}
//                         >
//                           Find Property Owners
//                         </Text>

//                         <Text
//                           fontSize="12"
//                           fontFamily="HelveticaNeueLTStdMd"
//                           alignSelf={"center"}
//                           color={"#FFFFFF"}
//                           mb="2"
//                         >
//                           & Emails/Phones of the Owner
//                         </Text>
//                       </View>
//                     </VStack>
//                   </LinearGradient>
//                 </Box>
//               </Box>

//               <Box //box outer
//                 backgroundColor="transparant"
//                 w={vw(66)}
//                 h={vh(20)}
//                 style={styles.outerBox}
//                 borderWidth={3}
//                 borderColor={"white"}
//                 borderRadius={20}
//                 opacity={100}
//                 ml={vw(8)}
//                 justifyContent="center"
//                 alignSelf={"center"}
//               >
//                 <Box borderRadius={10}>
//                   <LinearGradient //inner box lg
//                     colors={["#AD75F8", "#7D2BE9"]}
//                     start={{ x: 0, y: 0.5 }}
//                     end={{ x: 1, y: 0.5 }}
//                     w={vw(66)}
//                     h={vh(18)}
//                     style={styles.button}
//                   >
//                     <VStack alignItems={"center"} margin="auto" space={"2"}>
//                       <View>
//                         <Badge
//                           alignSelf="center"
//                           borderColor="#FFFFFF80"
//                           borderWidth="3"
//                           borderRadius="8"
//                           bg="#8339FF"
//                           margin="auto"
//                           justifyContent="center"
//                           // width={['12', '50', '', '']}
//                           style={{ width: vw(12), height: vh(6) }}
//                         >
//                           <AntDesign
//                             name="menufold"
//                             size={22}
//                             margin="auto"
//                             color="gold"
//                           />
//                         </Badge>
//                       </View>
//                       <View>
//                         <Text
//                           fontSize="12"
//                           alignSelf={"center"}
//                           fontFamily="HelveticaNeueLTStdMd"
//                           color={"#FFFFFF"}
//                         >
//                           Detailed Property
//                         </Text>

//                         <Text
//                           fontSize="12"
//                           fontFamily="HelveticaNeueLTStdMd"
//                           alignSelf={"center"}
//                           color={"#FFFFFF"}
//                           mb="2"
//                         >
//                           Listing & CRM for Contacts
//                         </Text>
//                       </View>
//                     </VStack>
//                   </LinearGradient>
//                 </Box>
//               </Box>

//               <Box //box outer
//                 backgroundColor="transparant"
//                 w={vw(66)}
//                 h={vh(20)}
//                 style={styles.outerBox}
//                 borderWidth={3}
//                 borderColor={"white"}
//                 borderRadius={20}
//                 opacity={100}
//                 ml={vw(8)}
//                 justifyContent="center"
//                 alignSelf={"center"}
//               >
//                 <Box borderRadius={10}>
//                   <LinearGradient //inner box lg
//                     colors={["#AD75F8", "#7D2BE9"]}
//                     start={{ x: 0, y: 0.5 }}
//                     end={{ x: 1, y: 0.5 }}
//                     w={vw(66)}
//                     h={vh(18)}
//                     style={styles.button}
//                   >
//                     <VStack alignItems={"center"} margin="auto" space={"2"}>
//                       <View>
//                         <Badge
//                           alignSelf="center"
//                           borderColor="#FFFFFF80"
//                           borderWidth="3"
//                           borderRadius="8"
//                           bg="#8339FF"
//                           margin="auto"
//                           justifyContent="center"
//                           // width={['12', '50', '', '']}
//                           style={{ width: vw(12), height: vh(6) }}
//                         >
//                           <AntDesign
//                             name="eyeo"
//                             size={22}
//                             margin="auto"
//                             color="gold"
//                           />
//                         </Badge>
//                       </View>
//                       <View>
//                         <Text
//                           fontSize="12"
//                           alignSelf={"center"}
//                           fontFamily="HelveticaNeueLTStdMd"
//                           color={"#FFFFFF"}
//                         >
//                           Accurate Driving
//                         </Text>

//                         <Text
//                           fontSize="12"
//                           fontFamily="HelveticaNeueLTStdMd"
//                           alignSelf={"center"}
//                           color={"#FFFFFF"}
//                           mb="2"
//                         >
//                           It has survived not only five centuries
//                         </Text>
//                       </View>
//                     </VStack>
//                   </LinearGradient>
//                 </Box>
//               </Box>
//             </View>
//           </ScrollView>

//           <Box
//             position={"absolute"}
//             mt={vh(40)}
//             alignSelf={"center"}
//             backgroundColor="transparent"
//           >
//             <Carousel
//               pagination={(p) => {
//                 console.log(p);

//                 return (
//                   <View>
//                     <HStack position={"absolute"} alignSelf="center">
//                       {[...Array(p.total).keys()].map((x) =>
//                         p.currentPage === x + 1 ? (
//                           <Center style={styles.circleview}>
//                             <Text style={styles.pagtext}></Text>
//                           </Center>
//                         ) : (
//                           <Center style={styles.circleview1}>
//                             <Text style={styles.pagdottext}> {"\u2022"} </Text>
//                           </Center>
//                         )
//                       )}
//                     </HStack>
//                   </View>
//                 );
//               }}
//               renderItem={renderItem}
//               data={DATA}
//               loop
//               autoplay
//               autoplayInterval={2500}
//             />
//           </Box>
//         </View>
//       </Hidden>
//     </>
//   );
// };
// export default SecondMbl1;

// const styles = StyleSheet.create({
//   backgroundImage: {
//     width: vw(100),
//     // height: vh(130),
//   },
//   heading: {
//     alignItems: "center",
//     marginTop: vh(3),
//     marginLeft: vw(8),
//     marginRight: vw(8),
//     position: "absolute",
//   },
//   fount: {
//     fontSize: vw(7),
//     color: "#7D2BE9",
//     fontFamily: " PoppinsSemiBold",
//   },

//   button: {
//     width: vw(60),
//     height: vh(17),
//     borderRadius: 10,
//   },

//   outerBox: {
//     shadowColor: "black",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     opacity: 1,
//     alignItems: "center",
//   },
//   mobileBox1: {
//     shadowColor: "black",
//     shadowOffset: { width: -10, height: 10 },
//     shadowOpacity: 0.01,
//     shadowRadius: 60,
//     opacity: 5,
//     width: 320,
//     height: 420,
//   },
//   card: {
//     width: 225,
//     height: 500,
//     backgroundColor: "transparent",
//     borderRadius: 35,
//   },
//   mobileBox: {
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     margin: 2,
//     opacity: 5,
//     paddingHorizontal: 5,

//     w: vw(80),
//     h: vh(72),
//   },
//   Video: {
//     position: "absolute",
//     marginTop: vh(40),
//   },
//   circleview: {
//     alignItems: "center",
//     alignSelf: "center",
//     // position: "absolute",

//     paddingTop: vh(1),
//   },
//   circleview1: {
//     // position: "absolute",
//     alignItems: "center",
//     alignSelf: "center",
//   },
//   // pagtext: {
//   //   borderRadius: 13 / 2,
//   //   borderWidth: 2,
//   //   width: 12,
//   //   height: 12,
//   //   alignSelf: "center",
//   //   alignItems: "center",
//   //   borderColor: "#7D2BE9",
//   //   opacity: "100%",
//   //   // marginHorizontal: vw(5),
//   //   marginTop: platform === "android" ? "-10px" : "-1px",

//   //   color: "#7D2BE9",
//   // },
//   // pagdottext: {
//   //   fontSize: 46,
//   //   color: "#7D2BE9",
//   //   // position: "absolute",
//   //   opacity: "30%",
//   //   borderWidth: "full",
//   //   marginHorizontal: vw(-2),
//   // },

//   pagtext: {
//     borderRadius: vw(2),
//     borderWidth: vw(0.4),
//     // width: 12,
//     // height: 12,
//     width: vw(2),
//     height: vw(2),
//     borderColor: "#7D2BE9",
//     opacity: "100%",
//     marginHorizontal: vw(1.2), // this is for1the space between circle and dots
//     marginTop: platform === "android" ? vh(-1.5) : vh(-0.6),
//     color: "#7D2BE9",
//   },
//   pagdottext: {
//     fontSize: vw(8),
//     color: "#7D2BE9",
//     opacity: "30%",
//     borderWidth: "full",
//     marginHorizontal: vw(-1.5), // this is for space between dots
//   },
// });
