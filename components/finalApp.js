import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  NativeBaseProvider,
  Button,
  Image,
  Box,
  Pressable,
  HStack,
  VStack,
  Stack,
  View,
} from "native-base";
const { width, height } = Dimensions.get("window");
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";

import { Dimensions } from "react-native";
import Privacy from "./Privacy";
import SixthWeb from "./sixthWeb";
import Third from "./ThirdWeb";
import FirstWeb from "./FirstWeb";
import Plan from "./Plan";
import "./styles/style.css";
import SecoundWeb from "./SecoundWeb";
import FirstMobile from "./firstscreen";
import SecondMbl1 from "./SecondMobile";
import ThirdFoldMBL from "./ThirdMobile";
import FifthMobile from "./FifthMobile";
import WebThird from "./WebThirdFold";
import ResponsiveThirdFold from "./ResponsiveThirdFold";
import Mobilefourthfold from "./Mobilefourthfold";
import FourthWeb from "../components/FourthWeb";

const Final = ({ navigation }) => {
  const [change, setChange] = useState(false);
  const screen2 = useRef();
  const screen4 = useRef();
  const screen5 = useRef();
  const screen6 = useRef();
  // useEffect(() => {
  //   console.log(firstweb.current);
  //   if (firstweb.current) {
  //     console.log(firstweb.current.scrollIntoView(true));
  //   }
  // }, [change]);
  return (
    <NativeBaseProvider>
      <VStack>
        <FirstWeb
          screen2={screen2}
          screen4={screen4}
          screen5={screen5}
          screen6={screen6}
        />
        <Box
          ref={screen2}
          onLayout={(e) => {
            console.log(e.nativeEvent.layout);
          }}
        >
          <SecoundWeb />
        </Box>
        <Box
          onLayout={(e) => {
            console.log(e.nativeEvent.layout);
          }}
        >
          <WebThird />
        </Box>
        <FourthWeb />
        <Plan />
      </VStack>
      <VStack>
        <FirstMobile />
        <SecondMbl1 />
        <Box>
          <ResponsiveThirdFold />
        </Box>
        <Box>
          <Mobilefourthfold />
        </Box>
        <FifthMobile />
      </VStack>
      <SixthWeb navigation={navigation} />
    </NativeBaseProvider>
  );
};

export default Final;
