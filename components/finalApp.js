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
import Mobile from "./mobile";
import Percent from "./percent";
import Third from "./ThirdWeb";
import Screen from "./second";
import Fourth from "./FourthWeb";
import FirstWeb from "./FirstWeb";
import Plan from "./Plan";
import Resp from "./FirstWeb";
import "./styles/style.css";
// import { NavigationContainer } from "@react-navigation/native";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tej2 from "./info";
import Forminput from "./inputForm";
import SecoundWeb from "./SecoundWeb";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const Final = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <VStack flex={1}>
        <FirstWeb />
        <SecoundWeb />
        <Third />
        <Fourth />
        <Plan />
        <SixthWeb navigation={navigation} />
      </VStack>
    </NativeBaseProvider>
  );
};

export default Final;
