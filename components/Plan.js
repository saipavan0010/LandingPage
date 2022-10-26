import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Image,
  Pressable,
  Redirect,
  Hidden,
  Select,
  CheckIcon,
  StyleSheet,
  Card,
  Stack,
  View,
} from "native-base";

import Okok from "./Tick";
import Buttonfordrive from "./lineargradient";
const Plan = () => {
  return (
    <>
      <Hidden only={["base", "sm", "md"]}>
        <Box position={"absolute"} top={4690} width={"100%"}>
          <Image
            source={require("../assets/three.png")}
            h="864"
            w="1600"
            position="absolute"
          />
          <HStack mx="100" my="82" alignSelf={"center"} space={150}>
            <Pressable>
              {({ isHovered }) => {
                return (
                  <View>
                    {isHovered ? (
                      <Box
                        bgColor={"white"}
                        style={{
                          shadowColor: "#7D2BE959",
                          shadowOffset: { width: 0, height: 15 },

                          shadowOpacity: 1,
                          shadowRadius: 25,
                          borderRadius: 30,
                        }}
                        style1={{
                          borderRadius: 30,
                        }}
                        // ml={"270"}
                        borderRadius={30}
                        h={"680"}
                        w={"470"}
                        // mt={"82"}
                      >
                        <Text
                          mt={61}
                          color={"purple.500"}
                          fontWeight={"bold"}
                          ml={"69"}
                          fontSize={"24"}
                          mr={69}
                        >
                          Solo
                        </Text>
                        <VStack>
                          <HStack>
                            <Text
                              fontSize={"36"}
                              color={"purple.500"}
                              fontWeight={"bold"}
                              ml={"69"}
                            >
                              $99
                            </Text>
                            <Text ml={2} mt={"5"} color={"#988AB4"}>
                              (Monthly)
                            </Text>
                          </HStack>
                        </VStack>
                        <VStack ml={"69"}>
                          <HStack mt={"10"}>
                            <Text mr={"2"} h={"4"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>1 Users</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>3000 Properties/mo</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Driving Routes</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>1 Credit = $1.00</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>4*6 Mail = $0.75</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Smart Search = $0.10</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>5 Free Credits</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>E-mail Support</Text>
                          </HStack>
                        </VStack>
                        {/* <Button
                        variant={"outline"}
                        //  borderColor={"purple"}
                        colorScheme={"purple"}
                        mt={10}
                        h={"50"}
                        ml={"70"}
                        mr={"20"}
                        borderRadius={"full"}
                        bg={"purple.600"}
                      >
                        <Text> Buy License For Solo</Text>
                      </Button> */}
                        <Link href="https://web.shadow.properties/" isExternal>
                          <View
                            color={"purple.100"}
                            variant={"outline"}
                            colorScheme={"purple.600"}
                            mt={"8"}
                            ml={"70"}
                            mr={"20"}
                          >
                            <Buttonfordrive text="Buy License for Solo" />
                          </View>
                        </Link>
                      </Box>
                    ) : (
                      <Box
                        bgColor={"white"}
                        // ml={"270"}
                        borderRadius={30}
                        h={"680"}
                        w={"470"}
                        // mt={"82"}
                      >
                        <Text
                          mt={61}
                          color={"purple.500"}
                          fontWeight={"bold"}
                          ml={"69"}
                          fontSize={"24"}
                          mr={69}
                        >
                          Solo
                        </Text>
                        <VStack>
                          <HStack>
                            <Text
                              fontSize={"36"}
                              color={"purple.500"}
                              fontWeight={"bold"}
                              ml={"69"}
                            >
                              $99
                            </Text>
                            <Text ml={2} mt={"5"} color={"#988AB4"}>
                              (Monthly)
                            </Text>
                          </HStack>
                        </VStack>
                        <VStack ml={"69"}>
                          <HStack mt={"10"}>
                            <Text mr={"2"} h={"4"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}> Users</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>3000 Properties/mo</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Driving Routes</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>1 Credit = $1.00</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>4*6 Mail = $0.75</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Smart Search = $0.10</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>5 Free Credits</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>E-mail Support</Text>
                          </HStack>
                        </VStack>

                        <Button
                          variant="outline"
                          mt={10}
                          h={"50"}
                          w={"329"}
                          ml={"70"}
                          mr={"20"}
                          borderColor="purple.600"
                          borderRadius={"full"}
                          colorScheme={"purple"}
                        >
                          Buy License for Solo
                        </Button>
                      </Box>
                    )}
                  </View>
                );
              }}
            </Pressable>
            <Pressable>
              {({ isHovered }) => {
                return (
                  <View>
                    {isHovered ? (
                      <Box
                        bgColor={"white"}
                        style={{
                          shadowColor: "#7D2BE959",
                          shadowOffset: { width: 0, height: 15 },

                          shadowOpacity: 1,
                          shadowRadius: 25,
                          borderRadius: 30,
                        }}
                        // ml={"90"}
                        h={"680"}
                        w={"470"}
                        // mt={"82"}
                      >
                        <Text
                          mt={61}
                          color={"purple.500"}
                          fontWeight={"bold"}
                          ml={"69"}
                          fontSize={"24"}
                          mr={69}
                        >
                          Team
                        </Text>
                        <VStack>
                          <HStack>
                            <Text
                              fontSize={"36"}
                              color={"purple.500"}
                              fontWeight={"bold"}
                              ml={"69"}
                            >
                              $299
                            </Text>
                            <Text ml={2} mt={"5"} color={"#988AB4"}>
                              (Monthly)
                            </Text>
                          </HStack>
                        </VStack>
                        <VStack mr={"67"} ml={"69"}>
                          <HStack mt={"10 "}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>5 Users</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>9000 Properties/mo</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Live Driving Monitor</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>1 Credit = $1.00</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>4*6 Mail = $0.75</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Smart Search = $0.10</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>10 Free Credits</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Live Chat Support</Text>
                          </HStack>
                        </VStack>
                        <Link href="https://web.shadow.properties/" isExternal>
                          <View
                            color={"purple.100"}
                            variant={"outline"}
                            colorScheme={"purple.600"}
                            mt={"8"}
                            ml={"70"}
                            mr={"20"}
                          >
                            <Buttonfordrive text="Buy License for Team" />
                          </View>
                        </Link>
                      </Box>
                    ) : (
                      <Box
                        bgColor={"white"}
                        borderRadius={30}
                        color={"white"}
                        // ml={"90"}
                        h={"680"}
                        w={"470"}
                        // mt={"82"}
                      >
                        <Text
                          mt={61}
                          color={"purple.500"}
                          fontWeight={"bold"}
                          ml={"69"}
                          fontSize={"24"}
                          mr={69}
                        >
                          Team
                        </Text>
                        <VStack>
                          <HStack>
                            <Text
                              fontSize={"36"}
                              color={"purple.500"}
                              fontWeight={"bold"}
                              ml={"69"}
                            >
                              $299
                            </Text>
                            <Text ml={2} mt={"5"} color={"#988AB4"}>
                              (Monthly)
                            </Text>
                          </HStack>
                        </VStack>

                        <VStack mr={"67"} ml={"69"}>
                          <HStack mt={"10 "}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>5 Users</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>9000 Properties/mo</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Live Driving Monitor</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>1 Credit = $1.00</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>4*6 Mail = $0.75</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Smart Search = $0.10</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>10 Free Credits</Text>
                          </HStack>
                          <HStack mt={"5"}>
                            <Text mr={"2"} h={"6"} w={"5"} color={"#988AB4"}>
                              <Okok />
                            </Text>
                            <Text color={"#988AB4"}>Live Chat Support</Text>
                          </HStack>
                        </VStack>
                        <Button
                          variant="outline"
                          mt={10}
                          h={"50"}
                          w={"329"}
                          ml={"70"}
                          mr={"20"}
                          borderColor="purple.600"
                          borderRadius={"full"}
                          colorScheme={"purple"}
                        >
                          Buy License for Team
                        </Button>
                      </Box>
                    )}
                  </View>
                );
              }}
            </Pressable>
          </HStack>
        </Box>
      </Hidden>
    </>
  );
};
export default Plan;
