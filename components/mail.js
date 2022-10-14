import React from "react";
import { Box, Center, Text, Image, HStack, Icon } from "native-base";
import { Dimensions } from "react-native";
// import Mail from "./svgs/mailIcon";
import Mail from "./mailIcon";
import SVGComponent from "./mailIcon";
const { height, width } = Dimensions.get("window");

const Mailus = () => {
  return (
    <>
      {width < 800 ? (
        <Box>
          <Center>
            <Box>
              <Box
                rounded={"full"}
                borderColor={"rgb(154,85,221)"}
                borderStyle={"solid"}
                borderWidth={"2px"}
                padding={3}
                m={2}
                width={"51px"}
                height={"50px"}
              >
                <Center>
                  {/* <Image
                  resizeMethod="cover"
                  source={require("../assets/mail.png")}
                  height="24px"
                  width="24px"
                  
                /> */}
                  <Icon as={<Mail />} size={5} />
                </Center>
              </Box>
            </Box>
            <Text
              ml={"2"}
              color={"rgb(154,85,221)"}
              fontSize={18}
              lineHeight={"30pt"}
            >
              info@shadow.properties
            </Text>
          </Center>
        </Box>
      ) : (
        <HStack>
          <Box
            rounded={"full"}
            borderColor={"rgb(154,85,221)"}
            borderStyle={"solid"}
            borderWidth={"2px"}
            m={2}
            p={2}
            width={35}
          >
            <Center>
              <Icon as={<Mail />} size={4} />
            </Center>
          </Box>
          <Text
            ml={"2"}
            color={"rgb(154,85,221)"}
            fontSize={18}
            lineHeight={"30pt"}
          >
            info@shadow.properties
          </Text>
        </HStack>
      )}
    </>
  );
};
export default Mailus;
