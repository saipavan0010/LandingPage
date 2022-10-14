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
import Example from "./staticFirst";
import Test from "./test";
import Tester from "./twoway";
import { Dimensions } from "react-native";
import Privacy from "./Privacy";
import Tej from "./tej";
import Mobile from "./mobile";
import Percent from "./percent";
import Chandu from "./chandu";
import Screen from "./second";
import Likhitha from "./likhitha";
import Plan from "./vijji";
import Resp from "./twoway";
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
        <Resp />
        <SecoundWeb />
        <Chandu />
        <Likhitha />
        <Plan />
        <Tej navigation={navigation} />
      </VStack>
    </NativeBaseProvider>
  );
};

export default Final;
