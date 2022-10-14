import React from "react";
import { Box,Text } from "native-base";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width

const Copyrights = () =>{
    return(
        <>
        <Box>
            <Text  color={"rgb(152,138,180)"} fontWeight={"normal"} fontSize={"18"} textAlign={"center"}>
            Copyright © 2022 Shadow Properties. {width<500?"\n":""}All rights reserved.
            </Text>
        </Box>
        
        </>

    )
}
export default Copyrights