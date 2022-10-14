import React from "react";
import {
  Avatar,
  VStack,
  Center,
  NativeBaseProvider,
  Button,
  Box,
  Container,
  Text,
  Spacer,
  View,
} from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const Buttonfordrive = (props) => {
  return (
    <TouchableOpacity {...props} onPress={props.onPress}>
      {/* <Center flex={1} px="3" >
                <Center> */}
      <LinearGradient
        // colors={["#7D2BE9", "#BA47F3"]}
        //["#7D2AE8", "#00C4CC"]
        colors={props.colors || ["#7D2BE9", "#BA47F3"]}
        start={[1, 0]}
        end={[0, 1]}
        style={[styles.LinearGradientStyle, props.stylee]}
      >
        <Center>
          <Text {...props} color={"white"}>
            {props.text}
          </Text>
        </Center>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Buttonfordrive;

const styles = StyleSheet.create({
  LinearGradientStyle: {
    height: 50,
    paddingLeft: 18,
    paddingTop: 15,
    padding: 8,
    paddingRight: 15,
    borderRadius: 25,
    width: 329,
    margin: 5,
    mt: "5",
  },
});
