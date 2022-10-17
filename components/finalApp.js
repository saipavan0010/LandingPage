import React, { useEffect } from "react";
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
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";

import { Dimensions } from "react-native";
import Privacy from "./Privacy";
import SixthWeb from "./sixthWeb";
import Third from "./ThirdWeb";
import FourthWeb from "./FourthWeb";
import FirstWeb from "./FirstWeb";
import Plan from "./Plan";
import "./styles/style.css";
import SecoundWeb from "./SecoundWeb";
import FirstMobile from "./firstscreen";
import SecondMbl1 from "./SecondMobile";
import ThirdFoldMBL from "./ThirdMobile";
import FourthMobile from "./FourthMobile";
import FifthMobile from "./FifthMobile";

const Final = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <VStack flex={1}>
        <FirstWeb />
        <SecoundWeb />
        <Third />
        <FourthWeb />
        <Plan />
        <SixthWeb navigation={navigation} />
      </VStack>
      <VStack>
        <FirstMobile />
        <SecondMbl1 />
        <ThirdFoldMBL />
        <FourthMobile />
        <FifthMobile />
      </VStack>
    </NativeBaseProvider>
  );
};

export default Final;
