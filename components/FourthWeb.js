import React, { useEffect } from "react";
import {
  Text,
  HStack,
  Heading,
  NativeBaseProvider,
  Image,
  Pressable,
  Card,
  Stack,
  View,
  Center,
} from "native-base";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import { Dimensions } from "react-native";

const Fourth = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <>
      <View
        alignSelf={"center"}
        position={"absolute"}
        top={3100}
        width={vw}
        height={height}
      >
        <Image
          position={"absolute"}
          source={require("../assets/what_we_offer_bg.png")}
          w="100%"
          h="100%"
        />
        <Stack width={"100%"} height={"135%"}>
          <Text
            alignSelf={"center"}
            position="absolute"
            fontSize={"36px"}
            marginTop={"90.56px"}
            fontFamily={"PoppinsSemiBold"}
            color={"#7D2BE9"}
          >
            What We Offer
          </Text>
          <Center>
            <View mr="330" mt="210">
              {/*  ROW-1  */}

              <HStack space={365}>
                {/*  CARD-1  */}
                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Pin Properties
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Search for a property address or drop a pin on the map to add a property to your property list and interact further.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/pin_properties.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Pin Properties
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Search for a property address or drop a pin on the map to add a property to your property list and interact further.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/pin_properties.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>

                {/*  CARD-2  */}
                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Bulk Add Properties
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Draw a selection line around the properties on the map to add multiple properties at once to your property list.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/bulk_add.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Bulk Add Properties
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Draw a selection line around the properties on the map to add multiple properties at once to your property list.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/bulk_add.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>

                {/*  CARD-3  */}
                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Parcel Lookup
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Get parcel details of any property from the county, including structure, deeds, taxes, assessments, and valuations.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/parcel_lookup.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Parcel Lookup
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Get parcel details of any property from the county, including structure, deeds, taxes, assessments, and valuations.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/parcel_lookup.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>
              </HStack>
              {/*  ROW-2  */}

              <HStack space={365} mt={330}>
                {/*  CARD-4  */}

                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                MLS Properties
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Nationwide on market properties to choose using custom filters, to add on market properties to your list.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/analytics.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                MLS Properties
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Comprehensive analytics to be aware of your business performance, eventually helping make complicated business decisions.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/analytics.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>

                {/*  CARD-5  */}
                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Owner Lookup
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Get a property's owner's name and postal address for sending postcards and interacting with a deal.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/owner_lookup.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Owner Lookup
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Get a property's owner's name and postal address for sending postcards and interacting with a deal.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/owner_lookup.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>

                {/*  CARD-6  */}
                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Smart Search
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Get the phone number and e-mail address of a property's owner for sending an e-mail or making a phone call to interact with a deal.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/smart_search.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Smart Search
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Get the phone number and e-mail address of a property's owner for sending an e-mail or making a phone call to interact with a deal.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/smart_search.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>
              </HStack>
              {/*  ROW-3  */}

              <HStack space={365} mt={330}>
                {/*  CARD-7  */}

                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Automated Mails
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Set up campaigns to automatically send postcards to property owners and configure periodic follow-ups to ensure a response.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/automated_mails.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Automated Mails
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Set up campaigns to automatically send postcards to property owners and configure periodic follow-ups to ensure a response.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/automated_mails.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>

                {/*  CARD-8  */}

                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Automated E-Mails
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Set up campaigns to automatically send e-mails to property owners and configure periodic follow-ups to ensure a response.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/automated_mails.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Automated E-Mails
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Set up campaigns to automatically send e-mails to property owners and configure periodic follow-ups to ensure a response.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/automated_mails.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>

                {/*  CARD-9  */}

                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Live Driving Monitor
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Monitor your team members driving and distance in real-time as they drive around and find properties for you.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/live_driving.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Live Driving Monitor
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Monitor your team members driving and distance in real-time as they drive around and find properties for you.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/live_driving.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>
              </HStack>
              {/*  ROW-4  */}

              {/*  CARD-10  */}
              <HStack space={365} mt={330}>
                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Driving Routes
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`All the driving routes are saved for keeping track of driving route, distance and the properties added during a drive.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/driving_routes.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Driving Routes
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`All the driving routes are saved for keeping track of driving route, distance and the properties added during a drive.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/driving_routes.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>

                {/*  CARD-11  */}
                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                User Roles
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Owner, Admin and User are the three user roles with different access controls to manage your team according to your business hierarchy.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/user_roles.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                User Roles
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Owner, Admin and User are the three user roles with different access controls to manage your team according to your business hierarchy.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/user_roles.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>

                {/*  CARD-12  */}

                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Pipelines
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Keep track of your properties based on the negotiation status, add/remove pipelines and move property cards to the suitable pipeline.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/pipelines.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Pipelines
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Keep track of your properties based on the negotiation status, add/remove pipelines and move property cards to the suitable pipeline.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/pipelines.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>
              </HStack>

              {/* CARD-13 */}
              <HStack alignSelf={"center"} mt={330}>
                <Pressable>
                  {({ isHovered }) => {
                    return (
                      <View>
                        {isHovered ? (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              style={{
                                shadowColor: "#7D2BE959",
                                shadowOffset: { width: 0, height: 15 },
                                margin: 5,
                                // marginHorizontal:2,
                                shadowOpacity: 0.7,
                                shadowRadius: 40,
                                borderRadius: 40,
                              }}
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Analytics
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Comprehensive analytics to be aware of your business performance, eventually helping make complicated business decisions.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                                style={{
                                  shadowColor: "#FFB90C4D",
                                  shadowOffset: { width: 0, height: 15 },
                                  margin: 5,
                                  // marginHorizontal:2,
                                  shadowOpacity: 1,
                                  shadowRadius: 20,
                                  borderRadius: 20,
                                }}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/analytics.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        ) : (
                          <View>
                            <Card
                              width="370px"
                              height="270px"
                              borderRadius="40px"
                              bg="#F9F1FD"
                              borderColor="#FFFFFF"
                              borderWidth={"3px"}
                              shadow={isHovered ? "8" : "1"}
                              position="absolute"
                              alignSelf={"flex-start"}
                              shadowcolour="yellow"
                            >
                              <Heading
                                pl={22}
                                pt={50}
                                fontSize={"24px"}
                                color={"#6D549F"}
                                fontFamily={"HelveticaNeueLTStdBd"}
                              >
                                Analytics
                              </Heading>
                              <Text
                                pt={"10.78px"}
                                pl={22}
                                color="#988AB4"
                                fontSize={"18px"}
                                width="300"
                                fontFamily={"HelveticaNeueLTStdMd"}
                              >
                                {`Comprehensive analytics to be aware of your business performance, eventually helping make complicated business decisions.`}
                              </Text>
                            </Card>
                            <View mt={-7} ml={35}>
                              <Card
                                width="60px"
                                height="60px"
                                backgroundColor="#8339FF"
                                borderRadius="20px"
                                borderWidth="3px"
                                position={"absolute"}
                                bg={isHovered ? "#FFBB15" : "#8339FF"}
                                borderColor={isHovered ? "#FFE8AE" : "#C099FE"}
                              >
                                <View
                                  position="absolute"
                                  alignSelf="center"
                                  margin="-1"
                                >
                                  <Image
                                    w={"33px"}
                                    h={"33px"}
                                    source={require("../assets/analytics.png")}
                                  />
                                </View>
                              </Card>
                            </View>
                          </View>
                        )}
                      </View>
                    );
                  }}
                </Pressable>
              </HStack>
            </View>
          </Center>
        </Stack>
      </View>
    </>
  );
};
export default Fourth;
