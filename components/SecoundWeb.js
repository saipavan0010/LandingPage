import React, { useEffect, forwardRef } from "react";
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
  Hidden,
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DropShadow from "react-native-drop-shadow";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const SecoundWeb = React.forwardRef((props, ref) => {
  const { height, width } = Dimensions.get("window");

  return (
    <>
      <Hidden only={["base", "sm", "md"]}>
        <Box ref={ref}>
          <Image
            style={styles.backgroundImage}
            source={require("../assets/Background.png")}
            position="absolute"
          />
          <Box
            position="absolute"
            alignSelf={"center"}
            opacity="100%"
            marginTop={vh(115)}
          >
            <Heading
              color="#7D2BE9"
              fontFamily={"PoppinsSemiBold"}
              fontSize={vh(5)}
            >
              How ShadowProperties App Works
            </Heading>
          </Box>
          <Center backgroundColor="transparant">
            <Box //box outer
              mt={vh(140)}
              backgroundColor="transparant"
              w={1010}
              h={240}
              style={styles.outerBox}
              borderWidth={4}
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
              <Box
                mt={5}
                ml={5}
                w={958}
                h={193}
                borderRadius={15}
                backgroundColor="transparant"
              >
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
                            <View
                              style={{ width: 300, height: 400, bg: "black" }}
                            >
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

                              <HStack
                                mt={300}
                                ml={-320}
                                alignItems="center"
                                backgroundColor="transparant"
                              >
                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={275}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Driving.gif",
                                    }}
                                  />
                                </Box>
                                {/* <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="4"
                            /> */}

                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={75}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Adding-single-property.gif",
                                    }}
                                  />
                                </Box>

                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={75}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/bulk_add.gif",
                                    }}
                                  />
                                </Box>

                                {/* <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="4"
                            /> */}
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
                                  color="#ffe095"
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
                              <HStack ml={-320} mt={129.5} alignItems="center">
                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={275}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603.5 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Driving.gif",
                                    }}
                                  />
                                </Box>
                                {/* <Image
                              ml={75}
                              style={{ width: 300, height: 651 }}
                              source={{
                                uri: "https://cdn.shadow.properties/videos_spweb/Drivinggif.gif",
                              }}
                              shadow="4"
                            /> */}

                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={75}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603.5 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Adding-single-property.gif",
                                    }}
                                  />
                                </Box>

                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={75}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603.5 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/bulk_add.gif",
                                    }}
                                  />
                                </Box>
                              </HStack>
                            </View>
                          )}
                        </View>
                      );
                    }}
                  </Pressable>

                  {/* Box2
                   */}

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
                                      color="#ffe095"
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
                              {/* <HStack mt={300} ml={-320} alignItems="center"> */}
                              <HStack
                                mt={300}
                                ml={-640}
                                alignItems="center"
                                backgroundColor="transparent"
                              >
                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={275}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox1}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    backgroundColor="transparent"
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Adding-piplineAdd.gif",
                                    }}
                                  />
                                </Box>

                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={75}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox1}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Adding-Contacts.gif",
                                    }}
                                  />
                                </Box>

                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={75}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox1}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Moving-Contact.gif",
                                    }}
                                  />
                                </Box>
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
                                  color="#ffe095"
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

                              <HStack mt={300} ml={-705} alignItems="center">
                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  backgroundColor="transparent"
                                  style={styles.mobileBox1}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Property-Info.gif",
                                    }}
                                  />
                                </Box>

                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={75}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox1}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Property%20Details.gif",
                                    }}
                                  />
                                </Box>

                                <Box
                                  borderWidth="3"
                                  borderRadius={45}
                                  borderColor="white"
                                  alignItems="center"
                                  ml={75}
                                  backgroundColor="transparent"
                                  style={styles.mobileBox1}
                                >
                                  <Image
                                    alignSelf={"center"}
                                    style={{ width: 293, height: 603 }}
                                    source={{
                                      uri: "https://cdn.shadow.properties/videos_spweb/Property-Campaign.gif",
                                    }}
                                  />
                                </Box>
                              </HStack>

                              {/* <HStack mt={257} ml={-980} alignItems="center">
                            <Box
                              borderWidth="3"
                              borderRadius={45}
                              borderColor="white"
                              alignItems="center"
                              backgroundColor="transparent"
                              style={styles.mobileBox}
                            >
                              <Image
                                alignSelf={"center"}
                                style={{ width: 293, height: 603 }}
                                source={{
                                  uri: "https://cdn.shadow.properties/videos_spweb/Property_new.gif",
                                }}
                              />
                            </Box>
                            <Box
                              borderWidth="3"
                              borderRadius={45}
                              borderColor="white"
                              alignItems="center"
                              ml={75}
                              backgroundColor="transparent"
                              style={styles.mobileBox}
                            >
                              <Image
                                alignSelf={"center"}
                                style={{ width: 293, height: 603 }}
                                source={{
                                  uri: "https://cdn.shadow.properties/videos_spweb/Property_new.gif",
                                }}
                              />
                            </Box>
                            <Box
                              borderWidth="3"
                              borderRadius={45}
                              borderColor="white"
                              alignItems="center"
                              ml={75}
                              backgroundColor="transparent"
                              style={styles.mobileBox}
                            >
                              <Image
                                alignSelf={"center"}
                                style={{ width: 293, height: 603 }}
                                source={{
                                  uri: "https://cdn.shadow.properties/videos_spweb/Property_new.gif",
                                }}
                              />
                            </Box>
                          </HStack> */}
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
                                  color="#ffe095"
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
                </LinearGradient>
              </Box>
            </Box>
          </Center>
        </Box>
      </Hidden>
    </>
  );
});

export default SecoundWeb;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: vh(350),
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

    shadowOpacity: 0.1,
    shadowRadius: 5,

    opacity: 1,
  },
  mobileBox1: {
    shadowColor: "black",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.01,
    shadowRadius: 60,
    opacity: 5,
    width: 299,
    height: 609,
  },
  mobileBox: {
    shadowColor: "black",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 60,
    opacity: 5,
    width: 299,
    height: 609,
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
