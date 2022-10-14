import React from "react";
import { Box, Text } from "native-base";
import { Dimensions,Platform } from "react-native";
const {height,width} = Dimensions.get("window")
const text = width<500 ? "center":"left"

const Getintouch = () => {
  return (
    <>
      <Box>
        <Text
          color={"rgb(125,43,233)"}
          fontSize={width<800?30:50}  
          textAlign={text}
        >
          Get in touch<br />
          with us!
        </Text>
      </Box>
    </>
  );
};
export default Getintouch;
