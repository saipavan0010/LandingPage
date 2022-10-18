// import React, { useEffect } from "react";
// import {
//   Text,
//   NativeBaseProvider,
//   Button,
//   Image,
//   Pressable,
//   HStack,
//   VStack,
//   Stack,
//   View,
// } from "native-base";
// import { StyleSheet, ScrollView } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import * as Font from "expo-font";
// import { Dimensions } from "react-native";

// const Tester = () => {
//   const { height, width } = Dimensions.get("window");
//   const deviceDimension = width < 500 ? "center" : "inherit";
//   const req =
//     width < 500
//       ? require("../assets/hero_image_mobile.png")
//       : require("../assets/hero_image_updated.png");
//   return (
//     <NativeBaseProvider>
//       <View flex={1}>
//         <Image
//           style={web.image}
//           source={req}
//           alt="Alternate Text"
//           size={"full"}
//         />
//         <Image
//           style={web.logo}
//           position={"absolute"}
//           source={require("../assets/logo_white.png")}
//           alt="Alternate Text"
//           size={"xl"}
//         />
//         <Text
//           fontFamily={"PoppinsSemiBold"}
//           position={"absolute"}
//           style={web.text}
//           textAlign={deviceDimension}
//         >
//           The Simple Way
//           <br />
//           to Start Real Estate
//           <br />
//           Investing
//         </Text>
//         <Text
//           fontFamily={"PoppinsMedium"}
//           position={"absolute"}
//           style={web.navText1}
//         >
//           How it works
//         </Text>
//         <Text
//           fontFamily={"PoppinsMedium"}
//           position={"absolute"}
//           style={web.navText2}
//         >
//           Features
//         </Text>
//         <Text
//           fontFamily={"PoppinsMedium"}
//           position={"absolute"}
//           style={web.navText3}
//         >
//           Pricing
//         </Text>
//         <Text
//           fontFamily={"PoppinsMedium"}
//           position={"absolute"}
//           style={web.navText4}
//         >
//           Contact
//         </Text>
//         {/* <HStack top={576} position={"absolute"}> */}
//         <Button
//           position={"absolute"}
//           style={web.button}
//           variant="outline"
//           size="sm"
//           top={576}
//         >
//           <Text
//             fontFamily={"HelveticaNeueLTStdBd"}
//             fontWeight={"medium"}
//             color={"#FFFFFF"}
//             textAlign={"center"}
//             fontSize={18}
//           >
//             Start Free Trial
//           </Text>
//         </Button>
//         <Pressable top={576} left={436} position={"absolute"}>
//           <AntDesign
//             position={"absolute"}
//             name="play"
//             size={56}
//             color="white"
//           />
//         </Pressable>
//         {/* </HStack> */}
//         <Text
//           fontFamily={"HelveticaNeueLTStdBd"}
//           style={web.watch}
//           fontWeight={"medium"}
//           position={"absolute"}
//         >
//           Watch Video
//         </Text>
//       </View>
//     </NativeBaseProvider>
//   );
// };

// export default Tester;

// const web = StyleSheet.create({
//   image: {
//     top: 0,
//     left: 0,
//     opacity: 1,
//   },
//   logo: {
//     top: 15,
//     left: 205,
//     width: 75,
//     height: 100,
//     opacity: 0.99,
//   },
//   text: {
//     fontSize: 56,
//     color: "#FFFFFF",
//     // top: 235,
//     // left: 205,
//     // textAlign: deviceDimension,
//   },
//   navText1: {
//     top: 55,
//     left: 765,
//     color: "#FFFFFF",
//   },
//   navText2: {
//     top: 55,
//     left: 909,
//     color: "#FFFFFF",
//   },
//   navText3: {
//     top: 55,
//     left: 1023,
//     color: "#FFFFFF",
//   },
//   navText4: {
//     top: 55,
//     left: 1124,
//     color: "#FFFFFF",
//   },
//   button: {
//     left: 205,
//     height: 60,
//     width: 200,
//     borderRadius: 30,
//     borderWidth: 2,
//   },

//   watch: {
//     fontSize: 18,
//     color: "#FFFFFF",
//     left: 516,
//     top: 595,
//   },
// });

import React, { useEffect } from "react";
import {
  Text,
  NativeBaseProvider,
  Button,
  Image,
  Pressable,
  Hidden,
  HStack,
  VStack,
  Stack,
  View,
  Link,
  Box,
} from "native-base";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Dimensions } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const FirstWeb = (props) => {
  const { height, width } = Dimensions.get("window");

  const gotoHowitwork = () =>
    window.scrollTo({
      top: vh(100),
      behavior: "smooth",
    });

  const gotofeatures = () =>
    window.scrollTo({
      // top: 3200,
      top: vh(430),
      behavior: "smooth",
    });

  const gotoPricing = () =>
    window.scrollTo({
      // top: 4915,
      top: vh(677),
      behavior: "smooth",
    });

  const gotocontacts = () =>
    window.scrollTo({
      // top: 6860,
      top: vh(1000),
      behavior: "smooth",
    });
  return (
    <>
      <Hidden only={["base", "sm", "md"]}>
        <View flex={1} zIndex="999">
          <Image
            source={require("../assets/hero_image_updated.png")}
            alt="Alternate Text"
            width={vw(100)}
            height={vh(100)}
          />
          <Image
            //   style={styles.logo}
            top={"3vh"}
            left={"13vw"}
            position={"absolute"}
            source={require("../assets/logo_white.png")}
            alt="Alternate Text"
            // width={"8vw"}
            // height={"14vh"}
            size={"lg"}
          />
          <Text
            fontFamily={"PoppinsSemiBold"}
            position={"absolute"}
            top={"30vh"}
            left={"13vw"}
            // textAlign={"left"}
            height={"20vh"}
            width={"50vw"}
            justifyContent={"left"}
            color={"#FFFFFF"}
            fontSize={"8vh"}
            //   style={styles.text}
          >
            {`The Simple Way \n to Start Real Estate \n Investing`}
          </Text>
          <Text
            fontFamily={"PoppinsMedium"}
            position={"absolute"}
            // style={styles.navText1}
            top={"8vh"}
            left={"50vw"}
            fontSize={"2vh"}
            color={"#FFFFFF"}
            onClick={gotoHowitwork}
          >
            How it works
          </Text>
          <Text
            fontFamily={"PoppinsMedium"}
            position={"absolute"}
            // style={styles.navText2}
            left={"60vw"}
            top={"8vh"}
            fontSize={"2vh"}
            color={"#FFFFFF"}
            onClick={gotofeatures}
          >
            Features
          </Text>
          <Text
            fontFamily={"PoppinsMedium"}
            position={"absolute"}
            left={"67vw"}
            top={"8vh"}
            color={"#FFFFFF"}
            fontSize={"2vh"}
            // style={styles.navText3}
            onClick={gotoPricing}
          >
            Pricing
          </Text>
          <Text
            fontFamily={"PoppinsMedium"}
            position={"absolute"}
            left={"73vw"}
            top={"8vh"}
            color={"#FFFFFF"}
            fontSize={"2vh"}
            // style={styles.navText4}
            onClick={gotocontacts}
          >
            Contact
          </Text>

          <Button
            position={"absolute"}
            // style={styles.button}
            variant="outline"
            // size="sm"
            size={"13vw"}
            height={"7vh"}
            left={"13vw"}
            borderRadius={"full"}
            // width={"15vw"}
            // height={"1vh"}
            top={"77vh"}
          >
            <Link href="https://web.shadow.properties/" isExternal>
              <Text
                fontFamily={"HelveticaNeueLTStdBd"}
                fontWeight={"medium"}
                color={"#FFFFFF"}
                textAlign={"center"}
                fontSize={"2vh"}
              >
                Start Free Trial
              </Text>
            </Link>
          </Button>

          <Pressable top={"77vh"} left={"30vw"} position={"absolute"}>
            <Link href="https://web.shadow.properties/" isExternal>
              <AntDesign
                position={"absolute"}
                name="play"
                size={"6vh"}
                color="white"
              />
            </Link>
          </Pressable>
          <Text
            fontFamily={"HelveticaNeueLTStdBd"}
            fontWeight={"medium"}
            top={"79vh"}
            color={"#FFFFFF"}
            left={"35vw"}
            fontSize={"2vh"}
            position={"absolute"}
          >
            Watch Video
          </Text>
        </View>
      </Hidden>
    </>
  );
};

export default FirstWeb;

const styles = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    opacity: 1,
  },
  logo: {
    top: 15,
    left: 205,
    width: 75,
    height: 100,
    opacity: 0.99,
  },
  text: {
    fontSize: 56,
    color: "#FFFFFF",
    top: 235,
    left: 205,
    textAlign: "left",
  },
  navText1: {
    top: 55,
    left: 765,
    color: "#FFFFFF",
  },
  navText2: {
    top: 55,
    left: 909,
    color: "#FFFFFF",
  },
  navText3: {
    top: 55,
    left: 1023,
    color: "#FFFFFF",
  },
  navText4: {
    top: 55,
    left: 1124,
    color: "#FFFFFF",
  },
  button: {
    left: 205,
    height: 60,
    width: 200,
    borderRadius: 30,
    borderWidth: 2,
  },
  // design: {
  //   left: 436,
  // },
  watch: {
    fontSize: 18,
    color: "#FFFFFF",
    left: 516,
    top: 590,
  },
});
