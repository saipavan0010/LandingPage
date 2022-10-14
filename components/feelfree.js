import React from "react";
import { Box, Link, Text } from "native-base";
import { Dimensions, Pressable } from "react-native";

const width = Dimensions.get("window").width;

const text = width < 800 ? "center" : "left";

const Feelfree = ({ navigation }) => {
  return (
    <>
      <Box>
        <Text
          color={"rgb(152,138,180)"}
          textAlign={text}
          lineHeight={30}
          fontSize={14}
        >
          Feel free to check our answers to{"\n"}
          <Pressable
            onPress={() => {
              navigation.navigate("Faqs"), console.log("ghhgj");
            }}
          >
            <Text color={"rgb(154,85,221)"}>Frequently Asked Questions</Text>
          </Pressable>
        </Text>
      </Box>
    </>
  );
};
export default Feelfree;
