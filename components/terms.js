import React from "react";
import { Text, Stack, Divider, HStack, Box } from "native-base";
import { Pressable, Dimensions } from "react-native";

const Terms = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");

  return (
    <>
      {width < 800 ? (
        <>
          <Box>
            <HStack>
              <Pressable
                onPress={() => {
                  navigation.navigate("TnC", {
                    data: window.scrollTo({
                      top: 1,
                      behavior: "smooth",

                      edit: true,
                    }),
                  });
                }}
              >
                <Text color="#988AB4" fontWeight={"normal"} fontSize={"18"}>
                  Terms
                </Text>
              </Pressable>

              <Stack>
                <Divider
                  orientation="vertical"
                  thickness={1}
                  fontWeight="bold"
                  bg="rgb(152,138,180)"
                  ml={["2"]}
                  height="25"
                />
              </Stack>
              <Pressable
                onPress={() => {
                  navigation.navigate("Privacy", {
                    data: window.scrollTo({
                      top: 10,
                      behavior: "smooth",

                      edit: true,
                    }),
                  });
                }}
              >
                <Text
                  ml={"2"}
                  color="#988AB4"
                  fontWeight={"normal"}
                  fontSize={"18"}
                >
                  Privacy
                </Text>
              </Pressable>

              <Stack>
                <Divider
                  orientation="vertical"
                  thickness={1}
                  fontWeight="bold"
                  bg="rgb(152,138,180)"
                  ml={["2"]}
                  height="25"
                />
              </Stack>
              <Pressable
                onPress={() => {
                  navigation.navigate("ResponsiveFaqs", {
                    data: window.scrollTo({
                      top: 1,
                      behavior: "smooth",

                      edit: true,
                    }),
                  });
                }}
              >
                <Text
                  ml={"2"}
                  color="#988AB4"
                  fontWeight={"normal"}
                  fontSize={"18"}
                >
                  FAQs
                </Text>
              </Pressable>
            </HStack>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <HStack>
              <Pressable
                onPress={() => {
                  navigation.navigate("TnC", {
                    data: window.scrollTo({
                      top: 1,
                      behavior: "smooth",

                      edit: true,
                    }),
                  });
                }}
              >
                <Text color="#988AB4" fontWeight={"normal"} fontSize={"18"}>
                  Terms
                </Text>
              </Pressable>

              <Stack>
                <Divider
                  orientation="vertical"
                  thickness={1}
                  fontWeight="bold"
                  bg="rgb(152,138,180)"
                  ml={["2"]}
                  height="25"
                />
              </Stack>
              <Pressable
                onPress={() => {
                  navigation.navigate("Privacy", {
                    data: window.scrollTo({
                      top: 10,
                      behavior: "smooth",

                      edit: true,
                    }),
                  });
                }}
              >
                <Text
                  ml={"2"}
                  color="#988AB4"
                  fontWeight={"normal"}
                  fontSize={"18"}
                >
                  Privacy
                </Text>
              </Pressable>

              <Stack>
                <Divider
                  orientation="vertical"
                  thickness={1}
                  fontWeight="bold"
                  bg="rgb(152,138,180)"
                  ml={["2"]}
                  height="25"
                />
              </Stack>
              <Pressable
                onPress={() => {
                  navigation.navigate("WebFaqs", {
                    data: window.scrollTo({
                      top: 1,
                      behavior: "smooth",

                      edit: true,
                    }),
                  });
                }}
              >
                <Text
                  ml={"2"}
                  color="#988AB4"
                  fontWeight={"normal"}
                  fontSize={"18"}
                >
                  FAQs
                </Text>
              </Pressable>
            </HStack>
          </Box>
        </>
      )}
    </>
  );
};
export default Terms;
