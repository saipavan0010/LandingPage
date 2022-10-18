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
// import Test from "./components/test";
import Tester from "./components/FirstWeb";
import { Dimensions } from "react-native";
import Privacy from "./components/Privacy";
import Tej from "./components/sixthWeb";
import Mobile from "./components/mobile";
import Percent from "./components/percent";
import Chandu from "./components/ThirdWeb";
import Screen from "./components/second";
import Likhitha from "./components/FourthWeb";
import Plan from "./components/Plan";
import "./components/styles/style.css";
import Final from "./components/finalApp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tej2 from "./components/info";
import Faqs from "./components/Faq";
import Forminput from "./components/inputForm";
import SecoundWeb from "./components/SecoundWeb";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import TnC from "./components/termspage";
import ResponsiveFaqs from "./components/ResponsiveFAQs";

const App = () => {
  const Stack = createNativeStackNavigator();

  const { height, width } = Dimensions.get("window");
  const deviceDimension = width < 500 ? "center" : "left";
  useEffect(() => {
    Font.loadAsync({
      PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
      HelveticaNeueLTStdBd: require("./assets/fonts/helveticaneueltstdultltcno font/HelveticaNeueLTStd-Bd.otf"),
      HelveticaNeueLTStdMd: require("./assets/fonts/helveticaneueltstdultltcno font/HelveticaNeueLTStd-Md.otf"),
      HelveticaNeueLTStdRoman: require("./assets/fonts/helveticaneueltstdultltcno font/HelveticaNeueLTStd-Roman.otf"),
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Final"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          component={Final}
          name="Shadow Properties"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Privacy}
          name="Privacy"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={TnC}
          name="TnC"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Faqs}
          name="Faqs"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={ResponsiveFaqs}
          name="ResponsiveFaqs"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
