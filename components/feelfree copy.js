import React from "react";
import { Box, Link, Text } from "native-base";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width

const text = width<800? "center":"left"

const Feelfree = () => {
  return (
    <>
      <Box>
        <Text color={"rgb(152,138,180)"} textAlign={text} lineHeight={30} fontSize={14}>
          Feel free to check our answers to{"\n"}
          <Link color={"rgb(154,85,221)"}>Frequently Asked Questions</Link>
        </Text>
      </Box>
    </>
  );
};
export default Feelfree;
