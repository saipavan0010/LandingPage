import React, { useEffect } from "react";
import {
  Text,
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Image,
  Link,
} from "native-base";

import PhoneWithBack from "./phone_with_background";
import Googleplay from "./googleplay";
import Applestore from "./Applestore";

import * as Font from "expo-font";
import { vw, vh } from "react-native-expo-viewport-units";

const App = () => {
  return (
    <>
      <Box top={890} width={vw(100)}>
        <Box>
          <PhoneWithBack
            // width={vw(100)}
            // height={vh(100)}
            resizeMode="cover"
            overflow={"hidden"}
            opacity={"100%"}
          />
        </Box>

        <VStack position={"absolute"} marginTop={vh(36)} marginLeft={vw(13)}>
          <Text
            fontSize={vw(3)}
            width={vw(38)}
            // height={vh(19)}
            fontFamily={"PoppinsSemiBold"}
            color={"#FFFFFF"}
            textAlign={"left"}
            letterSpacing={"0px"}
            opacity={1}
          >
            The only app you would need as a realtor
          </Text>
          <Text
            fontSize={vh(2.2)}
            width={vw(33.7)}
            // height={vh(22)}
            fontFamily={"HelveticaNeueLTStdRoman"}
            // color={"#FFFFFF"}
            color={"#d9d9d9"}
            textAlign={"left"}
            lineHeight={vh(4)}
            letterSpacing={"0px"}
            opacity={1}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          <HStack space={vw(3.5)} marginTop={vh(4.5)}>
            {/* <Box opacity={"100%"}> */}
            <Link
              href="https://apps.apple.com/us/app/shadowproperties/id1491176685/"
              isExternal
            >
              <Applestore width={vw(13)} height={vh(10)} />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=and.app.properties.shadow"
              isExternal
            >
              <Googleplay width={vw(13)} height={vh(10)} />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default App;
