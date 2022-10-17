import React, { useEffect } from "react";
import {
  Text,
  NativeBaseProvider,
  Button,
  Image,
  Pressable,
  HStack,
  HamburgerIcon,
  Link,
  VStack,
  Stack,
  View,
  Spacer,
  Box,
} from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Menu } from "native-base";
import * as Font from "expo-font";
import { Dimensions } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const Privacy = () => {
  return (
    <>
      <View>
        <Image
          source={require("../assets/getintouch.png")}
          alt="Alternate Text"
          width={10 * vw}
          height={100 * vh}
        />
        <HStack top={"2vh"} alignSelf={"center"} position={"absolute"}>
          <Text
            fontFamily={"HelveticaNeueLTStdBd"}
            fontSize={"3vh"}
            color={"#7D2BE9"}
          >
            PRIVACY POLICY
          </Text>
        </HStack>
        <HStack position={"absolute"} top={"8vh"}>
          <Text fontSize={"2vh"} textAlign={"center"}>
            {` Thank you for choosing to be part of our community at ZeroPoint Platforms Inc, doing business as ShadowProperties(“Shadow.Properties”, “we”,\n “us”, or “our”). We are committed to
              protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please
              contact us at info@shadow.properties. When you visit our website https://shadow.properties, mobile application, and use our services, you trust us with your personal information. We take
              your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
              We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites or Apps and
              our services. This privacy policy applies to all information collected through our website (such as https://shadow.properties),mobile application, ("Apps"), and/or any related services, sales,
              marketing or events (we refer to them collectively in this privacy policy as the "Services"). Please read this privacy policy carefully as it will help you make informed decisions about
              sharing your personal information with us.`}
          </Text>
        </HStack>
      </View>
    </>
  );
};
export default Privacy;
