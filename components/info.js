import React from "react";
import {
  NativeBaseProvider,
  Box,
  Image,
  Center,
  Text,
  HStack,
  Divider,
} from "native-base";
import { Dimensions } from "react-native";
import GetStarted from "./GetStartesCard";
import Forminput from "./inputForm";
import Terms from "./terms";
import "./styles/style.css";
const { height, width } = Dimensions.get("window");

const Tej2 = ({ navigation }) => {
  return (
    <>
      <Box top="5200">
        <Image
          resizeMethod="cover"
          source={require("../assets/getintouch.png")}
          position="absolute"
          height={height}
          width={width * 30}
        />
        <Box
          position={"absolute"}
          left={20}
          top={20}
          right={40}
          height={height * 0.85}
        >
          <Box mt={10} />
          <HStack>
            <Box left={10} m={20}>
              <Text
                color={"rgb(125,43,233)"}
                fontSize={50}
                fontFamily={"HelveticaNeueLTStdBd"}
                textAlign={"left"}
                lineHeight={"72px"}
              >
                Get in touch <br />
                with us!
              </Text>
              <HStack>
                <Box>
                  <Box
                    rounded={"full"}
                    borderColor={"rgb(154,85,221)"}
                    borderStyle={"solid"}
                    borderWidth={"2px"}
                    m={2}
                    width={"25px"}
                  >
                    <Center>
                      <Image
                        resizeMethod="cover"
                        source={require("../assets/mail.png")}
                        height="12px"
                        width="12px"
                        m={1}
                      />
                    </Center>
                  </Box>
                </Box>
                <Box>
                  <Text
                    ml={"2"}
                    color={"rgb(154,85,221)"}
                    fontSize={18}
                    fontFamily={"HelveticaNeueLTStdBd"}
                    lineHeight={"30pt"}
                  >
                    info@shadow.properties
                  </Text>
                  <Text
                    fontFamily={"HelveticaNeueLTStdMd"}
                    ml={1.5}
                    mt={1}
                    color={"rgb(152,138,180)"}
                  >
                    Feel free to check our answers to
                  </Text>
                  <Text
                    fontFamily={"HelveticaNeueLTStdMd"}
                    ml={1.5}
                    color={"rgb(154,85,221)"}
                  >
                    Frequently Asked Questions
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box mt="20" ml={20}>
              <Forminput />
            </Box>
          </HStack>
          <Center mt={"auto"}>
            <Box width={width * 0.8}>
              <Center>
                <Divider
                  h={"2pt"}
                  backgroundColor={"rgb(218,212,229)"}
                  width={width * 0.71}
                  left={5}
                  mb={10}
                />
              </Center>
              <HStack>
                <Box ml={10}>
                  <Text
                    ml={12}
                    color={"rgb(152,138,180)"}
                    fontWeight={"normal"}
                    fontSize={"18"}
                  >
                    Copyright © 2022 ShadowProperties. All rights reserved.
                  </Text>
                </Box>
                <Box ml={"auto"} mr={10}>
                  <Terms navigation={navigation} />
                </Box>
              </HStack>
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );
};
export default Tej2;
