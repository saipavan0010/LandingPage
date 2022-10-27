import React from "react";
import {
  useMediaQuery,
  Text,
  Box,
  HStack,
  VStack,
  Hidden,
  Link,
  Image,
  Icon,
} from "native-base";

import PhoneWithBack from "../assets/svg-mbl-web/PhoneWithBackground";
import Googleplay from "../assets/svg-mbl-web/GooglePlay";
import Applestore from "../assets/svg-mbl-web/AppleStore";

import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";

const WebThird = () => {
  return (
    <>
      <Hidden only={["base", "sm", "md", "lg"]}>
        <Box top={890}>
          <Image
            source={require("../assets/svg-mbl-web/the only app.png")}
            style={{ width: vw(100), height: vh(125) }}
            alt={"alternate text"}
            resizemode="cover"
            overflow={"hidden"}
          />
          <Icon
            alignSelf={"center"}
            position={"absolute"}
            style={{ width: vw(98), height: vh(115) }}
            as={<PhoneWithBack />}
          />

          <VStack position={"absolute"} marginTop={vh(31)} marginLeft={vw(13)}>
            <Text
              fontSize={vw(3.1)}
              width={vw(38)}
              fontFamily={"PoppinsSemiBold"}
              color={"#FFFFFF"}
              textAlign={"left"}
              opacity={1}
            >
              The only app you would need as a realtor
            </Text>
            <Text
              fontSize={vw(1.1)}
              width={vw(33.7)}
              height={vh(19)}
              fontFamily={"HelveticaNeueLTStdRoman"}
              color={"#d9d9d9"}
              textAlign={"left"}
              lineHeight={vh(4)}
              opacity={1}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

            <HStack space={vw(3.5)}>
              <Link
                href="https://apps.apple.com/us/app/shadowproperties/id1491176685/"
                isExternal
              >
                <Icon
                  resizemode="cover"
                  overflow={"hidden"}
                  opacity={100}
                  style={{ width: vw(13), height: vh(13) }}
                  as={<Applestore />}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=and.app.properties.shadow"
                isExternal
              >
                <Icon
                  resizemode="cover"
                  overflow={"hidden"}
                  opacity={100}
                  style={{ width: vw(13), height: vh(13) }}
                  as={<Googleplay />}
                />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Hidden>
    </>
  );
};

export default WebThird;
